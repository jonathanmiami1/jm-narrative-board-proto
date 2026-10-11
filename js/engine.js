// Client-side engine for the static narrative board prototype. Sample data only. No network calls.
// Mirrors the 8780 prototype server: append-only queue (latest line per id wins), dedupe, routing table,
// simulated acks (Sent -> Received 4s -> Acted 10s), Later parks to next day, sweep, simulated bot posts.
(function(){
const D = window.NB_DATA;
const KEY = 'nb_static_state_v2';
const ACK_RECEIVED_S = 4, ACK_ACTED_S = 10, NO_REPLY_S = 7200;
const SILO_RE = /\bP3\b|Hapana|\bGHL\b|GoHighLevel|Dashview|\bHQ\b|Asana/i;
const OPTIONS = D.options;
function fresh(){ return {lines: JSON.parse(JSON.stringify(D.queue_seed)), outbox: [], ai_overlay: {}, view_offset_days: 0, sweep_runs: [], last_change: null}; }
const NO_REC = ['', 'No recommendation given'];
function hasRec(it){ return !NO_REC.includes(((it.recommendation||'')+'').trim()); }
function touch(){ S.last_change = nowISO(); }
function dayLabel(ds){ const [y,m,d]=ds.split('-').map(Number); return new Date(Date.UTC(y,m-1,d,12)).toLocaleDateString('en-US',{timeZone:'UTC',weekday:'long',month:'short',day:'numeric'}).replace(',',''); }
function load(){ try { return JSON.parse(localStorage.getItem(KEY)) || fresh(); } catch(e){ return fresh(); } }
function save(s){ localStorage.setItem(KEY, JSON.stringify(s)); }
let S = load();
const nowISO = () => new Date().toISOString();
const denverDate = d => new Intl.DateTimeFormat('en-CA',{timeZone:'America/Denver',year:'numeric',month:'2-digit',day:'2-digit'}).format(d);
function addDays(ds, n){ const [y,m,d]=ds.split('-').map(Number); const t=new Date(Date.UTC(y,m-1,d+n)); return t.toISOString().slice(0,10); }
function dayDiff(a, b){ const p=s=>{const [y,m,d]=s.split('-').map(Number);return Date.UTC(y,m-1,d);}; return Math.round((p(a)-p(b))/86400000); }
function viewDate(){ return addDays(denverDate(new Date()), S.view_offset_days ? 1 : 0); }
function normQ(s){ return (s||'').toLowerCase().replace(/^\s*(jon|jm)\s*[,:]\s*/,'').replace(/[^a-z0-9 ]+/g,' ').replace(/\s+/g,' ').trim(); }
// similarity like difflib ratio: 2*LCS-ish via bigram Dice on normalized text
function similar(a, b){ a=normQ(a); b=normQ(b); if (a===b) return true; const bg=s=>{const m=new Map(); for(let i=0;i<s.length-1;i++){const g=s.slice(i,i+2); m.set(g,(m.get(g)||0)+1);} return m;}; const A=bg(a),B=bg(b); let inter=0; for(const [g,c] of A){ inter+=Math.min(c,B.get(g)||0);} const tot=Math.max(1,a.length-1+b.length-1); return 2*inter/tot >= 0.9; }
function mergeLine(base, line){ for (const [k,v] of Object.entries(line)){ if (k==='source'){ const cur=base.source||[]; for (const s of (Array.isArray(v)?v:[v])) if (s && !cur.includes(s)) cur.push(s); base.source=cur; } else base[k]=v; } }
function loadQueue(){
  const byId={}, order=[];
  for (const line of S.lines){ const i=line.id; if(!i) continue; if(!byId[i]){ byId[i]={}; order.push(i);} mergeLine(byId[i], JSON.parse(JSON.stringify(line))); }
  const alias={}, cards=[];
  order.sort((x,y)=>(byId[x].asked_at||'').localeCompare(byId[y].asked_at||''));
  for (const i of order){
    const it=byId[i]; if(!it.question) continue;
    const canon=cards.find(c=>(c.owner_bot||{}).id===(it.owner_bot||{}).id && c.app===it.app && similar(c.question,it.question));
    if(!canon){ it.merged_ids=[]; cards.push(it); alias[i]=i; }
    else { for (const s of it.source||[]) if(!canon.source.includes(s)) canon.source.push(s); if((it.asked_at||'9')<(canon.asked_at||'9')) canon.asked_at=it.asked_at; canon.merged_ids.push(i); alias[i]=canon.id; }
  }
  return [cards.filter(c=>!SILO_RE.test(JSON.stringify(c))), alias];
}
function findDup(cards, ownerId, app, q){ return cards.find(c=>(c.owner_bot||{}).id===ownerId && c.app===app && similar(c.question,q)); }
function route(item){
  const rt=D.routing, rooms=rt.rooms; const roomById={}; for (const [k,v] of Object.entries(rooms)) roomById[v.id]=[k,v];
  const appRoom={}; for (const [k,v] of Object.entries(rt.app_room)) if(!k.startsWith('_')) appRoom[k]=v;
  const app=item.app, typ=item.type, room=item.room; const fromSweep=(Array.isArray(item.source)?item.source:[]).some(s=>String(s).startsWith('Sweep'));
  for (const rule of rt.rules){
    const m=rule.match||{};
    if (m.app && !m.app.includes(app)) continue;
    if (m.type && !m.type.includes(typ)) continue;
    if (m.room && !m.room.includes(room)) continue;
    if (m.room_not && m.room_not.includes(room)) continue;
    if (m.room_known && !roomById[room]) continue;
    if (m.app_has_room && !appRoom[app]) continue;
    if (m.from_sweep && !fromSweep) continue;
    const to=rule.to; let dest=null;
    if (to.startsWith('room:')){ let key=to.split(':')[1]; if(key==='from_item') key=roomById[room][0]; else if(key==='from_app') key=appRoom[app]; const r=rooms[key]; dest={kind:'room',key,name:r.name,id:r.id}; }
    else if (to.startsWith('agent:')){ const key=to.split(':')[1]; const a=rt.agents[key]; dest={kind:'bot',key,name:a.name,id:a.id}; }
    else if (to==='owner_bot'){ const ob=item.owner_bot||{}; dest={kind:'bot',key:'owner_bot',name:ob.name||'the bot that asked',id:ob.id}; }
    if (dest) return {destination:dest, rule:rule.name, who_acts:rule.who_acts};
  }
  const a=rt.agents['chief-of-staff']; return {destination:{kind:'bot',key:'chief-of-staff',name:a.name,id:a.id}, rule:'fallback', who_acts:'Chief of Staff'};
}
function ackText(item, choice){
  const so=item.type==='sign-off';
  if (choice==='Go with recommendation'){ let r=item.recommendation||'as proposed'; if(r==='Yes-with-change') r='yes, with a change'; return `Going with the recommendation (${r}). On it now.`; }
  if (choice==='Yes') return so?'Signed off. Moving it forward now.':'Got your yes. Acting on it now.';
  if (choice==='No') return so?'Sent back with your comment. Fixing it.':'Understood, not doing it. Your comment is noted.';
  if (choice==='Later') return "Noted. Holding until it comes back on tomorrow's board.";
  return 'Got it. Doing what you asked instead.';
}
function progressAcks(){
  let changed=false; const now=Date.now();
  for (const e of S.outbox){
    const sent=Date.parse(e.sent_at); const el=(now-sent)/1000;
    if (e.status==='Sent' && el>=ACK_RECEIVED_S){ e.status='Received'; e.received_at=new Date(sent+ACK_RECEIVED_S*1000).toISOString(); changed=true; }
    if (e.status==='Received' && el>=ACK_ACTED_S){
      e.status='Acted'; e.acted_at=new Date(sent+ACK_ACTED_S*1000).toISOString(); e.ack=e.planned_ack; changed=true;
      if (e.kind==='queue'){ const line={id:e.item_id, ack:e.ack, ack_at:e.acted_at, ack_by:e.destination.name}; if(e.choice!=='Later') line.status='acted'; S.lines.push(line); }
      else { S.ai_overlay[e.item_id]=Object.assign(S.ai_overlay[e.item_id]||{}, {ack:e.ack, ack_at:e.acted_at}); }
    }
  }
  if (changed) save(S);
  return S.outbox;
}
function isWaiting(it, vd){ if(it.status==='waiting') return true; if(it.status==='parked') return !!it.parked_until && it.parked_until<=vd; return false; }
function aiItems(){ return D.ai.items.map(it=>Object.assign({}, it, S.ai_overlay[it.id]||{})); }
function board(){
  const outbox=progressAcks(); const vd=viewDate(); const [cards]=loadQueue();
  const ob={}; for (const e of outbox) ob[e.item_id]=e;
  const waiting=[], answered=[]; const aiRefs=new Set();
  for (let c of cards){
    c=Object.assign({}, c); c.app_name=D.app_names[c.app]||c.app; c.kind='queue'; c.route=route(c);
    const ad=c.asked_at?denverDate(new Date(c.asked_at)):null; c.waiting_since=!!(ad && dayDiff(vd,ad)>3);
    c.outbox=ob[c.id] || (c.ai_ref?ob[c.ai_ref]:null);
    if (isWaiting(c,vd)){ c.back_from_later=c.status==='parked'; waiting.push(c); if(c.ai_ref) aiRefs.add(c.ai_ref); } else answered.push(c);
  }
  waiting.sort((a,b)=>(b.asked_at||'').localeCompare(a.asked_at||''));
  waiting.sort((a,b)=>(a.waiting_since===b.waiting_since)?(a.waiting_since?(a.asked_at||'').localeCompare(b.asked_at||''):0):(a.waiting_since?-1:1));
  const linked=new Set(cards.filter(c=>c.ai_ref).map(c=>c.ai_ref));
  const ai=[];
  for (const it of aiItems()){
    Object.assign(it,{kind:'ai',app:'ai-improvements',app_name:'AI Improvements',type:'ai-rec',owner_bot:{name:'AI Improvements',id:D.routing.agents['ai-improvements'].id},question:it.title});
    it.route=route(it); it.outbox=ob[it.id] || (it.via_queue?ob[it.via_queue]:null); it.on_waiting_list_too=linked.has(it.id);
    if (it.response && it.response!=='Later') it.waiting=false;
    else if (it.response==='Later'){ it.waiting=!!it.parked_until && it.parked_until<=vd; it.back_from_later=it.waiting; }
    else it.waiting=it.status==='waiting_jm';
    if (!it.waiting && it.response && !linked.has(it.id)) answered.push(it);
    ai.push(it);
  }
  answered.sort((a,b)=>(b.answered_at||'').localeCompare(a.answered_at||''));
  for (const a of answered){ const o=a.outbox; if (o && o.status==='Sent' && (Date.now()-Date.parse(o.sent_at))/1000>NO_REPLY_S) a.no_reply_yet=true; }
  const aiWaitCount=ai.filter(i=>i.waiting && !aiRefs.has(i.id)).length;
  const snap=JSON.parse(JSON.stringify(D.snapshot));
  const off=S.view_offset_days?1:0;
  const waitingIds=new Set(waiting.map(w=>w.id)); const itemState={};
  for (const c of cards){ if (waitingIds.has(c.id)) itemState[c.id]='waiting'; else if (c.status==='parked') itemState[c.id]='parked'; else itemState[c.id]=({'Go with recommendation':'approved','Yes':'approved','No':'sent_back','Other':'other'})[c.response]||'waiting'; }
  const aiWaitN=ai.filter(i=>i.waiting).length;
  const parkedApps=new Set(cards.filter(c=>itemState[c.id]==='parked').map(c=>c.app));
  const itemFine={}; for (const c of cards){ if (itemState[c.id]==='approved') itemFine[c.id]=({'Yes':'yes','Go with recommendation':'go'})[c.response]; }
  const storyText=x=>{ if (x && typeof x==='object'){ const st=itemState[x.item]||'waiting'; const fine=itemFine[x.item]; x=(fine && x[fine]) || (st!=='waiting' && x[st]) || x.text || ''; } return x.replace('{ai_waiting}', `${aiWaitN} suggestion${aiWaitN!==1?'s':''}`); };
  for (const [vname, v] of Object.entries(snap.views)){
    for (const ch of v.chapters){
      const n=waiting.filter(w=>w.app===ch.key).length; ch.waiting_count=n;
      if (ch.health==='Stuck') {}
      else if (n){ ch.health='Waiting on you'; ch.health_reason=`${n} thing${n!==1?'s':''} waiting on you here.`; }
      else if (parkedApps.has(ch.key)){ ch.health='On track'; ch.health_reason='Nothing waiting on you here; one item is parked until tomorrow.'; ch.next='The parked item comes back to you tomorrow.'; }
      else { ch.health_reason='Nothing waiting on you here.'; ch.health='On track'; const nb=ch.next_by||{}; const nk=itemFine[nb.item]||itemState[nb.item]; if (nb[nk]) ch.next=nb[nk]; else if (ch.next_clear) ch.next=ch.next_clear; }
      delete ch.next_by;
      ch.story=storyText(ch.story||'');
    }
    v.story = v.story.map(storyText);
    const lbl=dayLabel(vd);
    if (vname==='day') v.label = off ? `Tomorrow, ${lbl} (simulated)` : `Today, ${lbl}`;
    else if (off) v.label = v.label + ' (carried over)';
    if (off) v.story = [`This is the board for ${lbl} (simulated). Anything you parked with Later is back on the list; the story below is carried over from ${dayLabel(addDays(vd,-1))} until Chief of Staff writes a new one.`].concat(v.story);
  }
  const lastUpdated = (S.last_change && Date.parse(S.last_change) > Date.parse(snap.generated)) ? S.last_change : snap.generated;
  return {ok:true, sample:true, now:nowISO(), view_date:vd, view_offset_days:S.view_offset_days, last_updated:lastUpdated,
    waiting_total:waiting.length+aiWaitCount, snapshot:snap, waiting, answered,
    ai:{items:ai, closed:D.ai.closed, waiting_count:ai.filter(i=>i.waiting).length, hidden_other_hat:D.ai.hidden_other_hat},
    outbox:[...outbox].reverse(), routing:D.routing, sweep:{runs:S.sweep_runs}, types:D.types, options:OPTIONS, app_names:D.app_names};
}
function answer(b){
  const {id, kind='queue', response:choice} = b; const comment=(b.comment||'').trim();
  if (!OPTIONS.includes(choice)) return [400,{ok:false,error:'Pick one of the five answers.'}];
  if (!comment) return [400,{ok:false,error:'A comment is required with every answer.'}];
  if (choice==='Go with recommendation'){ let t=null; if(kind==='queue'){ const [cs,al]=loadQueue(); t=cs.find(c=>c.id===(al[id]||id)); } else t=aiItems().find(i=>i.id===id); if (t && !hasRec(t)) return [400,{ok:false,error:'No recommendation was given, so pick Yes, No, Later or Other.'}]; }
  const vd=viewDate(), t=nowISO(); const parked_until = choice==='Later' ? addDays(vd,1) : null;
  let item, cid;
  if (kind==='queue'){
    const [cards, alias]=loadQueue(); cid=alias[id]||id; item=cards.find(c=>c.id===cid);
    if (!item) return [404,{ok:false,error:'Not found.'}];
    if (!isWaiting(item,vd)) return [409,{ok:false,error:'Already answered.'}];
    S.lines.push({id:cid, status:choice==='Later'?'parked':'answered', response:choice, comment, answered_at:t, parked_until, ack:null, ack_at:null});
    if (item.ai_ref) S.ai_overlay[item.ai_ref]={response:choice, comment, answered_at:t, parked_until, via_queue:cid};
  } else {
    item=aiItems().find(i=>i.id===id); if(!item) return [404,{ok:false,error:'Not found.'}];
    item=Object.assign({}, item, {app:'ai-improvements', type:'ai-rec', question:item.title});
    if (item.response && !(item.response==='Later' && item.parked_until && item.parked_until<=vd)) return [409,{ok:false,error:'Already answered.'}];
    cid=id; S.ai_overlay[id]={response:choice, comment, answered_at:t, parked_until, ack:null, ack_at:null};
    const [cards]=loadQueue();
    for (const c of cards) if (c.ai_ref===id && isWaiting(c,vd)) S.lines.push({id:c.id, status:choice==='Later'?'parked':'answered', response:choice, comment, answered_at:t, parked_until, via_ai_section:true});
  }
  const r=route(item); const ob=item.owner_bot||{};
  const speaker = (r.destination.kind==='room' && ob.name) ? ob.name : r.destination.name;
  const entry={out_id:Math.random().toString(16).slice(2,14), kind, item_id:cid, item_title:item.question, app:item.app, app_name:D.app_names[item.app]||item.app, type:item.type,
    choice, comment, time:t, board_link:location.href.split('#')[0]+'#item-'+cid, destination:r.destination, rule:r.rule, who_acts:r.who_acts, parked_until,
    status:'Sent', sent_at:t, received_at:null, acted_at:null, ack:null, planned_ack:`${speaker}: ${ackText(item,choice)}`, prototype_note:'Stored in this browser only. Nothing was sent.'};
  S.outbox.push(entry); touch(); save(S);
  return [200,{ok:true, outbox:entry}];
}
function fmtShort(iso){ return new Date(iso).toLocaleString('en-US',{timeZone:'America/Denver',month:'short',day:'numeric',hour:'numeric',minute:'2-digit'}).replace(',',''); }
function sweep(){
  const [cards, alias]=loadQueue(); const added=[], merged=[], skipped=[], already=[]; const t=nowISO();
  for (const m of D.chats.messages){
    if (!m.to_jm) continue;
    const owner=(m.from.id||'bot').replace(/^sample-/,''); const iid=`${owner}-${m.app}-${m.slug}`;
    const srcKey=`${m.chat}, asked ${fmtShort(m.at)}`; const src=`Sweep ${fmtShort(t)}: ${srcKey}`;
    if (m.jm_answer){ skipped.push({chat:m.chat, question:m.text, jm_said:m.jm_answer.text}); continue; }
    let q=m.text.replace(/^\s*(Jon|JM)\s*,\s*/,''); q=q[0].toUpperCase()+q.slice(1);
    const existing=cards.find(c=>c.id===(alias[iid]||iid)) || findDup(cards, m.from.id, m.app, q);
    if (existing){
      if ((existing.source||[]).some(s=>s.includes(srcKey))) already.push({chat:m.chat, id:existing.id});
      else { S.lines.push({id:existing.id, source:[src]}); existing.source.push(src); merged.push({chat:m.chat, into:existing.id, question:existing.question}); }
      continue;
    }
    const line={id:iid, owner_bot:m.from, room:m.room, app:m.app, type:'question', question:q, recommendation:m.recommendation||'No recommendation given', why:m.why||'The asker did not give one.',
      options:OPTIONS, link:null, asked_at:m.at, source:[src], status:'waiting', response:null, comment:null, answered_at:null, ack:null, ack_at:null, sample:true};
    S.lines.push(line); cards.push(Object.assign({}, line, {merged_ids:[]})); added.push({chat:m.chat, id:iid, question:q});
  }
  const run={at:t, added, merged, skipped_answered_in_chat:skipped, already_on_board:already};
  S.sweep_runs.push(run); touch(); save(S); return [200,{ok:true, run}];
}
function simulatePost(which){ const l=D.posts[which]; if(!l) return [200,{ok:false}]; S.lines.push(JSON.parse(JSON.stringify(l))); touch(); save(S); return [200,{ok:true, appended:l.id}]; }
function reset(){ S=fresh(); save(S); return [200,{ok:true}]; }
window.NB_ENGINE = {
  handle(path, body){
    if (path==='/api/board') return [200, board()];
    if (path==='/api/answer') return answer(body||{});
    if (path==='/api/sweep') return sweep();
    if (path==='/api/simulate-post') return simulatePost((body||{}).which||'new');
    if (path==='/api/view'){ S.view_offset_days=((body||{}).offset>=1)?1:0; save(S); return [200,{ok:true, view_offset_days:S.view_offset_days}]; }
    if (path==='/api/reset') return reset();
    return [404,{ok:false}];
  }
};
})();
