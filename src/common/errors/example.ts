import { useErrorStore } from "./errorStorage";

const simulateErrors = () => {
  const { addError } = useErrorStore.getState();
  addError({ message: "Network connection lost", httpCode: 400, data: {} });
  addError({ message: "Failed to authenticate", httpCode: 300, data: {} });
  addError({ message: "Server timeout", httpCode: 400, data: {} });
};

simulateErrors();
