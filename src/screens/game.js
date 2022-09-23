import React from "react";
import ScreenContainer from "../components/ScreenContainer";
import GameCanvas from "../components/GameCanvas.js";
import CharacterBar from "../components/CharacterBar.js";
import Timer from "../components/Timer";

export default function Game() {
  return (
    <ScreenContainer>
      <CharacterBar />
      <GameCanvas />
      <Timer />
    </ScreenContainer>
  );
}
