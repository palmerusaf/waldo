import React, { useState } from "react";
import SecondButton from "./SecondButton";
import { usePlayerNameContext } from "../contexts/PlayerNameContext";
import { useFirebaseContext } from "../contexts/FirebaseContext";
import { useTimerContext } from "../contexts/TimerContext";
import { isInputValid } from "../utils/FormUtils";
import ErrorBox from "./ErrorBox.js";

export default function ScoreForm(props) {
  const { className } = props;
  const { setPlayerName } = usePlayerNameContext();
  const { addRanking } = useFirebaseContext();
  const { timer } = useTimerContext();

  const [isSending, setIsSending] = useState(false);
  const [input, setInput] = useState("");

  const handleInput = (e) => setInput(e.target.value);

  return (
    <>
      {isSending ? (
        <span className="font-bold font-mono animate-pulse">
          Sending data...
        </span>
      ) : (
        <div className="grid gap-2">
          <form className={"flex justify-center gap-2 " + className}>
            <label htmlFor="name" className="font-bold">
              Name:
            </label>
            <input
              id="name"
              type="text"
              className="rounded-full border-yellow-400 border-solid border-2 text-center"
              onInput={handleInput}
              autoComplete="off"
              placeholder="Enter your name"
            />
            <SecondButton
              onClick={async (e) => {
                e.preventDefault();
                if (!isInputValid(input)) return;
                setIsSending(!isSending);
                await addRanking({ name: input, time: timer });
                setIsSending(!isSending);
                setPlayerName(input);
              }}
            >
              Submit
            </SecondButton>
          </form>
          {!isInputValid(input) && <ErrorBox input={input} />}
        </div>
      )}
    </>
  );
}
