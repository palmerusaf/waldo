import { useCharacterContext } from "../contexts/CharacterContext";
import { useFirebaseContext } from "../contexts/FirebaseContext";
import CharacterImg from "../components/CharacterImg.js";
import styled from "styled-components";
import MagGlass from "../imgs/mag-glass.png";

const TargetingContainer = styled.div`
  position: absolute;
  display: grid;
  grid-template-columns: 1.5fr 3fr;
  top: ${(props) => props.coordinates.y - 5}%;
  left: ${(props) => props.coordinates.x - 2.5}%;
`;

export default function TargetingDisplay(props) {
  return (
    <TargetingContainer
      coordinates={props.coordinates}
      className="h-1/5 w-1/3 "
    >
      <img src={MagGlass} alt="Magnifying Glass" className="h-full" />
      <TargetList />
    </TargetingContainer>
  );
}

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

function TargetList({ className }) {
  const { characterList, setCharacterFound } = useCharacterContext();
  const { getCharacterLocations } = useFirebaseContext();

  const TargetItem = ({ name, isFound }) => {
    const handleClick = async () => {
      console.log("TODO check database for", name, "positioning.");
      const characterLocations = await getCharacterLocations();
      console.log('characterLocations :>> ', characterLocations);
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
