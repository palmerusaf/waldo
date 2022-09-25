import React, { useState } from "react";
import ScreenContainer from "../components/ScreenContainer";
import GameCanvas from "../components/GameCanvas.js";
import CharacterBar from "../components/CharacterBar.js";
import Timer from "../components/Timer";
import CompletionPopup from '../components/CompletionPopup.js';

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
