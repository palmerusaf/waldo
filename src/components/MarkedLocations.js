import styled from "styled-components";
import { useCharacterContext } from "../contexts/CharacterContext";

const Location = styled.img``;
export default function MarkedLocations() {
  const { foundStatusList, characterLocations } = useCharacterContext();
  return <Location alt="Marked Location" className="z-10"></Location>;
}
