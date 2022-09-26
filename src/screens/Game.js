import React, { useState, useEffect } from "react";
import ScreenContainer from "../components/ScreenContainer";
import GameCanvas from "../components/GameCanvas.js";
import Timer from "../components/Timer";
import CharacterBar from "../components/CharacterBar.js";
import CompletionPopup from "../components/CompletionPopup.js";
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
