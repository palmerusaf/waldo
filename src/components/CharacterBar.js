import { useCharacterContext } from "../contexts/CharacterContext";
import GreenCheckMark from "./GreenCheckMark.js";
import CharacterImg from "./CharacterImg.js";
import DisplayBox from "./DisplayBox.js";
import styled from "styled-components";

const GrayTransparent = styled.div`
  background: rgba(0, 0, 0, 0.3);
`;

export default function CharacterBar() {
  const { characterList } = useCharacterContext();

  const CharacterItem = ({ name, isFound }) => {
    return (
      <li key={name} className="flex items-center justify-center relative">
        <CharacterImg name={name} />
        {isFound && (
          <GrayTransparent className="rounded-xl absolute flex h-full w-full items-center">
            <GreenCheckMark />
          </GrayTransparent>
        )}
      </li>
    );
  };

  const content = (
    <ul className="grid grid-cols-5 grid-rows-1 gap-3 mt-1">
      {characterList.map(CharacterItem)}
    </ul>
  );

  return <DisplayBox heading="Characters" content={content}></DisplayBox>;
}
