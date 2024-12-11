// NotificationsPage.tsx

import React, { useEffect, useMemo } from "react";

import { List } from "../../../common/components/list";
import { MainColumn, Page } from "../../../common/styledComponents";
import { NotificationActionButtons } from "../components/notificationActionButtons";
import {
  convertNotificationToListDetails,
  useNotificationsState,
} from "../data/notificationState";
import { mockNotifications } from "../mock/mockNotifications";
import { NiceBackground } from "../../../common/components/niceBackgruond/component/niceBackground";

export const NotificationsPage: React.FC = () => {
  const { notifications, setNotifications } = useNotificationsState();

  useEffect(() => {
    setNotifications({ data: mockNotifications });
  }, [setNotifications]);

  const listData = useMemo(() => {
    const result = convertNotificationToListDetails(notifications);
    return result;
  }, [notifications, convertNotificationToListDetails]);

  return (
    <Page>
      <NiceBackground />
      <MainColumn>
        <List
          data={listData}
          ActionButtons={NotificationActionButtons}
          header="Notifications"
        />
      </MainColumn>
    </Page>
  );
};
