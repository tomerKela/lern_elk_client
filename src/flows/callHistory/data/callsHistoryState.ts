import { create } from "zustand";
import { ListElementState } from "../../../common/components/list/data";

export interface PastCall {
  ID: string;
  consultant: {
    ID: string;
    name: string;
    profilePictureUrl: string;
  };
  topic: {
    ID: string;
    name: string;
  };
  dateAndTime: number;
  duration: number;
  totalPrice: number;
  ratedByMe: boolean;
  rating: number;
  review: string;
}

interface CallHistoryState {
  callHistory: Array<PastCall>;
  setCallHistory: (callHistory: Array<PastCall>) => void;
}

export const useCallHistoryState = create<CallHistoryState>((set) => ({
  callHistory: [],
  setCallHistory: (callHistory) => set({ callHistory }),
}));

export const convertCallHistoryToListDetails = (
  callHistory: Array<PastCall>
): ListElementState<PastCall>[] => {
  const data = callHistory.map((pastCall) => {
    const {
      consultant,
      duration,
      ratedByMe,
      rating,
      review,
      topic,
      totalPrice,
      dateAndTime,
    } = pastCall;
    const result: ListElementState<PastCall> = {
      description: `${ratedByMe ? "Rated" : "Not rated"} | ${
        ratedByMe ? `Rating: ${rating} | Review: ${review}` : ""
      }`,
      header: `${consultant.name} | ${topic.name}`,
      secondHeader: `${new Date(
        dateAndTime
      ).toLocaleString()} | ${duration} min | $${totalPrice}`,
      additionalData: pastCall,
      imageUrl: consultant.profilePictureUrl,
    };
    return result;
  });
  return data;
};
