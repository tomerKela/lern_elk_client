import create from "zustand";
import { FetchError } from "./types";

export const useErrorStore = create<{
  errorQueue: FetchError[];
  addError: (error: FetchError) => void;
  clearErrors: () => void;
}>((set) => ({
  errorQueue: [],
  addError: (error) =>
    set((state) => ({ errorQueue: [...state.errorQueue, error] })),
  clearErrors: () => set({ errorQueue: [] }),
}));
