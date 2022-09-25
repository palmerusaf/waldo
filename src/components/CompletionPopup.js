import React, { useState } from "react";
import SecondButton from "./SecondButton";
import Heading from "./Heading";
import DisplayBox from "./DisplayBox";

export default function CompletionPopup(props) {
  const [name, setName] = useState(null);
  return (
    <div className="absolute h-full w-full grid justify-center items-center">
      <DisplayBox className='px-2'>
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
    </div>
  );
}
