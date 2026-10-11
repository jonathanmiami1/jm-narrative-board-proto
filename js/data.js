// SAMPLE DATA ONLY. Prototype of Jon's narrative board.
window.NB_DATA = {
 "sample": true,
 "snapshot": {
  "_note": "SAMPLE snapshot for the narrative board prototype. Chief of Staff builds the real one from the task tracker, the request log, rooms and assigned files after JM approves. All wording here is sample.",
  "sample": true,
  "generated": "2026-10-10T22:40:00-06:00",
  "views": {
   "day": {
    "label": "Today",
    "since": "since this morning",
    "story": [
     "This is sample text so you can judge the layout; Chief of Staff writes the real story from every room once you approve the prototype.",
     "You paused the old daily board tonight and approved this narrative board in its place.",
     "Chiro Payments picked up two new ideas from you for the to-do list: a copay that charges automatically when a visit is completed, and a token vault so gateways can be swapped at any time.",
     {
      "item": "payments-lead-chiro-payments-checkout-screen",
      "text": "The new checkout screen for a sample visit was built and checked, and it is waiting for your sign-off.",
      "approved": "The new checkout screen for a sample visit was built and checked, and you approved it.",
      "sent_back": "The new checkout screen for a sample visit was built and checked; you sent it back with a comment.",
      "other": "The new checkout screen for a sample visit was built and checked; you asked for a different approach.",
      "parked": "The new checkout screen for a sample visit was built and checked; you parked the sign-off until tomorrow."
     },
     "My CFO finished the encrypted export; it is built and being checked.",
     {
      "item": "concierge-lead-concierge-welcome-message",
      "text": "Concierge has a welcome message ready and needs one decision from you on when it goes out.",
      "approved": "Concierge has a welcome message ready, and you decided when it goes out.",
      "sent_back": "Concierge has a welcome message ready; you turned down the proposed timing.",
      "other": "Concierge has a welcome message ready; you asked for a different timing.",
      "parked": "Concierge has a welcome message ready; you parked the timing decision until tomorrow."
     },
     "Live Out Loud dashboards moved to role names only, so the front desk lead and studio manager views use sample numbers.",
     "AI Improvements has {ai_waiting} waiting on you here, ranked, with the closed ones folded away."
    ],
    "chapters": [
     {
      "key": "chiro-payments",
      "name": "Chiro Payments",
      "health": "Waiting on you",
      "health_reason": "The checkout screen needs your sign-off.",
      "story": {
       "item": "payments-lead-chiro-payments-checkout-screen",
       "text": "Payments is in the sample world only. Tonight's work was planning: two of your ideas went onto the to-do list, and the checkout screen is ready for you to look at.",
       "approved": "Payments is in the sample world only. Tonight's work was planning: two of your ideas went onto the to-do list, and you approved the checkout screen.",
       "sent_back": "Payments is in the sample world only. Tonight's work was planning: two of your ideas went onto the to-do list, and you sent the checkout screen back with a comment.",
       "other": "Payments is in the sample world only. Tonight's work was planning: two of your ideas went onto the to-do list, and you asked for a different approach on the checkout screen.",
       "parked": "Payments is in the sample world only. Tonight's work was planning: two of your ideas went onto the to-do list, and you parked the checkout sign-off until tomorrow."
      },
      "done": [
       "New checkout screen for a sample visit, checked by the checker",
       "Your visit-triggered copay idea written up for the to-do list",
       "Your token vault idea written up for the to-do list, with pricing parked"
      ],
      "building": [
       "The payments builder is tidying the receipt page"
      ],
      "next": "Your sign-off on the checkout screen; then the payments builder starts the receipt page.",
      "sources": [
       "Payments room summary, 10:05 PM (sample)",
       "To-do notes for the copay and token vault ideas (sample)"
      ],
      "ref_ids": [
       "payments-checkout",
       "visit-copay",
       "token-vault"
      ],
      "next_clear": "The payments builder starts the receipt page."
     },
     {
      "key": "chiro-inventory",
      "name": "Chiro Inventory",
      "health": "On track",
      "health_reason": "Low-stock alert built; one setting needs your view.",
      "story": {
       "item": "inventory-builder-chiro-inventory-low-stock-alert",
       "text": "Inventory has a working sample stock list. The low-stock alert works and only needs you to choose when it warns.",
       "approved": "Inventory has a working sample stock list. The low-stock alert works, and you chose when it warns.",
       "sent_back": "Inventory has a working sample stock list. The low-stock alert works; you turned down the suggested warning level.",
       "other": "Inventory has a working sample stock list. The low-stock alert works; you asked for a different warning level.",
       "parked": "Inventory has a working sample stock list. The low-stock alert works; you parked the warning level until tomorrow."
      },
      "done": [
       "Sample stock list with reorder points"
      ],
      "building": [
       "The inventory builder is grouping the reorder list"
      ],
      "next": "Your answer on five or ten items left, then the alert goes to the checker.",
      "sources": [
       "Inventory notes, 6:05 PM (sample)"
      ],
      "ref_ids": [
       "inventory-low-stock"
      ],
      "next_clear": "The alert goes to the checker with your answer."
     },
     {
      "key": "feedback-tool",
      "name": "Feedback tool",
      "health": "Waiting on you",
      "health_reason": "The Idea button needs your sign-off.",
      "story": "The in-app Fix / Idea / Bug loop now has all three buttons. Each note lands in its own list for the right builder.",
      "done": [
       "Fix and Bug buttons route notes to the right builder"
      ],
      "building": [
       "The feedback tool builder is adding a short thank-you after each note"
      ],
      "next": "Your sign-off on the Idea button.",
      "sources": [
       "Feedback tool notes, 7:45 PM (sample)"
      ],
      "ref_ids": [
       "feedback-idea"
      ],
      "next_clear": "The feedback tool builder acts on your answer."
     },
     {
      "key": "my-cfo",
      "name": "My CFO",
      "health": "On track",
      "health_reason": "Encrypted export built, being checked.",
      "story": {
       "item": "cfo-lead-my-cfo-export-schedule",
       "text": "My CFO shows status only here. The encrypted export is built and being checked, and one scheduling question is waiting for you.",
       "approved": "My CFO shows status only here. The encrypted export is built and being checked, and you answered the scheduling question.",
       "sent_back": "My CFO shows status only here. The encrypted export is built and being checked; you turned down the suggested schedule.",
       "other": "My CFO shows status only here. The encrypted export is built and being checked; you asked for a different schedule.",
       "parked": "My CFO shows status only here. The encrypted export is built and being checked; you parked the scheduling question until tomorrow."
      },
      "done": [
       "Encrypted export: built, being checked"
      ],
      "building": [
       "Restore steps for you and your CPA are being written"
      ],
      "next": "Your answer on how often the export runs.",
      "sources": [
       "My CFO room summary, 5:30 PM (sample, status only)"
      ],
      "ref_ids": [
       "cfo-export"
      ],
      "next_clear": "The export schedule is set from your answer; restore steps come next."
     },
     {
      "key": "concierge",
      "name": "Concierge",
      "health": "Waiting on you",
      "health_reason": "Welcome message timing needs a decision.",
      "story": {
       "item": "concierge-lead-concierge-welcome-message",
       "text": "The welcome message is written and tested with sample members. It only needs you to choose when it goes out.",
       "approved": "The welcome message is written and tested with sample members, and you chose when it goes out.",
       "sent_back": "The welcome message is written and tested with sample members; you turned down the proposed timing.",
       "other": "The welcome message is written and tested with sample members; you asked for a different timing.",
       "parked": "The welcome message is written and tested with sample members; you parked the timing decision until tomorrow."
      },
      "done": [
       "Welcome message written and tested with sample members"
      ],
      "building": [
       "The concierge builder is drafting the booking reminder"
      ],
      "next": "Your decision on the welcome message timing.",
      "sources": [
       "Concierge room summary, 4:15 PM (sample)"
      ],
      "ref_ids": [
       "concierge-welcome"
      ],
      "next_clear": "The welcome message goes out on the timing you chose."
     },
     {
      "key": "ai-dashboards-lol",
      "name": "AI Dashboards / Live Out Loud",
      "health": "On track",
      "health_reason": "Role-based views in progress.",
      "story": "Live Out Loud dashboards now use role names and sample numbers only. The front desk lead view is being shaped.",
      "done": [
       "Studio manager view switched to sample numbers"
      ],
      "building": [
       "The dashboard lead is building the front desk lead view"
      ],
      "next": "Your answer on who sees the weekly check-in chart.",
      "sources": [
       "AI Dashboards room summary, 3:50 PM (sample)"
      ],
      "ref_ids": [
       "lol-front-desk"
      ],
      "next_clear": "The front desk lead view is finished with your answer."
     },
     {
      "key": "platform",
      "name": "Platform",
      "health": "On track",
      "health_reason": "Quiet day; one maintenance question.",
      "story": {
       "item": "platform-keeper-platform-night-checks",
       "text": "The shared computer and the builders' tools ran without trouble today. One maintenance question is waiting.",
       "approved": "The shared computer and the builders' tools ran without trouble today, and you answered the maintenance question.",
       "sent_back": "The shared computer and the builders' tools ran without trouble today; you turned down the weekly restart.",
       "other": "The shared computer and the builders' tools ran without trouble today; you asked for a different restart plan.",
       "parked": "The shared computer and the builders' tools ran without trouble today; you parked the maintenance question until tomorrow."
      },
      "done": [
       "Nightly checks ran clean"
      ],
      "building": [
       "Nothing is being built on the platform right now"
      ],
      "next": "Your answer on a weekly Sunday restart.",
      "sources": [
       "Platform keeper notes, Oct 9 9:20 PM (sample)"
      ],
      "ref_ids": [
       "platform-restart"
      ],
      "next_clear": "The weekly restart is set up or dropped per your answer."
     },
     {
      "key": "board",
      "name": "Board",
      "health": "On track",
      "health_reason": "Narrative board prototype being built.",
      "story": "You paused the old daily board tonight. This narrative board is the prototype taking its place; nothing was deleted.",
      "done": [
       "Old daily board paused, kept for reference"
      ],
      "building": [
       "The board designer is making this prototype with sample data"
      ],
      "next": "The checker clicks through it, then Chief of Staff, then you.",
      "sources": [
       "My Board room, 10:20 PM"
      ],
      "ref_ids": [
       "narrative-board"
      ],
      "next_clear": "The checker, then Chief of Staff, then you."
     }
    ]
   },
   "week": {
    "label": "This week, Oct 4 to Oct 10",
    "since": "since Sunday",
    "story": [
     "This is sample text so you can judge the layout; Chief of Staff writes the real weekly story once you approve the prototype.",
     "It was a planning-heavy week: most apps finished one visible piece and lined up the next.",
     "Chiro Payments got its checkout screen built and checked, and the to-do list grew with your copay and token vault ideas.",
     "My CFO's encrypted export went from plan to built, and is being checked.",
     "Concierge wrote and tested its welcome message with sample members.",
     "The feedback tool now has Fix, Idea and Bug buttons.",
     "Live Out Loud moved every dashboard to role names and sample numbers.",
     "On Saturday night you paused the old daily board and started this one."
    ],
    "chapters": [
     {
      "key": "chiro-payments",
      "name": "Chiro Payments",
      "health": "Waiting on you",
      "health_reason": "Checkout screen needs your sign-off.",
      "story": "A strong week for Payments in the sample world: the checkout screen went from sketch to checked, and two of your bigger ideas are now written up.",
      "done": [
       "Checkout screen built and checked",
       "Sample payment flow tested end to end",
       "Copay and token vault ideas on the to-do list"
      ],
      "building": [
       "The payments builder is on the receipt page"
      ],
      "next": "Your sign-off, then the receipt page and a first look at visit-triggered copays.",
      "sources": [
       "Payments room, week summary (sample)"
      ],
      "ref_ids": [
       "payments-week"
      ],
      "next_clear": "The payments builder starts the receipt page."
     },
     {
      "key": "chiro-inventory",
      "name": "Chiro Inventory",
      "health": "On track",
      "health_reason": "Stock list and alert both working.",
      "story": "Inventory started the week with nothing on screen and ends it with a stock list and a working alert.",
      "done": [
       "Sample stock list",
       "Low-stock alert"
      ],
      "building": [
       "The inventory builder is grouping the reorder list"
      ],
      "next": "Pick the alert level, then supplier grouping.",
      "sources": [
       "Inventory notes, week (sample)"
      ],
      "ref_ids": [
       "inventory-week"
      ],
      "next_clear": "The alert goes to the checker with your answer."
     },
     {
      "key": "feedback-tool",
      "name": "Feedback tool",
      "health": "Waiting on you",
      "health_reason": "Idea button needs your sign-off.",
      "story": "The feedback loop gained two new buttons this week, and every sample note reached the right builder.",
      "done": [
       "Fix button",
       "Bug button",
       "Idea button built"
      ],
      "building": [
       "The feedback tool builder is adding a thank-you note"
      ],
      "next": "Your sign-off on the Idea button.",
      "sources": [
       "Feedback tool notes, week (sample)"
      ],
      "ref_ids": [
       "feedback-week"
      ],
      "next_clear": "The feedback tool builder acts on your answer."
     },
     {
      "key": "my-cfo",
      "name": "My CFO",
      "health": "On track",
      "health_reason": "Export built, being checked.",
      "story": "My CFO shows status only here. The encrypted export moved from plan to built this week.",
      "done": [
       "Encrypted export: built, being checked",
       "Restore steps outlined for you and your CPA"
      ],
      "building": [
       "Restore steps for you and your CPA are being finished"
      ],
      "next": "Your answer on the export schedule.",
      "sources": [
       "My CFO room, week summary (sample, status only)"
      ],
      "ref_ids": [
       "cfo-week"
      ],
      "next_clear": "The export schedule is set from your answer; restore steps come next."
     },
     {
      "key": "concierge",
      "name": "Concierge",
      "health": "Waiting on you",
      "health_reason": "One decision on welcome timing.",
      "story": "Concierge wrote, tested and polished its welcome message with sample members this week.",
      "done": [
       "Welcome message tested"
      ],
      "building": [
       "The concierge builder is drafting the booking reminder"
      ],
      "next": "Your decision on welcome timing.",
      "sources": [
       "Concierge room, week summary (sample)"
      ],
      "ref_ids": [
       "concierge-week"
      ],
      "next_clear": "The welcome message goes out on the timing you chose."
     },
     {
      "key": "ai-dashboards-lol",
      "name": "AI Dashboards / Live Out Loud",
      "health": "On track",
      "health_reason": "Role names and sample data everywhere.",
      "story": "Every Live Out Loud view now uses role names, such as the front desk lead and the studio manager, with sample numbers.",
      "done": [
       "All views switched to role names",
       "Studio manager view rebuilt with sample numbers"
      ],
      "building": [
       "The dashboard lead is building the front desk lead view"
      ],
      "next": "Your answer on chart access.",
      "sources": [
       "AI Dashboards room, week summary (sample)"
      ],
      "ref_ids": [
       "lol-week"
      ],
      "next_clear": "The front desk lead view is finished with your answer."
     },
     {
      "key": "platform",
      "name": "Platform",
      "health": "On track",
      "health_reason": "Steady week.",
      "story": "The shared computer stayed steady all week. No change since Thursday afternoon.",
      "done": [
       "Nightly checks ran clean all week"
      ],
      "building": [
       "Nothing is being built on the platform right now"
      ],
      "next": "Your answer on a weekly Sunday restart.",
      "sources": [
       "Platform keeper notes, week (sample)"
      ],
      "ref_ids": [
       "platform-week"
      ],
      "next_clear": "The weekly restart is set up or dropped per your answer."
     },
     {
      "key": "board",
      "name": "Board",
      "health": "On track",
      "health_reason": "Switching to the narrative board.",
      "story": "The old daily board finished its last checks early in the week and was paused on Saturday night. This narrative board replaces it.",
      "done": [
       "Old board's last checks passed",
       "Old board paused, kept"
      ],
      "building": [
       "The board designer is making this prototype"
      ],
      "next": "The checker, then Chief of Staff, then you.",
      "sources": [
       "My Board room, week (sample)"
      ],
      "ref_ids": [
       "board-week"
      ],
      "next_clear": "The checker, then Chief of Staff, then you."
     }
    ]
   }
  }
 },
 "queue_seed": [
  {
   "id": "cos-cross-app-weekly-review-day",
   "owner_bot": {
    "name": "Chief of Staff",
    "id": "Chief of Staff"
   },
   "room": "none",
   "app": "cross-app",
   "type": "decision",
   "question": "Which day should the weekly review of all your apps land on the board?",
   "recommendation": "Sunday evening",
   "why": "You read the board most on Sunday nights, and it gives every builder Monday morning to act on your answers.",
   "options": [
    "Go with recommendation",
    "Yes",
    "No",
    "Later",
    "Other"
   ],
   "link": null,
   "asked_at": "2026-10-06T19:10:00-06:00",
   "source": [
    "Chief of Staff 1:1, Oct 6 7:10 PM"
   ],
   "status": "waiting",
   "response": null,
   "comment": null,
   "answered_at": null,
   "ack": null,
   "ack_at": null,
   "sample": true
  },
  {
   "id": "payments-lead-chiro-payments-checkout-screen",
   "owner_bot": {
    "name": "Payments lead (sample)",
    "id": "Payments lead (sample)"
   },
   "room": "Payments room",
   "app": "chiro-payments",
   "type": "sign-off",
   "question": "Sign off the new checkout screen for a sample visit payment.",
   "recommendation": "Yes, approve it",
   "why": "The checker clicked every button on the sample screen and it matched what you asked for. Check that the copay line reads clearly.",
   "options": [
    "Go with recommendation",
    "Yes",
    "No",
    "Later",
    "Other"
   ],
   "link": "screens/payments-checkout.html",
   "asked_at": "2026-10-10T20:40:00-06:00",
   "source": [
    "Payments room, Oct 10 8:40 PM"
   ],
   "status": "waiting",
   "response": null,
   "comment": null,
   "answered_at": null,
   "ack": null,
   "ack_at": null,
   "sample": true,
   "check": "Check the copay line and the Pay button label."
  },
  {
   "id": "inventory-builder-chiro-inventory-low-stock-alert",
   "owner_bot": {
    "name": "Inventory builder (sample)",
    "id": "Inventory builder (sample)"
   },
   "room": "none",
   "app": "chiro-inventory",
   "type": "ticket-feedback",
   "question": "Feedback wanted on the low-stock alert: should it warn at five items left or ten?",
   "recommendation": "Warn at ten",
   "why": "Sample clinics reorder weekly, and ten leaves a full week of buffer before anything runs out.",
   "options": [
    "Go with recommendation",
    "Yes",
    "No",
    "Later",
    "Other"
   ],
   "link": null,
   "asked_at": "2026-10-10T18:05:00-06:00",
   "source": [
    "Inventory notes, Oct 10 6:05 PM"
   ],
   "status": "waiting",
   "response": null,
   "comment": null,
   "answered_at": null,
   "ack": null,
   "ack_at": null,
   "sample": true
  },
  {
   "id": "cfo-lead-my-cfo-export-schedule",
   "owner_bot": {
    "name": "My CFO lead (sample)",
    "id": "My CFO lead (sample)"
   },
   "room": "My CFO room",
   "app": "my-cfo",
   "type": "question",
   "question": "Should the encrypted export run every week or once a month?",
   "recommendation": "Once a month",
   "why": "It matches how often you review with your CPA, and fewer exports means fewer copies to keep safe.",
   "options": [
    "Go with recommendation",
    "Yes",
    "No",
    "Later",
    "Other"
   ],
   "link": null,
   "asked_at": "2026-10-10T17:30:00-06:00",
   "source": [
    "My CFO room, Oct 10 5:30 PM"
   ],
   "status": "waiting",
   "response": null,
   "comment": null,
   "answered_at": null,
   "ack": null,
   "ack_at": null,
   "sample": true
  },
  {
   "id": "ai-improvements-wake-on-status",
   "owner_bot": {
    "name": "AI Improvements",
    "id": "AI Improvements"
   },
   "room": "1:1",
   "app": "ai-improvements",
   "type": "ai-rec",
   "question": "Wake bots the moment a build changes status, instead of timed night checks?",
   "recommendation": "Yes",
   "why": "Most nightly checks find nothing, and finished work can sit until the next sweep. The old checks stay on for a week as a safety net.",
   "options": [
    "Go with recommendation",
    "Yes",
    "No",
    "Later",
    "Other"
   ],
   "link": null,
   "asked_at": "2026-10-10T22:30:00-06:00",
   "source": [
    "AI Improvements list, Oct 10 10:30 PM"
   ],
   "status": "waiting",
   "response": null,
   "comment": null,
   "answered_at": null,
   "ack": null,
   "ack_at": null,
   "sample": true,
   "ai_ref": "suggestion-3"
  },
  {
   "id": "concierge-lead-concierge-welcome-message",
   "owner_bot": {
    "name": "Concierge lead (sample)",
    "id": "Concierge lead (sample)"
   },
   "room": "Concierge room",
   "app": "concierge",
   "type": "decision",
   "question": "The welcome message is ready. Should it go out on first sign-in or after the first booking?",
   "recommendation": "After the first booking",
   "why": "It reads as a thank-you instead of a sales pitch, and sample testers liked that version better.",
   "options": [
    "Go with recommendation",
    "Yes",
    "No",
    "Later",
    "Other"
   ],
   "link": null,
   "asked_at": "2026-10-10T16:15:00-06:00",
   "source": [
    "Concierge room, Oct 10 4:15 PM"
   ],
   "status": "waiting",
   "response": null,
   "comment": null,
   "answered_at": null,
   "ack": null,
   "ack_at": null,
   "sample": true
  },
  {
   "id": "dashboard-lead-ai-dashboards-lol-front-desk-view",
   "owner_bot": {
    "name": "Dashboard lead (sample)",
    "id": "Dashboard lead (sample)"
   },
   "room": "AI Dashboards room",
   "app": "ai-dashboards-lol",
   "type": "question",
   "question": "Should the front desk lead see the weekly sample check-in chart, or only the studio manager?",
   "recommendation": "Both roles see it",
   "why": "The front desk lead is the one who can act on a slow day, and the chart uses sample numbers only.",
   "options": [
    "Go with recommendation",
    "Yes",
    "No",
    "Later",
    "Other"
   ],
   "link": null,
   "asked_at": "2026-10-10T15:50:00-06:00",
   "source": [
    "AI Dashboards room, Oct 10 3:50 PM"
   ],
   "status": "waiting",
   "response": null,
   "comment": null,
   "answered_at": null,
   "ack": null,
   "ack_at": null,
   "sample": true
  },
  {
   "id": "board-ui-board-chapter-order",
   "owner_bot": {
    "name": "Personal Board UI",
    "id": "Personal Board UI"
   },
   "room": "My Board room",
   "app": "board",
   "type": "question",
   "question": "Should the app chapters stay in a fixed order, or move the ones waiting on you to the top?",
   "recommendation": "Waiting-on-you first",
   "why": "You see what needs you first, and the chapters that are on track still sit one scroll below.",
   "options": [
    "Go with recommendation",
    "Yes",
    "No",
    "Later",
    "Other"
   ],
   "link": null,
   "asked_at": "2026-10-10T22:35:00-06:00",
   "source": [
    "My Board room, Oct 10 10:35 PM"
   ],
   "status": "waiting",
   "response": null,
   "comment": null,
   "answered_at": null,
   "ack": null,
   "ack_at": null,
   "sample": true
  },
  {
   "id": "platform-keeper-platform-night-checks",
   "owner_bot": {
    "name": "Platform keeper (sample)",
    "id": "Platform keeper (sample)"
   },
   "room": "1:1",
   "app": "platform",
   "type": "question",
   "question": "Can the shared computer restart itself at 3 AM on Sundays to stay quick?",
   "recommendation": "Yes",
   "why": "Nothing runs at that hour, and a weekly restart clears the slowdowns builders have reported.",
   "options": [
    "Go with recommendation",
    "Yes",
    "No",
    "Later",
    "Other"
   ],
   "link": null,
   "asked_at": "2026-10-09T21:20:00-06:00",
   "source": [
    "Platform keeper 1:1, Oct 9 9:20 PM"
   ],
   "status": "waiting",
   "response": null,
   "comment": null,
   "answered_at": null,
   "ack": null,
   "ack_at": null,
   "sample": true
  },
  {
   "id": "feedback-builder-feedback-tool-idea-button",
   "owner_bot": {
    "name": "Feedback tool builder (sample)",
    "id": "Feedback tool builder (sample)"
   },
   "room": "none",
   "app": "feedback-tool",
   "type": "sign-off",
   "question": "Sign off the new Idea button in the in-app Fix / Idea / Bug panel.",
   "recommendation": "Yes, approve it",
   "why": "It matches the Fix and Bug buttons, and the checker confirmed each sample note lands in the right list.",
   "options": [
    "Go with recommendation",
    "Yes",
    "No",
    "Later",
    "Other"
   ],
   "link": "screens/feedback-idea.html",
   "asked_at": "2026-10-10T19:45:00-06:00",
   "source": [
    "Feedback tool notes, Oct 10 7:45 PM"
   ],
   "status": "waiting",
   "response": null,
   "comment": null,
   "answered_at": null,
   "ack": null,
   "ack_at": null,
   "sample": true,
   "check": "Press Idea, type a sample note and confirm it lands under Ideas."
  },
  {
   "id": "cfo-lead-my-cfo-export-schedule-again",
   "owner_bot": {
    "name": "My CFO lead (sample)",
    "id": "My CFO lead (sample)"
   },
   "room": "My CFO room",
   "app": "my-cfo",
   "type": "question",
   "question": "Should the encrypted export run every week or once a month?",
   "recommendation": "Once a month",
   "why": "Same question asked again in the room an hour later.",
   "options": [
    "Go with recommendation",
    "Yes",
    "No",
    "Later",
    "Other"
   ],
   "link": null,
   "asked_at": "2026-10-10T18:32:00-06:00",
   "source": [
    "My CFO room, Oct 10 6:32 PM"
   ],
   "status": "waiting",
   "response": null,
   "comment": null,
   "answered_at": null,
   "ack": null,
   "ack_at": null,
   "sample": true
  }
 ],
 "routing": {
  "_note": "Routing table for the narrative board prototype (spec section 7). Data, not code: CoS can add rooms and rules here. Rules are checked top to bottom; first match wins. Prototype only: answers are written to narrative-outbox.json, nothing is sent to any agent or room.",
  "agents": {
   "ai-improvements": {
    "name": "AI Improvements",
    "id": "AI Improvements"
   },
   "chief-of-staff": {
    "name": "Chief of Staff",
    "id": "Chief of Staff"
   }
  },
  "rooms": {
   "my-cfo": {
    "name": "My CFO room",
    "id": "My CFO room"
   },
   "payments": {
    "name": "Payments room",
    "id": "Payments room"
   },
   "concierge": {
    "name": "Concierge room",
    "id": "Concierge room"
   },
   "ai-dashboard-builder": {
    "name": "AI Dashboards room",
    "id": "AI Dashboards room"
   },
   "my-board": {
    "name": "My Board room",
    "id": "My Board room"
   }
  },
  "app_room": {
   "_note": "Which room hears sign-offs, ticket feedback and decisions for an app. chiro-inventory -> Payments room (CoS 2026-10-10: the Payments team owns Inventory). Apps not listed (feedback-tool, platform, board, cross-app) have no room in the spec, so they fall to Chief of Staff until CoS adds one.",
   "my-cfo": "my-cfo",
   "chiro-payments": "payments",
   "concierge": "concierge",
   "ai-dashboards-lol": "ai-dashboard-builder",
   "chiro-inventory": "payments"
  },
  "rules": [
   {
    "name": "My CFO silo: anything about My CFO goes only to the My CFO room",
    "match": {
     "app": [
      "my-cfo"
     ]
    },
    "to": "room:my-cfo",
    "who_acts": "The bot that asked, or the My CFO lead"
   },
   {
    "name": "Chiro Inventory: the Payments team owns Inventory, so every Inventory answer goes to the Payments room",
    "match": {
     "app": [
      "chiro-inventory"
     ]
    },
    "to": "room:payments",
    "who_acts": "The Payments lead (owns Inventory)"
   },
   {
    "name": "AI Improvements recommendation",
    "match": {
     "type": [
      "ai-rec"
     ]
    },
    "to": "agent:ai-improvements",
    "who_acts": "AI Improvements actions what it owns; passes the rest to Chief of Staff with your comment"
   },
   {
    "name": "AI Improvements items of any type",
    "match": {
     "app": [
      "ai-improvements"
     ]
    },
    "to": "agent:ai-improvements",
    "who_acts": "AI Improvements"
   },
   {
    "name": "Question raised by a bot in a project room",
    "match": {
     "type": [
      "question"
     ],
     "room_known": true
    },
    "to": "room:from_item",
    "who_acts": "The bot that asked"
   },
   {
    "name": "Question raised by a bot in a 1:1",
    "match": {
     "type": [
      "question"
     ],
     "room": [
      "1:1"
     ]
    },
    "to": "owner_bot",
    "who_acts": "That bot"
   },
   {
    "name": "Screen or page sign-off, ticket feedback, app update needing a decision",
    "match": {
     "type": [
      "sign-off",
      "ticket-feedback",
      "decision"
     ],
     "app_has_room": true
    },
    "to": "room:from_app",
    "who_acts": "The app's lead: Yes = sign, No = send back with your comment"
   },
   {
    "name": "Open-questions sweep item from a room or 1:1",
    "match": {
     "from_sweep": true,
     "room_known": true
    },
    "to": "room:from_item",
    "who_acts": "Whoever raised it"
   },
   {
    "name": "Open-questions sweep item from a 1:1",
    "match": {
     "from_sweep": true,
     "room": [
      "1:1"
     ]
    },
    "to": "owner_bot",
    "who_acts": "Whoever raised it"
   },
   {
    "name": "Cross-app item, the board itself, or no clear owner",
    "match": {},
    "to": "agent:chief-of-staff",
    "who_acts": "Chief of Staff"
   }
  ]
 },
 "chats": {
  "_note": "SAMPLE chats for the simulated open-questions sweep (9:25 AM / 3:25 PM MT). Not real room messages.",
  "sample": true,
  "messages": [
   {
    "chat": "Concierge room",
    "room": "Concierge room",
    "app": "concierge",
    "from": {
     "name": "Concierge lead (sample)",
     "id": "Concierge lead (sample)"
    },
    "at": "2026-10-10T21:05:00-06:00",
    "to_jm": true,
    "text": "Jon, should the booking reminder go out one day before or two hours before the visit?",
    "recommendation": "One day before",
    "why": "Sample members said two hours was too late to rearrange their day.",
    "jm_answer": null,
    "slug": "reminder-timing"
   },
   {
    "chat": "My CFO room",
    "room": "My CFO room",
    "app": "my-cfo",
    "from": {
     "name": "My CFO lead (sample)",
     "id": "My CFO lead (sample)"
    },
    "at": "2026-10-10T21:40:00-06:00",
    "to_jm": true,
    "text": "Jon, should the encrypted export run every week or once a month?",
    "recommendation": "Once a month",
    "why": "Asked again in the room.",
    "jm_answer": null,
    "slug": "export-schedule-chat"
   },
   {
    "chat": "Payments room",
    "room": "Payments room",
    "app": "chiro-payments",
    "from": {
     "name": "Payments lead (sample)",
     "id": "Payments lead (sample)"
    },
    "at": "2026-10-10T20:10:00-06:00",
    "to_jm": true,
    "text": "Jon, keep the sample copay at one flat amount per visit for now?",
    "recommendation": "Yes",
    "why": "Simplest to test first.",
    "jm_answer": {
     "text": "Yes, one flat amount for now.",
     "at": "2026-10-10T20:14:00-06:00"
    },
    "slug": "flat-copay"
   },
   {
    "chat": "Inventory builder 1:1",
    "room": "1:1",
    "app": "chiro-inventory",
    "from": {
     "name": "Inventory builder (sample)",
     "id": "Inventory builder (sample)"
    },
    "at": "2026-10-10T21:55:00-06:00",
    "to_jm": true,
    "text": "Jon, can the sample reorder list group items by supplier?",
    "recommendation": null,
    "why": null,
    "jm_answer": null,
    "slug": "group-by-supplier"
   },
   {
    "chat": "Concierge room",
    "room": "Concierge room",
    "app": "concierge",
    "from": {
     "name": "Concierge lead (sample)",
     "id": "Concierge lead (sample)"
    },
    "at": "2026-10-10T21:06:00-06:00",
    "to_jm": false,
    "text": "Note to the builder: reminder copy draft is in the shared folder.",
    "jm_answer": null,
    "slug": "note"
   }
  ]
 },
 "posts": {
  "_note": "Lines a bot would append to queue.jsonl. Used by the 'Simulate a bot posting' control.",
  "sample": true,
  "new": {
   "id": "concierge-lead-concierge-gift-card-design",
   "owner_bot": {
    "name": "Concierge lead (sample)",
    "id": "Concierge lead (sample)"
   },
   "room": "Concierge room",
   "app": "concierge",
   "type": "question",
   "question": "Which gift card design should go first: the plain one or the photo one?",
   "recommendation": "The plain one",
   "why": "It prints cleanly on every sample printer we tried.",
   "options": [
    "Go with recommendation",
    "Yes",
    "No",
    "Later",
    "Other"
   ],
   "link": null,
   "asked_at": "2026-10-10T22:40:00-06:00",
   "source": [
    "Concierge room, Oct 10 10:40 PM"
   ],
   "status": "waiting",
   "response": null,
   "comment": null,
   "answered_at": null,
   "ack": null,
   "ack_at": null,
   "sample": true
  },
  "duplicate": {
   "id": "concierge-lead-concierge-gift-card-design-repost",
   "owner_bot": {
    "name": "Concierge lead (sample)",
    "id": "Concierge lead (sample)"
   },
   "room": "Concierge room",
   "app": "concierge",
   "type": "question",
   "question": "Which gift card design should go first, the plain one or the photo one?",
   "recommendation": "The plain one",
   "why": "Asked again.",
   "options": [
    "Go with recommendation",
    "Yes",
    "No",
    "Later",
    "Other"
   ],
   "link": null,
   "asked_at": "2026-10-10T22:50:00-06:00",
   "source": [
    "Concierge room, Oct 10 10:50 PM"
   ],
   "status": "waiting",
   "response": null,
   "comment": null,
   "answered_at": null,
   "ack": null,
   "ack_at": null,
   "sample": true
  }
 },
 "ai": {
  "items": [
   {
    "id": "suggestion-1",
    "rank": 2,
    "display_rank": 1,
    "title": "Put each project room's rules in its group description",
    "change": "Chief of Staff writes each project chat's standing rules into that chat's description: run the code checking toolkit wherever code is written and post one line on what it checked, reply in the room, what the room covers, and what it must never do.",
    "recommendation": "Yes",
    "why": "You already said yes to the code-checking rule on Oct 10. Every bot in a room reads the description on every reply, so this is the cheapest way to make the rule stick.",
    "effort": "Minutes per room",
    "owner_if_yes": "Chief of Staff",
    "source": "https://cursor.com/help/grok-bot/group-chats",
    "pack_date": "2026-10-10",
    "status": "waiting_jm"
   },
   {
    "id": "suggestion-2",
    "rank": 3,
    "display_rank": 2,
    "title": "Give Chiro Payments a scripted self-check and a map of its features",
    "change": "A coding helper adds a scripted way for Chiro Payments to prove it works, plus a map of its features. My CFO already has one.",
    "recommendation": "Yes-with-change",
    "why": "Do it on Chiro Payments first, not every app at once. It is the missing piece for the group self-check you asked for on Oct 6, and it gives the checker real proof instead of opinion.",
    "effort": "Small project (one coding helper run, then kept up to date)",
    "owner_if_yes": "Chief of Staff sets it up; the Payments team runs it",
    "source": null,
    "pack_date": "2026-09-02",
    "status": "waiting_jm"
   },
   {
    "id": "suggestion-3",
    "rank": 4,
    "display_rank": 3,
    "title": "Wake bots the moment a task changes status, instead of timed night checks",
    "change": "Bots start when a task moves in the task tracker: built work wakes the checker, a pass wakes Chief of Staff, and a send-back wakes the owner. The old nightly checks keep running for a week alongside, then stop once the new way is proven.",
    "recommendation": "Yes",
    "why": "Most nightly checks find nothing, and finished work can sit until the next check (it happened on Oct 3). Low risk, because the old checks stay on until the new ones work.",
    "effort": "Small project (about four automatic jobs plus tests)",
    "owner_if_yes": "Chief of Staff",
    "source": null,
    "pack_date": "2026-10-10",
    "status": "waiting_jm"
   },
   {
    "id": "suggestion-4",
    "rank": 5,
    "display_rank": 4,
    "title": "Automatically watch each proposed code change",
    "change": "When a proposed code change opens, an automatic job follows just that change: each new version wakes the checker, failing checks wake the builder, and the job removes itself when the change closes.",
    "recommendation": "Yes",
    "why": "It is the watch habit you approved copying on Oct 1, now built in, and it replaces the overnight jobs we set up and delete by hand.",
    "effort": "Minutes per change",
    "owner_if_yes": "Chief of Staff adds it to the builders' standing instructions",
    "source": "https://x.ai/changelog/bot",
    "pack_date": "2026-10-10",
    "status": "waiting_jm"
   },
   {
    "id": "suggestion-5",
    "rank": 6,
    "display_rank": 5,
    "title": "Run Chiro Payments as one coding project with shared memory",
    "change": "Instead of a new coding helper chat for every piece, one project coordinates the Chiro Payments work and keeps shared context over time. A bot can start it, so you don't have to open the coding app.",
    "recommendation": "Yes-with-change",
    "why": "Only on Chiro Payments, during the current Payments team trial, keeping the checker and sample data. Since Sep 18 a bot can start it, so the extra step it needed from you is gone.",
    "effort": "Minutes to start; about a week to judge",
    "owner_if_yes": "Chief of Staff approves; the Payments team starts it",
    "source": "https://cursor.com/blog/projects",
    "pack_date": "2026-09-13",
    "status": "waiting_jm"
   },
   {
    "id": "suggestion-6",
    "rank": 7,
    "display_rank": 6,
    "title": "Make Grok 4.7 the default model for coding helpers",
    "change": "Chief of Staff tells every coding helper to use Grok 4.7 unless a piece of work needs something else, and to save the costliest models for hard jobs only.",
    "recommendation": "Yes",
    "why": "Same price as the old default, better at coding, and it sets a cost habit across every app without adding a tool.",
    "effort": "Minutes (one standing instruction)",
    "owner_if_yes": "Chief of Staff",
    "source": "https://x.ai/news/grok-4-7",
    "pack_date": "2026-09-27",
    "status": "waiting_jm"
   },
   {
    "id": "suggestion-7",
    "rank": 9,
    "display_rank": 7,
    "title": "Standing rule: replace repeated website clicking with a script",
    "change": "When a bot clicks through the same website on every run, it records the site's data calls once and switches the job to a script or a direct connection, one area of your life per script.",
    "recommendation": "Yes",
    "why": "It turns the 'prefer a direct connection over the browser' rule into a habit. It costs nothing until a repeated browser job exists.",
    "effort": "Minutes for the rule; a small project per site",
    "owner_if_yes": "Chief of Staff writes the rule; the bot that owns each job converts it",
    "source": null,
    "pack_date": "2026-09-06",
    "status": "waiting_jm"
   },
   {
    "id": "suggestion-8",
    "rank": 11,
    "display_rank": 8,
    "title": "Add a few 'Ask first' approval rules",
    "change": "A short list of approval rules: always ask before outside sends, deletes, changes to systems from another part of your life, and anything touching payments. You set them in Settings (they are stored per computer); Chief of Staff drafts the list.",
    "recommendation": "Yes-with-change",
    "why": "Keep the list to four or five rules so approvals stay rare. It turns the approval habit from a written note into an enforced rule.",
    "effort": "Minutes",
    "owner_if_yes": "Chief of Staff drafts the list; you add the rules in Settings",
    "source": "https://docs.x.ai/grok-bot/approvals-security-and-privacy",
    "pack_date": "2026-10-10",
    "status": "waiting_jm"
   },
   {
    "id": "suggestion-9",
    "rank": 12,
    "display_rank": 9,
    "title": "Pin Chief of Staff and the project rooms; hide one-on-one bot chats",
    "change": "Pin Chief of Staff and the active project rooms to the top of the sidebar and hide the one-on-one chats with individual bots. Hidden bots keep working.",
    "recommendation": "Yes-with-change",
    "why": "Pin the project rooms too, since that is where the work happens now. You stop scanning individual chats, and nothing stops running.",
    "effort": "Minutes",
    "owner_if_yes": "You (Chief of Staff gives the steps)",
    "source": null,
    "pack_date": "2026-09-02",
    "status": "waiting_jm"
   },
   {
    "id": "suggestion-10",
    "rank": 13,
    "display_rank": 10,
    "title": "Star Chief of Staff as your main bot for a one-week trial",
    "change": "The starred bot offers work it could take off your plate, and anything you tag the bot in on X goes to it.",
    "recommendation": "Yes-with-change",
    "why": "Star Chief of Staff only, for one week, and unstar it if the offers feel like another inbox. Tags on X are public replies, and posts with video are not forwarded.",
    "effort": "Minutes",
    "owner_if_yes": "You (star it); Chief of Staff handles what comes in",
    "source": "https://x.ai/changelog/bot",
    "pack_date": "2026-10-04",
    "status": "waiting_jm"
   },
   {
    "id": "suggestion-11",
    "rank": 14,
    "display_rank": 11,
    "title": "Turn repeated fixes into permanent rules automatically",
    "change": "When the same mistake keeps coming back, a correction tool finds the pattern and fixes it at the root instead of correcting the bot again.",
    "recommendation": "Later",
    "why": "It fits your 'learn from every mistake' habit, but it is not confirmed yet. AI Improvements will check it first and bring it back once confirmed.",
    "effort": "Minutes once confirmed",
    "owner_if_yes": "AI Improvements checks it; Chief of Staff adds it",
    "source": "https://x.ai/changelog/build",
    "pack_date": "2026-10-10",
    "status": "waiting_jm"
   },
   {
    "id": "suggestion-12",
    "rank": 15,
    "display_rank": 12,
    "title": "Use built-in slide decks for the Live Out Loud speaking work",
    "change": "Bots build slide decks in the chat and deliver PowerPoint or Google Slides.",
    "recommendation": "Later",
    "why": "Useful once the speaking page work reaches slides. Save them only to personal storage.",
    "effort": "Minutes per deck",
    "owner_if_yes": "The dashboard lead",
    "source": "https://x.ai/changelog/bot",
    "pack_date": "2026-10-10",
    "status": "waiting_jm"
   },
   {
    "id": "suggestion-13",
    "rank": 17,
    "display_rank": 13,
    "title": "Connect 1Password with a separate vault for bots only",
    "change": "Bots sign in from a dedicated vault with no finance logins, and you approve each fill.",
    "recommendation": "Later",
    "why": "Fewer sign-in interruptions, but only with a dedicated vault that has no finance logins, and only once sign-ins actually slow work down.",
    "effort": "Minutes",
    "owner_if_yes": "You set up the vault; Chief of Staff checks it",
    "source": null,
    "pack_date": "2026-09-27",
    "status": "waiting_jm"
   },
   {
    "id": "suggestion-14",
    "rank": 18,
    "display_rank": 14,
    "title": "Try a second coding tool on one small Chiro task",
    "change": "Run one small task through your personal Claude plan instead of the usual coding helper, to see whether it cuts coding costs.",
    "recommendation": "Later",
    "why": "It would be a second coding tool. Only worth trying if coding cost becomes a real problem, and only as a replacement run, never side by side.",
    "effort": "Small (one task)",
    "owner_if_yes": "Chief of Staff, if you approve",
    "source": null,
    "pack_date": "2026-09-27",
    "status": "waiting_jm"
   },
   {
    "id": "suggestion-15",
    "rank": 19,
    "display_rank": 15,
    "title": "Use Claude Fable 5.1 for coding work that has to prove itself",
    "change": "Pick Fable 5.1 instead of the older version for coding helpers that have to prove their work.",
    "recommendation": "No",
    "why": "Replaced by the Grok 4.7 default (the earlier suggestion), and Fable costs more. Revisit only if 4.7 proves weak at checking its work.",
    "effort": "Minutes",
    "owner_if_yes": "Chief of Staff",
    "source": "https://cursor.com/docs/models/claude-fable-5-1",
    "pack_date": "2026-09-02",
    "status": "waiting_jm"
   },
   {
    "id": "suggestion-16",
    "rank": 20,
    "display_rank": 16,
    "title": "Add up to five ready-made bots from the marketplace",
    "change": "Add up to five marketplace bots or add-ons after Chief of Staff checks them.",
    "recommendation": "No",
    "why": "The standing rule is to copy useful habits into our own bots, not install marketplace ones. Saying no closes the list; one can come back only if a missing connection needs it.",
    "effort": "None",
    "owner_if_yes": "Nobody",
    "source": null,
    "pack_date": "2026-10-01",
    "status": "waiting_jm"
   }
  ],
  "closed": [
   {
    "item": "Aug 17 suggestions",
    "pack_date": "2026-08-17",
    "reason": "Setup week; there were no suggestions."
   },
   {
    "item": "Oct 4 suggestions",
    "pack_date": "2026-10-04",
    "reason": "None that week. Its one idea is folded into the main-bot trial above."
   },
   {
    "item": "Daily new-feature watch",
    "pack_date": "2026-10-10",
    "reason": "Done: the daily watch is running."
   },
   {
    "item": "Email drafts shown as cards",
    "pack_date": "2026-09-27",
    "reason": "Already the default since Oct 7. Nothing to decide."
   },
   {
    "item": "Read your saved AI shortcuts on X",
    "pack_date": "2026-08-17",
    "reason": "Done: they have been read automatically since early September."
   },
   {
    "item": "Four working habits (build, check, correct; limit the damage; learn from mistakes; one piece at a time)",
    "pack_date": "2026-09-27",
    "reason": "Already answered by your standing yes on Oct 1 to copy proven bot habits."
   },
   {
    "item": "Payments team trial on Chiro Payments",
    "pack_date": "2026-09-28",
    "reason": "You said yes on Sep 28; the trial is being set up."
   },
   {
    "item": "Copy another bot's money-balance habits",
    "pack_date": "2026-09-28",
    "reason": "Turned down; nothing to answer."
   },
   {
    "item": "One coding project led by the payments coordinator",
    "pack_date": "2026-09-28",
    "reason": "Folded into the suggestion to run Chiro Payments as one coding project."
   },
   {
    "item": "Three ready-made helper bots",
    "pack_date": "2026-09-30",
    "reason": "Already answered by your standing yes on Oct 1."
   },
   {
    "item": "Copy good habits before adding tools",
    "pack_date": "2026-10-01",
    "reason": "Already answered by your standing yes on Oct 1; the 'add tools' half is the marketplace suggestion above."
   },
   {
    "item": "Group self-check across the apps",
    "pack_date": "2026-10-06",
    "reason": "You said yes on Oct 6. It starts once the first app passes both checks and has its self-check (the second suggestion above)."
   },
   {
    "item": "Code checking in every coding room",
    "pack_date": "2026-10-10",
    "reason": "You said yes on the Oct 10 call. How it is rolled out is the first suggestion above."
   },
   {
    "item": "Library tab",
    "pack_date": "2026-10-10",
    "reason": "Nothing to decide: it is already in the app."
   },
   {
    "item": "Sep 27 coding tools review",
    "pack_date": "2026-09-27",
    "reason": "One idea is folded into the Grok 4.7 suggestion, one is already the rule, one is covered by a standing yes, and one is a list of things not to do."
   },
   {
    "item": "Sep 30 platform coordinator review",
    "pack_date": "2026-09-30",
    "reason": "Settled by your yes on Oct 1."
   }
  ],
  "hidden_other_hat": 5
 },
 "app_names": {
  "chiro-payments": "Chiro Payments",
  "chiro-inventory": "Chiro Inventory",
  "feedback-tool": "Feedback tool",
  "my-cfo": "My CFO",
  "concierge": "Concierge",
  "ai-dashboards-lol": "AI Dashboards / Live Out Loud",
  "platform": "Platform",
  "board": "Board",
  "ai-improvements": "AI Improvements",
  "cross-app": "Across apps"
 },
 "types": [
  "question",
  "sign-off",
  "ticket-feedback",
  "ai-rec",
  "decision"
 ],
 "options": [
  "Go with recommendation",
  "Yes",
  "No",
  "Later",
  "Other"
 ]
};
