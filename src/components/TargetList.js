import { useCharacterContext } from "../contexts/CharacterContext";
import CharacterImg from "../components/CharacterImg.js";
import DisplayBox from "./DisplayBox";

export default function TargetList() {
  const { characterList, setCharacterFound } = useCharacterContext();

  function Caption(props) {
    return (
      <DisplayBox className="p-0.5 py-0.5 capitalize text-xl ml-0 bottom-3 w-full -rotate-12 absolute">
        <figcaption>{props.name}</figcaption>
      </DisplayBox>
    );
  }

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
          className="flex relative bg-gray-400 rounded-full"
        >
          <figure>
            <CharacterImg name={name} className="p-1" />
            <Caption name={name}></Caption>
          </figure>
        </li>
      )
    );
  };

  return (
    <ul className="grid grid-cols-5 max-h-full absolute gap-3">
      {characterList.map(TargetItem)}
    </ul>
  );
}
