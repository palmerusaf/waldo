import { useCharacterContext } from "../contexts/CharacterContext";
import CharacterImg from "../components/CharacterImg.js";

export default function TargetList() {
  const { characterList, setCharacterFound } = useCharacterContext();

  const TargetItem = ({ name, isFound }) => {
    const handleClick = () => {
      console.log("TODO check database for", name, "positioning.");
      setCharacterFound(name);
    };

    return (
      !isFound && (
        <li onClick={handleClick} key={name}>
          <figure>
            <CharacterImg name={name} />
            <figcaption>{name}</figcaption>
          </figure>
        </li>
      )
    );
  };

  return <ul className="flex">{characterList.map(TargetItem)}</ul>;
}
