import React from "react";
import { useTimerContext } from "../contexts/TimerContext";
import DisplayBox from "./DisplayBox";

export default function Timer() {
  const { timer } = useTimerContext();
  return (
    <DisplayBox className={"self-center mt-3 py-0 px-2 font-bold font-mono"}>
      TIMER: {timer}
    </DisplayBox>
  );
}
