import React, { useState } from "react";
import SecondButton from "./SecondButton";
import Heading from "./Heading";
import DisplayBox from "./DisplayBox";
import ScoreForm from "./ScoreForm";
import PlayerRank from "./PlayerRank.js";
import PageButton from "./PageButton";

export default function CompletionPopup(props) {
  const [name, setName] = useState(null);
  return (
    <div className="absolute h-full w-full grid justify-center items-center">
      <DisplayBox className="px-2">
        <Heading className="p-0 m-0">Congratulations!</Heading>
        <p>You have found all the characters.</p>
        <p>Please enter your name below to find out where you rank.</p>
        {!name ? (
          <ScoreForm
            onClick={(e) => {
              e.preventDefault();
              const inputName = document.getElementById("name");
              setName(inputName.value);
            }}
          />
        ) : (
          <>
            <PlayerRank name={name} />
            <PageButton page={"/highscores"}>View High Scores</PageButton>
          </>
        )}
      </DisplayBox>
    </div>
  );
}
