import { useCharacterContext } from "../contexts/CharacterContext";
import CharacterImg from "../components/CharacterImg.js";
import styled from "styled-components";

const LI = styled.li`
  background-color: rgba(103, 225, 225, 0.4);
  border-width: 1px;
  border-left-color: rgb(255, 255, 102);
  border-top-color: rgb(255, 255, 102);
  border-bottom-color: rgb(223, 194, 2);
  border-right-color: rgb(223, 194, 2);
`;

export default function TargetList({ className }) {
  const { characterList, setCharacterFound } = useCharacterContext();

  const TargetItem = ({ name, isFound }) => {
    const handleClick = () => {
      console.log("TODO check database for", name, "positioning.");
      setCharacterFound(name);
    };

    return (
      !isFound && (
        <LI
          onClick={handleClick}
          key={name}
          className="grid content-center border-solid borderyellow-400 border-2 m-px py-0.5 rounded-full"
        >
          <CharacterImg name={name} />
        </LI>
      )
    );
  };

  return (
    <ul className={"grid grid-cols-5 max-h-full " + className}>
      {characterList.map(TargetItem)}
    </ul>
  );
}
