import styled from "styled-components";
import TargetList from "./TargetList";
import MagGlass from "../imgs/mag-glass.png";

const TargetingContainer = styled.div`
  position: absolute;
  display: grid;
  grid-template-columns: 1.5fr 3fr;
  top: ${(props) => props.coordinates.y-5}%;
  left: ${(props) => props.coordinates.x-2.5}%;
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
