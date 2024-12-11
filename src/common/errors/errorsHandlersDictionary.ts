// errorHandlerDictionary.ts

import { useAuthStore } from "../data/authStore";
import { FetchError } from "./types";

export interface ErrorHandlerEntry {
  message: string;
  handler?: (error: FetchError) => void;
}

export const errorHandlers: { [key: string]: ErrorHandlerEntry } = {
  WRONG_PINCODE: {
    message: "Wrong pincode",
  },
  PINCODE_EXPIRED: {
    message: "Pincode expired",
  },
  EMAIL_ALREADY_REGISTERED: {
    message: "Email already registered",
  },
  NETWORK_CONNECTION_LOST: {
    message: "Network connection lost. Please check your internet connection.",
    handler: (error) => {
      // Custom logic for network issues
      console.log("Handling network error:", error);
      // You can dispatch actions, update stores, etc.
    },
  },
  INVALID_TOKEN: {
    message: "Your session has expired. Please log in again.",
    handler: () => {
      // Redirect to login page or clear session
      // For example, reset the authentication store
      useAuthStore.getState().clear();
    },
  },
  UNAUTHORIZED: {
    message: "You are not authorized to perform this action.",
    handler: () => {
      // Maybe navigate to an unauthorized page or show a modal
    },
  },
  // Add more error mappings as needed
};
