import { useState } from "react";
import { useDebounce } from "../hooks/useDebounce";
import { formatErrorMessages, groupErrorsByType } from "./utils";
import { useErrorStore } from "./errorStorage";
import { Box, Modal, Typography } from "@mui/material";

export const ErrorModal: React.FC = () => {
  const { errorQueue, clearErrors } = useErrorStore();
  const [open, setOpen] = useState(false);
  const [errorMessages, setErrorMessages] = useState("");

  // Use the custom useDebounce hook
  useDebounce(
    () => {
      if (errorQueue.length > 0) {
        const groupedErrors = groupErrorsByType(errorQueue);
        const errorMsgs = formatErrorMessages(groupedErrors);
        setErrorMessages(errorMsgs);
        setOpen(true);
        clearErrors();
      }
    },
    500,
    [errorQueue]
  );

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {errorQueue.length > 0 && <p>Errors are pending...</p>}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute" as "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            borderRadius: 1,
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant="h6" component="h2">
            Multiple errors occurred:
          </Typography>
          <Typography sx={{ mt: 2, whiteSpace: "pre-line" }}>
            {errorMessages}
          </Typography>
        </Box>
      </Modal>
    </>
  );
};
