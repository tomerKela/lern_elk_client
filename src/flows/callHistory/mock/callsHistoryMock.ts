import { PastCall } from "../data/callsHistoryState";

export const myTopicsMock: PastCall[] = [
  {
    ID: "1",
    consultant: {
      ID: "1",
      name: "John Doe",
      profilePictureUrl: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    topic: {
      ID: "1",
      name: "Java",
    },
    dateAndTime: new Date("2021-01-01T10:00").getTime(),
    duration: 90,
    totalPrice: 150,
    ratedByMe: true,
    rating: 5,
    review: "Great consultant",
  },
  {
    ID: "2",
    consultant: {
      ID: "2",
      name: "Jane Smith",
      profilePictureUrl: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    topic: {
      ID: "2",
      name: "Python",
    },
    dateAndTime: new Date("2021-02-01T14:30").getTime(),
    duration: 60,
    totalPrice: 100,
    ratedByMe: false,
    rating: 0,
    review: "",
  },
  {
    ID: "3",
    consultant: {
      ID: "3",
      name: "Bob Johnson",
      profilePictureUrl: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    topic: {
      ID: "3",
      name: "JavaScript",
    },
    dateAndTime: new Date("2021-03-01T16:45").getTime(),
    duration: 45,
    totalPrice: 75,
    ratedByMe: true,
    rating: 4,
    review: "Good session",
  },
  {
    ID: "4",
    consultant: {
      ID: "4",
      name: "Alice Brown",
      profilePictureUrl: "https://randomuser.me/api/portraits/women/3.jpg",
    },
    topic: {
      ID: "4",
      name: "React",
    },
    dateAndTime: new Date("2021-04-01T11:15").getTime(),
    duration: 75,
    totalPrice: 120,
    ratedByMe: false,
    rating: 0,
    review: "",
  },
  {
    ID: "5",
    consultant: {
      ID: "5",
      name: "David Wilson",
      profilePictureUrl: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    topic: {
      ID: "5",
      name: "TypeScript",
    },
    dateAndTime: new Date("2021-05-01T09:30").getTime(),
    duration: 30,
    totalPrice: 50,
    ratedByMe: true,
    rating: 3,
    review: "Average session",
  },
  {
    ID: "6",
    consultant: {
      ID: "6",
      name: "Emily Davis",
      profilePictureUrl: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    topic: {
      ID: "6",
      name: "Angular",
    },
    dateAndTime: new Date("2021-06-01T13:00").getTime(),
    duration: 120,
    totalPrice: 200,
    ratedByMe: false,
    rating: 0,
    review: "",
  },
];
