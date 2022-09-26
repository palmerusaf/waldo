import { useCharacterContext } from "../contexts/CharacterContext";
import CharacterImg from "../components/CharacterImg.js";
import styled from "styled-components";

const LI = styled.li`
  background-color: rgba(103, 225, 225, 0.4);
  border-width: 2px;
  border-color: #ffff66 #dfc202 #dfc202 #ffff66;
  @keyframes popIn {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }
  animation: popIn 300ms;
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
    <ul className={"grid grid-cols-4 max-h-full " + className}>
      {characterList.map(TargetItem)}
    </ul>
  );
}
