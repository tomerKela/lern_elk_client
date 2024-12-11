import { Chat } from "./chatStore";

export const mockChats: Chat[] = [
  {
    id: "1",
    participants: ["You", "Bob"],
    messages: [
      {
        id: "1",
        sender: "You",
        content: "Hi Bob, how are you?",
        type: "text",
        timestamp: new Date("2023-08-18T10:00:00"),
      },
      {
        id: "2",
        sender: "Bob",
        content: "Hey Alice, Im good! How about you?",
        type: "text",
        timestamp: new Date("2023-08-18T10:05:00"),
      },
      {
        id: "3",
        sender: "You",
        content:
          "Im doing great, thanks! Do you have time for a quick meeting today?",
        type: "text",
        timestamp: new Date("2023-08-18T10:10:00"),
      },
      {
        id: "4",
        sender: "Bob",
        content: "Sure, Im free this afternoon. What time works for you?",
        type: "text",
        timestamp: new Date("2023-08-18T10:15:00"),
      },
      {
        id: "5",
        sender: "You",
        content: "How about 3 PM?",
        type: "text",
        timestamp: new Date("2023-08-18T10:20:00"),
      },
      {
        id: "6",
        sender: "Bob",
        content: "Sounds good! Ill send a meeting invite.",
        type: "text",
        timestamp: new Date("2023-08-18T10:25:00"),
      },
      {
        id: "7",
        sender: "Bob",
        content: "Meeting suggestion: 2023-08-18 at 15:00",
        type: "meeting_suggestion",
        timestamp: new Date("2023-08-18T10:30:00"),
        meetingDetails: { date: new Date("2023-08-18"), time: "15:00" },
      },
    ],
  },
  {
    id: "2",
    participants: ["You", "Charlie"],
    messages: [
      {
        id: "1",
        sender: "Charlie",
        content: "Alice, can we schedule a meeting?",
        type: "text",
        timestamp: new Date("2023-08-18T11:00:00"),
      },
      {
        id: "2",
        sender: "You",
        content: "Of course, Charlie. Whats it regarding?",
        type: "text",
        timestamp: new Date("2023-08-18T11:05:00"),
      },
      {
        id: "3",
        sender: "Charlie",
        content: "Id like to discuss the new project proposal.",
        type: "text",
        timestamp: new Date("2023-08-18T11:10:00"),
      },
      {
        id: "4",
        sender: "You",
        content: "Sounds important. How about tomorrow at 2 PM?",
        type: "text",
        timestamp: new Date("2023-08-18T11:15:00"),
      },
      {
        id: "5",
        sender: "Charlie",
        content: "That works for me. Ill send an invite.",
        type: "text",
        timestamp: new Date("2023-08-18T11:20:00"),
      },
      {
        id: "6",
        sender: "Charlie",
        content: "Meeting suggestion: 2023-08-19 at 14:00",
        type: "meeting_suggestion",
        timestamp: new Date("2023-08-18T11:25:00"),
        meetingDetails: { date: new Date("2023-08-19"), time: "14:00" },
      },
    ],
  },

  {
    id: "5",
    participants: ["You", "Frank"],
    messages: [
      {
        id: "1",
        sender: "Frank",
        content: "David, do you have the latest sales figures?",
        type: "text",
        timestamp: new Date("2023-08-18T16:00:00"),
      },
      {
        id: "2",
        sender: "You",
        content:
          "Hi Frank, Im just compiling them now. Should be ready in about an hour.",
        type: "text",
        timestamp: new Date("2023-08-18T16:05:00"),
      },
      {
        id: "3",
        sender: "Frank",
        content:
          "Great, thanks. Can we go over them together once theyre ready?",
        type: "text",
        timestamp: new Date("2023-08-18T16:10:00"),
      },
      {
        id: "4",
        sender: "You",
        content: "Absolutely. How about we meet at 5:30 PM?",
        type: "text",
        timestamp: new Date("2023-08-18T16:15:00"),
      },
      {
        id: "5",
        sender: "Frank",
        content: "That works for me. Send me an invite when youre ready.",
        type: "text",
        timestamp: new Date("2023-08-18T16:20:00"),
      },
      {
        id: "6",
        sender: "You",
        content: "Will do. Talk to you soon.",
        type: "text",
        timestamp: new Date("2023-08-18T16:25:00"),
      },
      {
        id: "7",
        sender: "You",
        content: "Meeting suggestion: 2023-08-18 at 17:30",
        type: "meeting_suggestion",
        timestamp: new Date("2023-08-18T17:00:00"),
        meetingDetails: { date: new Date("2023-08-18"), time: "17:30" },
      },
    ],
  },
  {
    id: "6",
    participants: ["You", "George"],
    messages: [
      {
        id: "1",
        sender: "George",
        content:
          "Eva, have you seen the client feedback on our latest proposal?",
        type: "text",
        timestamp: new Date("2023-08-18T13:00:00"),
      },
      {
        id: "2",
        sender: "You",
        content: "Not yet, George. Is it in our shared folder?",
        type: "text",
        timestamp: new Date("2023-08-18T13:05:00"),
      },
      {
        id: "3",
        sender: "George",
        content:
          "Yes, I just uploaded it. There are a few points we need to address.",
        type: "text",
        timestamp: new Date("2023-08-18T13:10:00"),
      },
      {
        id: "4",
        sender: "You",
        content:
          "Ill take a look right away. Should we schedule a meeting to discuss our response?",
        type: "text",
        timestamp: new Date("2023-08-18T13:15:00"),
      },
      {
        id: "5",
        sender: "George",
        content: "Definitely. How about tomorrow morning at 10 AM?",
        type: "text",
        timestamp: new Date("2023-08-18T13:20:00"),
      },
      {
        id: "6",
        sender: "You",
        content: "That works for me. Ill set up the meeting.",
        type: "text",
        timestamp: new Date("2023-08-18T13:25:00"),
      },
      {
        id: "7",
        sender: "You",
        content: "Meeting suggestion: 2023-08-19 at 10:00",
        type: "meeting_suggestion",
        timestamp: new Date("2023-08-18T13:30:00"),
        meetingDetails: { date: new Date("2023-08-19"), time: "10:00" },
      },
    ],
  },
  {
    id: "7",
    participants: ["You", "Sarah"],
    messages: [
      {
        id: "1",
        sender: "You",
        content: "Sarah, how's the progress on the Q3 report?",
        type: "text",
        timestamp: new Date("2023-09-01T09:00:00"),
      },
      {
        id: "2",
        sender: "Sarah",
        content: "I'm about 70% done, Alex. Should have it ready by tomorrow.",
        type: "text",
        timestamp: new Date("2023-09-01T09:05:00"),
      },
      {
        id: "3",
        sender: "You",
        content: "Great! Any challenges you're facing?",
        type: "text",
        timestamp: new Date("2023-09-01T09:10:00"),
      },
      {
        id: "4",
        sender: "Sarah",
        content: "Just waiting on some final numbers from accounting.",
        type: "text",
        timestamp: new Date("2023-09-01T09:15:00"),
      },
      {
        id: "5",
        sender: "You",
        content:
          "I'll follow up with them. Can we review it together once it's done?",
        type: "text",
        timestamp: new Date("2023-09-01T09:20:00"),
      },
      {
        id: "6",
        sender: "Sarah",
        content: "Absolutely. How about Wednesday at 2 PM?",
        type: "text",
        timestamp: new Date("2023-09-01T09:25:00"),
      },
      {
        id: "7",
        sender: "You",
        content: "Perfect. I'll block that time.",
        type: "text",
        timestamp: new Date("2023-09-01T09:30:00"),
      },
      {
        id: "8",
        sender: "Sarah",
        content: "Meeting suggestion: 2023-09-06 at 14:00",
        type: "meeting_suggestion",
        timestamp: new Date("2023-09-01T09:35:00"),
        meetingDetails: { date: new Date("2023-09-06"), time: "14:00" },
      },
    ],
  },
  {
    id: "8",
    participants: ["You", "Jessica"],
    messages: [
      {
        id: "1",
        sender: "You",
        content:
          "Jessica, do you have a moment to discuss the new product launch?",
        type: "text",
        timestamp: new Date("2023-09-10T11:00:00"),
      },
      {
        id: "2",
        sender: "Jessica",
        content: "Sure, Mike. What's on your mind?",
        type: "text",
        timestamp: new Date("2023-09-10T11:05:00"),
      },
      {
        id: "3",
        sender: "You",
        content:
          "I'm concerned about the marketing budget. It seems a bit low for such a big launch.",
        type: "text",
        timestamp: new Date("2023-09-10T11:10:00"),
      },
      {
        id: "4",
        sender: "Jessica",
        content: "I see. Have you looked at the breakdown I sent last week?",
        type: "text",
        timestamp: new Date("2023-09-10T11:15:00"),
      },
      {
        id: "5",
        sender: "You",
        content:
          "I did, but I think we might need to allocate more for digital advertising.",
        type: "text",
        timestamp: new Date("2023-09-10T11:20:00"),
      },
      {
        id: "6",
        sender: "Jessica",
        content:
          "Okay, let's review it together. Can you send me your proposed adjustments?",
        type: "text",
        timestamp: new Date("2023-09-10T11:25:00"),
      },
      {
        id: "7",
        sender: "You",
        content:
          "Sure, I'll have that to you by end of day. When can we meet to discuss?",
        type: "text",
        timestamp: new Date("2023-09-10T11:30:00"),
      },
      {
        id: "8",
        sender: "Jessica",
        content: "How about Thursday at 11 AM?",
        type: "text",
        timestamp: new Date("2023-09-10T11:35:00"),
      },
      {
        id: "9",
        sender: "You",
        content: "Sounds good. I'll set up the meeting.",
        type: "text",
        timestamp: new Date("2023-09-10T11:40:00"),
      },
      {
        id: "10",
        sender: "You",
        content: "Meeting suggestion: 2023-09-14 at 11:00",
        type: "meeting_suggestion",
        timestamp: new Date("2023-09-10T11:45:00"),
        meetingDetails: { date: new Date("2023-09-14"), time: "11:00" },
      },
    ],
  },
  {
    id: "9",
    participants: ["You", "Emily"],
    messages: [
      {
        id: "1",
        sender: "You",
        content:
          "Emily, have you finished the user testing for the new app interface?",
        type: "text",
        timestamp: new Date("2023-09-20T14:00:00"),
      },
      {
        id: "2",
        sender: "Emily",
        content: "Yes, David. We completed the testing yesterday.",
        type: "text",
        timestamp: new Date("2023-09-20T14:05:00"),
      },
      {
        id: "3",
        sender: "You",
        content: "Great! What were the initial findings?",
        type: "text",
        timestamp: new Date("2023-09-20T14:10:00"),
      },
      {
        id: "4",
        sender: "Emily",
        content:
          "Overall positive, but there were some issues with the navigation menu.",
        type: "text",
        timestamp: new Date("2023-09-20T14:15:00"),
      },
      {
        id: "5",
        sender: "You",
        content: "I see. Can you elaborate on the navigation issues?",
        type: "text",
        timestamp: new Date("2023-09-20T14:20:00"),
      },
      {
        id: "6",
        sender: "Emily",
        content:
          "Users found it confusing to switch between different sections. We might need to redesign it.",
        type: "text",
        timestamp: new Date("2023-09-20T14:25:00"),
      },
      {
        id: "7",
        sender: "You",
        content:
          "Okay, that's crucial information. When can you have a detailed report ready?",
        type: "text",
        timestamp: new Date("2023-09-20T14:30:00"),
      },
      {
        id: "8",
        sender: "Emily",
        content:
          "I can have it ready by Friday. Shall we schedule a meeting to review it?",
        type: "text",
        timestamp: new Date("2023-09-20T14:35:00"),
      },
      {
        id: "9",
        sender: "You",
        content: "Definitely. How about Friday at 2 PM?",
        type: "text",
        timestamp: new Date("2023-09-20T14:40:00"),
      },
      {
        id: "10",
        sender: "Emily",
        content: "Perfect, I'll set it up.",
        type: "text",
        timestamp: new Date("2023-09-20T14:45:00"),
      },
      {
        id: "11",
        sender: "Emily",
        content: "Meeting suggestion: 2023-09-22 at 14:00",
        type: "meeting_suggestion",
        timestamp: new Date("2023-09-20T14:50:00"),
        meetingDetails: { date: new Date("2023-09-22"), time: "14:00" },
      },
    ],
  },
  {
    id: "10",
    participants: ["You", "Tom"],
    messages: [
      {
        id: "1",
        sender: "You",
        content:
          "Tom, do you have the latest sales figures for the East Coast region?",
        type: "text",
        timestamp: new Date("2023-09-25T10:00:00"),
      },
      {
        id: "2",
        sender: "Tom",
        content: "I do, Lisa. Would you like me to send them over?",
        type: "text",
        timestamp: new Date("2023-09-25T10:05:00"),
      },
      {
        id: "3",
        sender: "You",
        content:
          "Yes, please. And could you highlight any significant changes from last quarter?",
        type: "text",
        timestamp: new Date("2023-09-25T10:10:00"),
      },
      {
        id: "4",
        sender: "Tom",
        content:
          "Sure thing. There's been a noticeable uptick in the New York area. I'll make sure to emphasize that.",
        type: "text",
        timestamp: new Date("2023-09-25T10:15:00"),
      },
      {
        id: "5",
        sender: "You",
        content: "That's great news! Any idea what's driving the increase?",
        type: "text",
        timestamp: new Date("2023-09-25T10:20:00"),
      },
      {
        id: "6",
        sender: "Tom",
        content:
          "It seems our new marketing campaign has been particularly effective there. I'll include details in the report.",
        type: "text",
        timestamp: new Date("2023-09-25T10:25:00"),
      },
      {
        id: "7",
        sender: "You",
        content: "Excellent. When can I expect the report?",
        type: "text",
        timestamp: new Date("2023-09-25T10:30:00"),
      },
      {
        id: "8",
        sender: "Tom",
        content:
          "I can have it to you by end of day. Would you like to schedule a brief review tomorrow?",
        type: "text",
        timestamp: new Date("2023-09-25T10:35:00"),
      },
      {
        id: "9",
        sender: "You",
        content: "That would be helpful. How about 10 AM?",
        type: "text",
        timestamp: new Date("2023-09-25T10:40:00"),
      },
      {
        id: "10",
        sender: "Tom",
        content: "10 AM works for me. I'll send a calendar invite.",
        type: "text",
        timestamp: new Date("2023-09-25T10:45:00"),
      },
      {
        id: "11",
        sender: "Tom",
        content: "Meeting suggestion: 2023-09-26 at 10:00",
        type: "meeting_suggestion",
        timestamp: new Date("2023-09-25T10:50:00"),
        meetingDetails: { date: new Date("2023-09-26"), time: "10:00" },
      },
    ],
  },
  {
    id: "11",
    participants: ["You", "Olivia"],
    messages: [
      {
        id: "1",
        sender: "You",
        content:
          "Olivia, have you had a chance to review the new supplier contracts?",
        type: "text",
        timestamp: new Date("2023-10-02T09:00:00"),
      },
      {
        id: "2",
        sender: "Olivia",
        content:
          "Yes, I've gone through them. There are a few points we need to discuss.",
        type: "text",
        timestamp: new Date("2023-10-02T09:05:00"),
      },
      {
        id: "3",
        sender: "You",
        content: "Okay, what are your main concerns?",
        type: "text",
        timestamp: new Date("2023-10-02T09:10:00"),
      },
      {
        id: "4",
        sender: "Olivia",
        content:
          "The pricing structure seems a bit high compared to our current contracts. Also, the delivery terms are quite strict.",
        type: "text",
        timestamp: new Date("2023-10-02T09:15:00"),
      },
      {
        id: "5",
        sender: "You",
        content: "I see. Do you think we have room to negotiate?",
        type: "text",
        timestamp: new Date("2023-10-02T09:20:00"),
      },
      {
        id: "6",
        sender: "Olivia",
        content:
          "Definitely. I've prepared some counterproposals. When can we discuss them?",
        type: "text",
        timestamp: new Date("2023-10-02T09:25:00"),
      },
      {
        id: "7",
        sender: "You",
        content: "How about this afternoon? Say 2 PM?",
        type: "text",
        timestamp: new Date("2023-10-02T09:30:00"),
      },
      {
        id: "8",
        sender: "Olivia",
        content: "That works for me. I'll bring all the relevant documents.",
        type: "text",
        timestamp: new Date("2023-10-02T09:35:00"),
      },
      {
        id: "9",
        sender: "You",
        content: "Great, I'll book the conference room.",
        type: "text",
        timestamp: new Date("2023-10-02T09:40:00"),
      },
      {
        id: "10",
        sender: "You",
        content: "Meeting suggestion: 2023-10-02 at 14:00",
        type: "meeting_suggestion",
        timestamp: new Date("2023-10-02T09:45:00"),
        meetingDetails: { date: new Date("2023-10-02"), time: "14:00" },
      },
    ],
  },
];
