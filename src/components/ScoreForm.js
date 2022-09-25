import { useState } from "react";
import DisplayBox from "./DisplayBox";
import Heading from "./Heading";
import SecondButton from "./SecondButton";

export default function ScoreForm(props) {
  const [name, setName] = useState(null);
  return (
    <DisplayBox
      className={
        "p-5 py-5 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
      }
    >
      <Heading className="p-0 m-0">Congratulations!</Heading>
      <p>You have found all the characters.</p>
      <p>Please enter your name below to find out where you rank.</p>
      {!name && (
        <form className="flex justify-center gap-2">
          <label htmlFor="name" className="font-bold">
            Name:
          </label>
          <input
            id="name"
            type="text"
            className="rounded-full border-yellow-400 border-solid border-2 text-center"
          />
          <SecondButton
            onClick={(e) => {
              e.preventDefault();
              const inputName = document.getElementById("name");
              setName(inputName);
            }}
          >
            Submit
          </SecondButton>
        </form>
      )}
    </DisplayBox>
  );
}
