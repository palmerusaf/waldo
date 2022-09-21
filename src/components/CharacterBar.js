import { useCharacterContext } from "../contexts/CharacterContext";
import GreenCheckMark from "../components/GreenCheckMark.js";
import CharacterImg from "../components/CharacterImg.js";
import styled from "styled-components";

const GrayTransparent = styled.div`
  background: rgba(0, 0, 0, 0.3);
`;

export default function CharacterBar() {
  const { characterList } = useCharacterContext();

  const CharacterItem = ({ name, isFound }) => {
    return (
      <li
        key={name}
        className="flex items-center justify-center relative w-100 border-2 border-solid border-red-900"
      >
        <CharacterImg name={name} />
        {isFound && (
          <GrayTransparent className="absolute flex h-full w-full items-center">
            <GreenCheckMark />
          </GrayTransparent>
        )}
      </li>
    );
  };

  return (
    <div>
      <h1>Characters</h1>
      <ul className="grid grid-cols-5 grid-rows-1">
        {characterList.map(CharacterItem)}
      </ul>
    </div>
  );
}
