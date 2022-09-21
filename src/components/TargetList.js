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
          <figure className="grid grid-cols-2 items-center justify-center">
            <CharacterImg name={name} className='max-h-10 bg-gray-400 px-1 rounded-xl text-center' />
            <figcaption className="capitalize bg-gray-400 px-1 rounded-xl text-center">{name}</figcaption>
          </figure>
        </li>
      )
    );
  };

  return <ul className="grid grid-rows-5 items-center max-h-full absolute">{characterList.map(TargetItem)}</ul>;
}
