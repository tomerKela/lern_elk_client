// src/pages/NextMeetings.tsx
import CancelIcon from "@mui/icons-material/Cancel";
import ChatIcon from "@mui/icons-material/Chat";
import { Button } from "@mui/material";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Notification } from "../data/notificationState";

export const NotificationActionButtons: FC<{ data: Notification }> = ({
  data,
}) => {
  const navigate = useNavigate();

  return (
    <>
      <div
        style={{ display: "flex", gap: "10px", height: "30px", color: "gray" }}
      >
        <Button
          variant="outlined"
          size="small"
          color="inherit"
          startIcon={<CancelIcon />}
          onClick={() => {
            // Remove notification logic here
          }}
        >
          Remove
        </Button>
        <Button
          variant="outlined"
          size="small"
          startIcon={<ChatIcon />}
          onClick={() => {
            // Go to notification link logic here
            navigate(data.date);
          }}
        >
          Go to Link
        </Button>
      </div>
    </>
  );
};
