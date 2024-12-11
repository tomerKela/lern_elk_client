import { Box, Button, Modal, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useCallState } from "../data/callState";

export const PostCallModal: React.FC = () => {
  const { call } = useCallState();

  const navigate = useNavigate();
  return (
    <Modal
      open={true}
      onClose={() => navigate("/")}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        bgcolor="white"
        p={3}
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap={2}
      >
        <Typography variant="h5">Call Ended</Typography>
        <Typography variant="body1">
          Call Duration: {call.duration} seconds
        </Typography>
        <Typography variant="body1">
          Call Price: ${Math.floor((call.duration / 3600) * 100)}
        </Typography>
        <Box display="flex" gap={2}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate("/")}
          >
            Home
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate("/reviewing")}
          >
            Review
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};
