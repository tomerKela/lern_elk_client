import { useEffect, useRef } from "react";
import io from "socket.io-client";

export const useSocket = (url: string) => {
  const socketRef = useRef<any>(null);

  useEffect(() => {
    socketRef.current = io(url);

    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect();
      }
    };
  }, [url]);

  return socketRef.current;
};
