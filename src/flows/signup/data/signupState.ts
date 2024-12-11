import { create } from "zustand";

interface SignupDetails {
  isSent: boolean;
  sentAt: number;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}
interface SignupState {
  signupDetails: SignupDetails;
  setSignupDetails: (signupDetails: SignupDetails) => void;
}

export const useSignupState = create<SignupState>((set) => ({
  signupDetails: {
    isSent: false,
    sentAt: 0,
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  },
  setSignupDetails: (signupDetails: SignupDetails) => set({ signupDetails }),
}));

// const {setSignupDetails, signupDetails} = useSignupState()
