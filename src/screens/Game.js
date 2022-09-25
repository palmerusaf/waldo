import React, { useState, useEffect } from "react";
import ScreenContainer from "../Components/ScreenContainer";
import GameCanvas from "../Components/GameCanvas.js";
import Timer from "../Components/Timer";
import CharacterBar from "../Components/CharacterBar.js";
import CompletionPopup from "../Components/CompletionPopup.js";
import { useGameCompleteContext } from "../contexts/GameCompleteContext";
import { useCharacterContext } from "../contexts/CharacterContext";
import { useTimerContext } from "../contexts/TimerContext";

export default function Game() {
  const { gameComplete, setGameComplete } = useGameCompleteContext();
  const { characterList } = useCharacterContext();
  const { stopTimer } = useTimerContext();

  useEffect(() => {
    if (characterList.some((char) => !char.isFound)) return;
    stopTimer();
    setGameComplete(true);
  }, [characterList, setGameComplete, stopTimer]);

  return (
    <ScreenContainer>
      <CharacterBar />
      <GameCanvas />
      <Timer />
      {gameComplete && <CompletionPopup />}
    </ScreenContainer>
  );
}
