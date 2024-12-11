import {
  TopicAvailabilityBlock,
  TopicReviews,
} from "../data/currentTopicState";

export const mockTopicAvalabilities: TopicAvailabilityBlock[] = [
  {
    dateOfStart: new Date("2024-07-15T08:00:00").getTime(),
    dateOfEnd: new Date("2024-07-15T10:30:00").getTime(),
  },
  {
    dateOfStart: new Date("2024-07-16T14:00:00").getTime(),
    dateOfEnd: new Date("2024-07-16T15:00:00").getTime(),
  },
];

export const mockTopicRatings: TopicReviews = {
  averageRating: 4.5,
  data: [
    {
      rating: 5,
      comment: "Great teacher!",
      date: new Date("2024-07-15T08:00:00").getTime(),
      user: {
        email: "MatthewJohnson@gmail.com",
        firstName: "Matthew",
        ID: "y14",
        lastName: "Johnson",
        profilePictureUrl: "https://randomuser.me/api/portraits/men/30.jpg",
      },
    },
    {
      rating: 4,
      comment: "Good explanation",
      date: new Date("2024-07-16T14:30:00").getTime(),
      user: {
        email: "EmilySmith@gmail.com",
        firstName: "Emily",
        ID: "x27",
        lastName: "Smith",
        profilePictureUrl: "https://randomuser.me/api/portraits/women/31.jpg",
      },
    },
    {
      rating: 3,
      comment: "Interesting topic",
      date: new Date("2024-07-19T11:30:00").getTime(),
      user: {
        email: "MichaelBrown@gmail.com",
        firstName: "Michael",
        ID: "z39",
        lastName: "Brown",
        profilePictureUrl: "https://randomuser.me/api/portraits/men/32.jpg",
      },
    },
    {
      rating: 4,
      comment: "Well-prepared materials",
      date: new Date("2024-07-19T14:00:00").getTime(),
      user: {
        email: "SophiaDavis@gmail.com",
        firstName: "Sophia",
        ID: "w52",
        lastName: "Davis",
        profilePictureUrl: "https://randomuser.me/api/portraits/women/33.jpg",
      },
    },
    {
      rating: 5,
      comment: "Engaging instructor",
      date: new Date("2024-07-20T09:30:00").getTime(),
      user: {
        email: "DanielWilson@gmail.com",
        firstName: "Daniel",
        ID: "v65",
        lastName: "Wilson",
        profilePictureUrl: "https://randomuser.me/api/portraits/men/34.jpg",
      },
    },
    {
      rating: 4,
      comment: "Clear explanations",
      date: new Date("2024-07-20T11:00:00").getTime(),
      user: {
        email: "OliviaTaylor@gmail.com",
        firstName: "Olivia",
        ID: "u78",
        lastName: "Taylor",
        profilePictureUrl: "https://randomuser.me/api/portraits/women/35.jpg",
      },
    },
    {
      rating: 5,
      comment: "Helpful examples",
      date: new Date("2024-07-21T13:00:00").getTime(),
      user: {
        email: "JamesAnderson@gmail.com",
        firstName: "James",
        ID: "t81",
        lastName: "Anderson",
        profilePictureUrl: "https://randomuser.me/api/portraits/men/36.jpg",
      },
    },
    {
      rating: 2,
      comment: "Confusing at times",
      date: new Date("2024-07-21T15:30:00").getTime(),
      user: {
        email: "AvaThomas@gmail.com",
        firstName: "Ava",
        ID: "s94",
        lastName: "Thomas",
        profilePictureUrl: "https://randomuser.me/api/portraits/women/37.jpg",
      },
    },
    {
      rating: 5,
      comment: "Inspiring content",
      date: new Date("2024-07-22T10:00:00").getTime(),
      user: {
        email: "WilliamRoberts@gmail.com",
        firstName: "William",
        ID: "r07",
        lastName: "Roberts",
        profilePictureUrl: "https://randomuser.me/api/portraits/men/38.jpg",
      },
    },
    {
      rating: 4,
      comment: "Great learning experience",
      date: new Date("2024-07-22T12:30:00").getTime(),
      user: {
        email: "MiaHarris@gmail.com",
        firstName: "Mia",
        ID: "q10",
        lastName: "Harris",
        profilePictureUrl: "https://randomuser.me/api/portraits/women/39.jpg",
      },
    },
    {
      rating: 3,
      comment: "Average teaching style",
      date: new Date("2024-07-23T14:30:00").getTime(),
      user: {
        email: "BenjaminClark@gmail.com",
        firstName: "Benjamin",
        ID: "p23",
        lastName: "Clark",
        profilePictureUrl: "https://randomuser.me/api/portraits/men/150.jpg",
      },
    },
    {
      rating: 5,
      comment: "Highly recommended",
      date: new Date("2024-07-23T16:00:00").getTime(),
      user: {
        email: "CharlotteLewis@gmail.com",
        firstName: "Charlotte",
        ID: "o36",
        lastName: "Lewis",
        profilePictureUrl: "https://randomuser.me/api/portraits/women/151.jpg",
      },
    },
  ],
};
