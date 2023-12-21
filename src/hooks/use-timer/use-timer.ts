import { useEffect, useRef, useState } from "react";
import { convertToTime } from "./helpers";

const FIVE_MINS_SECS = 300;

const useTimer = () => {
  const [timer, setTimer] = useState(FIVE_MINS_SECS);
  const [isActive, setIsActive] = useState(false);
  const [time, setTime] = useState("05:00");
  const interval = useRef<NodeJS.Timer | null>(null);

  const startTimer = () => setIsActive(true);

  const stopTimer = () => {
    setIsActive(false);
    setTimer(FIVE_MINS_SECS);
  };

  useEffect(() => {
    if (isActive) {
      interval.current = setInterval(() => {
        setTimer((timer: number) => timer - 1);
      }, 1000);
    } else {
      clearInterval(interval.current!);
    }

    return () => clearInterval(interval.current!);
  }, [isActive, timer]);

  useEffect(() => {
    if (timer === 0) {
      // Ring the bell
      setTimer(FIVE_MINS_SECS);
    }

    setTime(convertToTime(timer));
  }, [timer]);

  return { isActive, time, startTimer, stopTimer };
};

export default useTimer;
