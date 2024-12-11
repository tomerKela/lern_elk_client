// src/pages/NextMeetings.tsx
import CancelIcon from "@mui/icons-material/Cancel";
import ChatIcon from "@mui/icons-material/Chat";
import { Button } from "@mui/material";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { PastCall } from "../data/callsHistoryState";
import DetailsIcon from "@mui/icons-material/Book";
import RateIcon from "@mui/icons-material/RateReview";

export const PastCallActionButtons: FC<{ data: PastCall }> = ({ data }) => {
  const navigate = useNavigate();

  return (
    <>
      <div
        style={{ display: "flex", gap: "10px", height: "30px", color: "gray" }}
      >
        <Button
          variant="outlined"
          size="small"
          startIcon={<ChatIcon />}
          onClick={() => {
            navigate(data.topic.ID);
          }}
        >
          Send Message
        </Button>
        <Button
          variant="outlined"
          size="small"
          startIcon={<RateIcon />}
          onClick={() => {
            navigate(data.topic.ID);
          }}
        >
          Edit Rating
        </Button>
        <Button
          variant="outlined"
          size="small"
          startIcon={<DetailsIcon />}
          onClick={() => {
            navigate(data.topic.ID);
          }}
        >
          Topic Details
        </Button>
      </div>
    </>
  );
};
