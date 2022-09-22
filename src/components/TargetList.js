import { useCharacterContext } from "../contexts/CharacterContext";
import CharacterImg from "../components/CharacterImg.js";

export default function TargetList({ className }) {
  const { characterList, setCharacterFound } = useCharacterContext();

  const TargetItem = ({ name, isFound }) => {
    const handleClick = () => {
      console.log("TODO check database for", name, "positioning.");
      setCharacterFound(name);
    };

    return (
      !isFound && (
        <li
          onClick={handleClick}
          key={name}
          className="grid content-center border-solid border-red-600 border-2 m-px bg-gray-400 py-0.5 rounded-full"
        >
          <CharacterImg name={name} />
        </li>
      )
    );
  };

  return (
    <ul className={"grid grid-cols-5 max-h-full " + className}>
      {characterList.map(TargetItem)}
    </ul>
  );
}
