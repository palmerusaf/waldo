import { useState } from "react";
import SecondButton from "./SecondButton";

export default function ScoreForm(props) {
  return (
    <form className="flex justify-center gap-2">
      <label htmlFor="name" className="font-bold">
        Name:
      </label>
      <input
        id="name"
        type="text"
        className="rounded-full border-yellow-400 border-solid border-2 text-center"
      />
      <SecondButton onClick={props.onClick}>Submit</SecondButton>
    </form>
  );
}
