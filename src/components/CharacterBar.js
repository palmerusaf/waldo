import { useCharacterContext } from "../contexts/CharacterContext";
import CharacterImg from "./CharacterImg.js";
import FoundOverlay from "./FoundOverlay.js";
import DisplayBox from "./DisplayBox.js";
import Heading from "./Heading";
import SecondButton from "./SecondButton.js";
import { useState } from "react";

export default function CharacterBar() {
  const { characterList } = useCharacterContext();

  const [showCharacters, setShowCharacters] = useState(true);

  const Caption = (props) => (
    <DisplayBox className="bg-gray-400 min-w-fit p-0.5 py-0.5 -rotate-12 capitalize text-xl bottom-2 w-full absolute">
      <figcaption className="text-sm">{props.name}</figcaption>
    </DisplayBox>
  );

  const CharacterItem = ({ name, isFound }) => {
    if (!showCharacters) return;
    return (
      <li key={name} className="flex items-center justify-center relative p-1">
        <figure>
          <CharacterImg name={name} />
        </figure>
        <Caption name={name} />
        {isFound && <FoundOverlay />}
      </li>
    );
  };

  return (
    <DisplayBox className="my-3">
      <Heading className={"relative"}>Characters</Heading>
      <SecondButton
        onClick={() => setShowCharacters(!showCharacters)}
        className="absolute top-6 right-7"
      >
        {showCharacters ? "Hide" : "Show"}
      </SecondButton>

      <ul className="grid grid-cols-5 grid-rows-1 gap-3 mt-1 mx-3">
        {characterList.map(CharacterItem)}
      </ul>
    </DisplayBox>
  );
}
