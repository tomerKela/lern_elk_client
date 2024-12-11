// src/pages/NextMeetings.tsx
import CancelIcon from "@mui/icons-material/Cancel";
import ChatIcon from "@mui/icons-material/Chat";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import { Button, Typography } from "@mui/material";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Meeting } from "../data/nextMeetingsState";

export const NextMeetingsElementExtension: FC<{ data: Meeting }> = ({
  data,
}) => {
  const navigate = useNavigate();

  return (
    <div style={{ marginTop: "16px" }}>
      <Typography variant="body2">
        Additional clients:
        {data.additionalClients.map((client) => client.name).join(", ")}
      </Typography>
      <Typography variant="body2">
        Hourly rate: {data.topic.hourlyRate}
      </Typography>

      <div style={{ marginTop: "16px", display: "flex", gap: "8px" }}>
        <Button variant="contained" startIcon={<ChatIcon />}>
          Chat
        </Button>
        <Button
          variant="contained"
          startIcon={<VideoCallIcon />}
          onClick={() => {
            navigate("/mock-call");
          }}
        >
          Go To Meeting
        </Button>
        <Button variant="outlined" startIcon={<CancelIcon />} color="error">
          Cancel
        </Button>
      </div>
    </div>
  );
};
