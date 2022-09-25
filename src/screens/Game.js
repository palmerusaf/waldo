import React, { useState } from "react";
import ScreenContainer from "../Components/ScreenContainer";
import GameCanvas from "../Components/GameCanvas.js";
import CharacterBar from "../Components/CharacterBar.js";
import Timer from "../Components/Timer";
import CompletionPopup from "../Components/CompletionPopup.js";

export default function Game() {
  const [gameComplete, setGameComplete] = useState(true);
  return (
    <ScreenContainer>
      <CharacterBar />
      <GameCanvas />
      <Timer />
      {gameComplete && <CompletionPopup />}
    </ScreenContainer>
  );
}
