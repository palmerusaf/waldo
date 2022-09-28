import React, { useState } from "react";
import SecondButton from "./SecondButton";
import { usePlayerNameContext } from "../contexts/PlayerNameContext";
import { useFirebaseContext } from "../contexts/FirebaseContext";
import { useTimerContext } from "../contexts/TimerContext";

export default function ScoreForm(props) {
  const { className } = props;
  const { setPlayerName } = usePlayerNameContext();
  const { addRanking } = useFirebaseContext();
  const { timer } = useTimerContext();

  const [isSending, setIsSending] = useState(false);

  return (
    <>
      {isSending ? (
        <span className="font-bold font-mono animate-pulse">
          Sending data...
        </span>
      ) : (
        <form className={"flex justify-center gap-2 " + className}>
          <label htmlFor="name" className="font-bold">
            Name:
          </label>
          <input
            id="name"
            type="text"
            className="rounded-full border-yellow-400 border-solid border-2 text-center"
          />
          <SecondButton
            onClick={async (e) => {
              e.preventDefault();
              const inputName = document.getElementById("name");
              setIsSending(!isSending);
              await addRanking({ name: inputName.value, time: timer });
              setIsSending(!isSending);
              setPlayerName(inputName.value);
            }}
          >
            Submit
          </SecondButton>
        </form>
      )}
    </>
  );
}
