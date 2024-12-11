import { create } from "zustand";

export interface TopicAvailabilityBlock {
  dateOfStart: number;
  dateOfEnd: number;
}

export interface TopicReview {
  rating: number;
  comment: string;
  date: number;
  user: {
    ID: string;
    email: string;
    firstName: string;
    lastName: string;
    profilePictureUrl: string;
  };
}

export interface TopicReviews {
  averageRating: number;
  data: TopicReview[];
}

export interface TopicMetaData {
  ID: string;
  name: string;
  extendedDescription: string;
  hourlyRate: number;
  minimalMinutes: number;
  teacher: {
    ID: string;
    email: string;
    firstName: string;
    lastName: string;
    description: string;
    profilePictureUrl: string;
  };
}

export interface CurrentTopicState {
  availability: TopicAvailabilityBlock[];
  setAvailability: (availability: TopicAvailabilityBlock[]) => void;
  ratings: TopicReviews;
  setRatings: (ratings: TopicReviews) => void;
  metaData: TopicMetaData;
  setMetaData: (metaData: TopicMetaData) => void;
}

export const useCurrentTopicState = create<CurrentTopicState>((set) => ({
  availability: [],
  setAvailability: (availability: TopicAvailabilityBlock[]) =>
    set({ availability }),
  ratings: {
    averageRating: 0,
    data: [],
  },
  setRatings: (ratings: TopicReviews) => set({ ratings }),
  metaData: {
    ID: "",
    name: "",
    extendedDescription: "",
    hourlyRate: 0,
    minimalMinutes: 0,
    teacher: {
      ID: "",
      email: "",
      firstName: "",
      lastName: "",
      description: "",
      profilePictureUrl: "",
    },
  },
  setMetaData: (metaData: TopicMetaData) => set({ metaData }),
}));
