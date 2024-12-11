import { useEffect, useRef } from "react";

export function useDebounce(callback: () => void, delay: number, deps: any[]) {
  const timeoutRef = useRef<number | undefined>();

  useEffect(() => {
    if (timeoutRef.current !== undefined) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = window.setTimeout(() => {
      callback();
    }, delay);

    return () => {
      if (timeoutRef.current !== undefined) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, deps);
}
