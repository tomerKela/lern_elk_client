import { create } from "zustand";
import { ListElementState } from "../../../common/components/list/data";

export interface Notification {
  id: string;
  title: string;
  message: string;
  date: string;
  read: boolean;
}

export interface Notifications {
  data: Notification[];
}

interface NotificationsState {
  notifications: Notifications;
  setNotifications: (notifications: Notifications) => void;
}

export const useNotificationsState = create<NotificationsState>((set) => ({
  notifications: {
    data: [],
  },
  setNotifications: (notifications: Notifications) => set({ notifications }),
}));

export const convertNotificationToListDetails = (
  meetings: Notifications
): ListElementState<Notification>[] => {
  const data = meetings.data.map((notification) => {
    const { id, message, read, title, date } = notification;
    const result = {
      description: date,
      header: title,
      secondHeader: message,
      imageUrl: undefined,
      additionalData: notification,
    };
    return result;
  });
  return data;
};
