import React, { useState, useContext } from "react";

const TimerContext = React.createContext();

export const useTimerContext = () => useContext(TimerContext);

let intervalId = null;

export function TimerProvider({ children }) {
  const [timer, setTimer] = useState(0);

  const startTimer = () => {
    if (timer > 0) return;
    intervalId = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(intervalId);
    intervalId = null;
  };

  const resetTimer = () => {
    if (timer > 0) stopTimer();
    setTimer(0);
  };

  return (
    <TimerContext.Provider value={{ timer, startTimer, stopTimer, resetTimer }}>
      {children}
    </TimerContext.Provider>
  );
}
