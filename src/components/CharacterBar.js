import { useCharacterContext } from "../contexts/CharacterContext";
import GreenCheckMark from "../components/GreenCheckMark.js";
import CharacterImg from "../components/CharacterImg.js";

export default function CharacterBar() {
  const { characterList } = useCharacterContext();

  const CharacterItem = ({ name, isFound }) => {
    return (
      <li key={name}>
        <CharacterImg name={name} />
        {isFound && <GreenCheckMark />}
      </li>
    );
  };

  return (
    <ul className="flex">
      {characterList.map(CharacterItem)}
    </ul>
  );
}
