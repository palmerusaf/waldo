import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useCharacterContext } from "../contexts/CharacterContext";
import GreenCircle from "../imgs/green-circle.png";
import { getMarkerCoordinates } from "../utils/TargetingUtils";

const Location = styled.img`
  position: absolute;
  height: 5%;
  opacity: 0.9;
  top: ${(props) => props.coordinate.y - 2}%;
  left: ${(props) => props.coordinate.x + 0.3}%;
  @keyframes fall {
    0% {
      opacity: 0.6;
      transform: translateY(-25%);
    }
    50% {
      opacity: 1;
      transform: translateY(0);
    }
    100% {
      opacity: 0.6;
      transform: translateY(-25%);
    }
  }
  animation: fall 1000ms infinite;
`;
export default function MarkedLocations() {
  const { foundStatusList, characterLocations } = useCharacterContext();
  const [markerCoordinates, setMarkerCoordinates] = useState(null);

  useEffect(() => {
    const foundCharacters = foundStatusList
      .filter((char) => char.isFound)
      .map((char) => ({ name: char.name }));

    const coordinates = getMarkerCoordinates({
      foundCharacters,
      characterLocations,
    });
    setMarkerCoordinates(coordinates);
  }, [foundStatusList]);

  return (
    <>
      {markerCoordinates &&
        markerCoordinates.map((coordinate) => (
          <Location
            coordinate={coordinate}
            alt="Marked Location"
            src={GreenCircle}
            key={coordinate}
          />
        ))}
    </>
  );
}
