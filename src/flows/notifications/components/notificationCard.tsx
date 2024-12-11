// NotificationCard.tsx

import { Card, CardContent, Typography } from "@mui/material";
import React from "react";
import { Notification } from "../data/notificationState";

interface NotificationCardProps {
  notification: Notification;
}

export const NotificationCard: React.FC<NotificationCardProps> = ({
  notification,
}) => {
  const cardStyle = {
    marginBottom: "16px",
    backgroundColor: notification.read ? "white" : "#f5f5f5", // Use lighter background for unread notifications
  };

  const dateStyle = {
    fontSize: "0.875rem",
    color: "gray",
  };

  return (
    <Card style={cardStyle}>
      <CardContent>
        <Typography variant="h6">{notification.title}</Typography>
        <Typography variant="body2">{notification.message}</Typography>
        <Typography style={dateStyle}>
          {new Date(notification.date).toLocaleString()}
        </Typography>
      </CardContent>
    </Card>
  );
};
