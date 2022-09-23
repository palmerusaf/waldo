import React, { useState, useContext } from "react";

const TimerContext = React.createContext();

export const useTimerContext = () => useContext(TimerContext);

let intervalId = null;
let timerRunning = false;

export function TimerProvider({ children }) {
  const [timer, setTimer] = useState(0);

  const startTimer = () => {
    if (timerRunning) return;
    intervalId = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
    timerRunning = true;
  };

  const stopTimer = () => {
    clearInterval(intervalId);
    intervalId = null;
    timerRunning = false;
  };

  const resetTimer = () => {
    if (timerRunning) stopTimer();
    setTimer(0);
  };

  return (
    <TimerContext.Provider value={{ timer, startTimer, stopTimer, resetTimer }}>
      {children}
    </TimerContext.Provider>
  );
}
