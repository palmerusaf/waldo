import { useCharacterContext } from "../contexts/CharacterContext";
import CharacterImg from "./CharacterImg.js";
import FoundOverlay from "./FoundOverlay.js";
import DisplayBox from "./DisplayBox.js";
import Heading from "./Heading";
import button from "./Button";
import { useState } from "react";

export default function CharacterBar() {
  const { characterList } = useCharacterContext();

  const [showCharacters, setShowCharacters] = useState(true);

  const toggleCharacters = () => {
    setShowCharacters(!showCharacters);
  };

  const CharacterItem = ({ name, isFound }) => {
    if (!showCharacters) return;
    return (
      <li key={name} className="flex items-center justify-center relative p-1">
        <CharacterImg name={name} />
        {isFound && <FoundOverlay />}
      </li>
    );
  };

  return (
    <div className="my-3">
      <DisplayBox>
        <div className="relative">
          <Heading>Characters</Heading>
          <button
            onClick={toggleCharacters}
            className="bg-gray-700 px-2 rounded absolute top-1 right-3 text-gray-100 border border-yellow-400 hover:scale-105"
          >
            {showCharacters ? "Hide" : "Show"}
          </button>
        </div>
        <ul className="grid grid-cols-5 grid-rows-1 gap-3 mt-1 mx-3">
          {characterList.map(CharacterItem)}
        </ul>
      </DisplayBox>
    </div>
  );
}
