import { create } from "zustand";
import { mockChats } from "./mockChats";

type MessageType = "text" | "meeting_suggestion";

export interface Message {
  id: string;
  sender: string;
  content: string;
  type: MessageType;
  timestamp: Date;
  meetingDetails?: {
    date: Date;
    time: string;
    status?: "approved" | "rejected";
  };
}

export interface Chat {
  id: string;
  participants: string[];
  messages: Message[];
}

export interface ChatStore {
  chats: Chat[];
  activeChat: string | null;
  setActiveChat: (chatId: string) => void;
  sendMessage: (
    chatId: string,
    message: Omit<Message, "id" | "timestamp">
  ) => void;
  responseToMeetingInvitation: (
    chatId: string,
    messageId: string,
    status: "approved" | "rejected"
  ) => void;
}

export interface SearchResult {
  chatId: string;
  messageId: string;
  content: string;
  sender: string;
  recipient: string;
}

// Zustand store
export const useChatStore = create<ChatStore>((set) => ({
  chats: mockChats,
  activeChat: null,
  setActiveChat: (chatId) => set({ activeChat: chatId }),
  sendMessage: (chatId, message) =>
    set((state) => ({
      chats: state.chats.map((chat) =>
        chat.id === chatId
          ? {
              ...chat,
              messages: [
                ...chat.messages,
                {
                  ...message,
                  id: Date.now().toString(),
                  timestamp: new Date(),
                },
              ],
            }
          : chat
      ),
    })),
  responseToMeetingInvitation: (chatId, messageId, status) =>
    set((state) => ({
      chats: state.chats.map((chat) =>
        chat.id === chatId
          ? {
              ...chat,
              messages: chat.messages.map((msg) =>
                msg.id === messageId
                  ? {
                      ...msg,
                      meetingDetails: {
                        date: msg.meetingDetails?.date as Date,
                        time: msg.meetingDetails?.time as string,
                        status,
                      },
                    }
                  : msg
              ),
            }
          : chat
      ),
    })),
}));
