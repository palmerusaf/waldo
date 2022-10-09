import React, { useState } from "react";
import { useCharacterContext } from "../contexts/CharacterContext";
import { isCharacterLocationCorrect } from "../utils/TargetingUtils";
import CharacterImg from "../components/CharacterImg.js";
import styled from "styled-components";
import MagGlass from "../imgs/mag-glass.png";

const TargetingContainer = styled.div`
  position: absolute;
  display: grid;
  max-height: 33%;
  grid-template-columns: 1.5fr 3fr;
  top: ${(props) => props.coordinates.y - 5}%;
  left: ${(props) => props.coordinates.x - 2.5}%;
  @keyframes move {
    0% {
      opacity: 0;
      transform: translate(2.5%, 7.5%);
    }
    50% {
      opacity: 0.3;
    }
    100% {
      opacity: 1;
      transform: translate(0, 0);
    }
  }
  animation: move 500ms;
`;

const StyledListItem = styled.li`
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
  @keyframes shake {
    10%,
    90% {
      transform: translate3d(-1px, 0, 0);
    }

    20%,
    80% {
      transform: translate3d(2px, 0, 0);
    }

    30%,
    50%,
    70% {
      transform: translate3d(-4px, 0, 0);
    }

    40%,
    60% {
      transform: translate3d(4px, 0, 0);
    }
  }
  ${(props) => props.customStyle}
`;

export default function TargetingDisplay(props) {
  return (
    <TargetingContainer
      coordinates={props.coordinates}
      className="h-1/5 w-1/3 z-20 "
    >
      <img src={MagGlass} alt="Magnifying Glass" />
      <TargetList
        coordinates={props.coordinates}
        clearCoordinates={props.clearCoordinates}
      />
    </TargetingContainer>
  );
}

function TargetList(props) {
  const { className, coordinates, clearCoordinates } = props;
  const { foundStatusList, setCharacterFound, characterLocations } =
    useCharacterContext();

  return (
    <ul className={"grid grid-cols-4 max-h-full " + className}>
      {foundStatusList.map(TargetItem)}
    </ul>
  );

  function TargetItem({ name, isFound }) {
    const [customStyle, setCustomStyle] = useState("");

    const wrongSelectionStyle = `
                              border-color: red;
                              animation: popIn 300ms;
                              animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
                              animation-iteration-count: infinite;
                              transform: translate3d(0, 0, 0);
`;
    const rightSelectionStyle = `
    border: solid #00ff00 3px;
    `;

    function handleTargetItemClick() {
      const characterInfo = { name, x: coordinates.x, y: coordinates.y };

      if (isCharacterLocationCorrect(characterInfo, characterLocations)) {
        setCustomStyle(rightSelectionStyle);
        setTimeout(() => {
          setCharacterFound(name);
          clearCoordinates();
        }, 1000);
      } else {
        setCustomStyle(wrongSelectionStyle);
        setTimeout(() => {
          setCustomStyle("");
          clearCoordinates();
        }, 1000);
      }
    }

    return (
      !isFound && (
        <StyledListItem
          onClick={handleTargetItemClick}
          key={name}
          className="grid content-center border-solid border-2 m-px py-0.5 rounded-full"
          customStyle={customStyle}
        >
          <CharacterImg name={name} />
        </StyledListItem>
      )
    );
  }
}
