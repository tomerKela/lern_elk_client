import { Box, Button, Paper, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { PostCallModal } from "../components/postCallModal";
import { useCallState } from "../data/callState";
export const MockVideoCallPage: React.FC = () => {
  const [callDuration, setCallDuration] = useState(0);
  const localVideoRef = useRef<HTMLVideoElement>(null);
  const remoteVideoRef = useRef<HTMLVideoElement>(null);
  const [callEnded, setCallEnded] = useState(false);
  const { setCall } = useCallState();

  useEffect(() => {
    const interval = setInterval(() => {
      setCallDuration((prev) => prev + 1);
    }, 1000);

    // Mock setting local and remote video streams
    if (localVideoRef.current && remoteVideoRef.current) {
      // Here you would set the actual video streams
      // localVideoRef.current.srcObject = localStream;
      // remoteVideoRef.current.srcObject = remoteStream;
    }

    return () => clearInterval(interval);
  }, []);

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const endCall = () => {
    setCallEnded(true);
    setCall({ duration: callDuration });
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      bgcolor="#f0f0f0"
    >
      <Typography variant="h4" gutterBottom>
        Video Call
      </Typography>
      <Box display="flex" justifyContent="space-around" gap="20px">
        <Paper elevation={3}>
          <video
            ref={localVideoRef}
            autoPlay
            muted
            style={{
              width: "700px",
              height: "500px",
              backgroundColor: "black",
            }}
          />
          <Typography align="center">You</Typography>
        </Paper>
        <Paper elevation={3}>
          <video
            ref={remoteVideoRef}
            autoPlay
            style={{
              width: "700px",
              height: "500px",
              backgroundColor: "black",
            }}
          />
          <Typography align="center">Remote</Typography>
        </Paper>
      </Box>

      <Typography variant="h6" gutterBottom>
        Call Duration: {formatDuration(callDuration)}
      </Typography>

      <Button variant="contained" color="secondary" onClick={endCall}>
        End Call
      </Button>

      {callEnded && <PostCallModal />}
    </Box>
  );
};
