import { Notifications } from "../data/notificationState";

export const mockNotifications: Notifications["data"] = [
  {
    id: "1",
    title: "New Message",
    message: "You have a new message from John Doe.",
    date: "2024-07-30T10:00:00Z",
    read: false,
  },
  {
    id: "2",
    title: "Payment Received",
    message: "You have received a payment of $50.00.",
    date: "2024-07-29T14:30:00Z",
    read: true,
  },
  {
    id: "3",
    title: "Appointment Reminder",
    message: "Your appointment with Jane Smith is tomorrow at 3 PM.",
    date: "2024-07-28T08:00:00Z",
    read: false,
  },
  {
    id: "4",
    title: "New Feature",
    message: "Check out our new feature! Click here to learn more.",
    date: "2024-07-27T16:45:00Z",
    read: true,
  },
  {
    id: "5",
    title: "Account Update",
    message: "Your account information has been updated.",
    date: "2024-07-26T11:20:00Z",
    read: false,
  },
];
