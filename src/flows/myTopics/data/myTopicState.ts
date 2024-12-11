import { create } from "zustand";
import { ListElementState } from "../../../common/components/list/data";

export interface MyTopic {
  ID: string;
  name: string;
  description: string;
  hourlyRate: number;
  minimalMinutes: number;
}

interface MyTopicsState {
  myTopics: Array<MyTopic>;
  setMyTopics: (myTopics: Array<MyTopic>) => void;
}

export const useMyTopicsState = create<MyTopicsState>((set) => ({
  myTopics: [],
  setMyTopics: (myTopics) => set({ myTopics }),
}));

export const convertMyTopicsToListDetails = (
  myTopics: Array<MyTopic>
): ListElementState<MyTopic>[] => {
  const data = myTopics.map((topic) => {
    const { description, hourlyRate, minimalMinutes, name } = topic;
    const result = {
      description: description,
      header: name,
      secondHeader: `Hourly rate: ${hourlyRate}, Minimal minutes: ${minimalMinutes}`,
      additionalData: topic,
    };
    return result;
  });
  return data;
};
