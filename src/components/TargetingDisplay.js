import styled from "styled-components";
import TargetList from "./TargetList";

const TargetingContainer = styled.div`
  position: absolute;
  height: 25%;
  width: 25%;
  top: ${(props) => props.x}%;
  left: ${(props) => props.y}%;
`;

export default function TargetingDisplay(props) {
  return (
    <TargetingContainer
      x={props.x}
      y={props.y}
    >
      <TargetList />
    </TargetingContainer>
  );
}
