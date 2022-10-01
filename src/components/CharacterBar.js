import { useCharacterContext } from "../contexts/CharacterContext";
import CharacterImg from "./CharacterImg.js";
import FoundOverlay from "./FoundOverlay.js";
import DisplayBox from "./DisplayBox.js";
import Heading from "./Heading";
import SecondButton from "./SecondButton.js";
import { useState } from "react";
import styled from "styled-components";

export default function CharacterBar() {
  const { foundStatusList } = useCharacterContext();

  const [showCharacters, setShowCharacters] = useState(true);

  const Caption = (props) => (
    <DisplayBox className="bg-gray-400 min-w-fit p-0.5 py-0.5 -rotate-12 capitalize text-xl bottom-2 w-full absolute">
      <figcaption className="text-sm">{props.name}</figcaption>
    </DisplayBox>
  );

  const CharacterItem = ({ name, isFound }) => {
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
    <DisplayBox className="my-3 w-5/6 relative self-center">
      <Heading className="">Characters</Heading>
      <SecondButton
        onClick={() => setShowCharacters(!showCharacters)}
        className="absolute top-2 right-5"
      >
        {showCharacters ? "Hide" : "Show"}
      </SecondButton>
      {showCharacters && (
        <Characters className="grid grid-cols-4 grid-rows-1 gap-3 mt-1 mx-3">
          {foundStatusList.map(CharacterItem)}
        </Characters>
      )}
    </DisplayBox>
  );
}

const Characters = styled.ul`
  @keyframes expand {
    from {
      transform: scale(0);
      margin-top: -43%;
    }
    to {
      transform: scale(1);
    }
  }
  animation: expand 1000ms ;
`;
