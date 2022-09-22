import styled from "styled-components";
import TargetList from "./TargetList";
import MagGlass from "../imgs/mag-glass.png";

const TargetingContainer = styled.div`
  position: absolute;
  display: grid;
  grid-template-columns: 1fr 3fr;
  top: ${(props) => props.x}%;
  left: ${(props) => props.y}%;
`;

export default function TargetingDisplay(props) {
  return (
    <TargetingContainer x={props.x} y={props.y} className="h-1/5 w-1/3 ">
      <img src={MagGlass} alt="Magnifying Glass" className="h-full" />
      <TargetList className="" />
    </TargetingContainer>
  );
}
