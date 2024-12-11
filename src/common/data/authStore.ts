import create from "zustand";

interface AuthState {
  token: string;
  user: {
    ID: string;
    email: string;
    firstName: string;
    lastName: string;
  };
}
// Zustand store
interface AuthStore {
  data: AuthState | null;
  set: (state: AuthState) => void;
  clear: () => void;
}

const savedAuthState = localStorage.getItem("userDetails");
console.log(savedAuthState);
export const useAuthStore = create<AuthStore>((set) => ({
  data: savedAuthState ? JSON.parse(savedAuthState) : null,
  set: (state) => {
    localStorage.setItem("userDetails", JSON.stringify(state));
    set({ data: state });
  },
  clear: () => {
    localStorage.removeItem("userDetails");
    set({ data: null });
  },
}));
