import { create } from "zustand";

interface Call {
  duration: number;
}

interface CallState {
  call: Call;
  setCall: (call: Call) => void;
}

export const useCallState = create<CallState>((set) => ({
  call: {
    duration: 0,
  },
  setCall: (call: Call) => set({ call }),
}));
