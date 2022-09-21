import React from "react";
import ScreenContainer from "../components/ScreenContainer";
import GameCanvas from "../components/GameCanvas.js";
import { CharacterProvider } from "../contexts/CharacterContext.js";
import CharacterBar from "../components/CharacterBar.js";
import TargetList from "../components/TargetList.js";

export default function Game() {
  return (
    <ScreenContainer>
      <CharacterProvider>
        <CharacterBar />
        <GameCanvas />
      </CharacterProvider>
    </ScreenContainer>
  );
}
