import React, { useState, useEffect } from "react";
import ScreenContainer from "../components/ScreenContainer";
import GameCanvas, { CanvasLoading } from "../components/GameCanvas.js";
import Timer from "../components/Timer";
import CharacterBar from "../components/CharacterBar.js";
import CompletionPopup from "../components/CompletionPopup.js";
import { useCharacterContext } from "../contexts/CharacterContext";
import { useTimerContext } from "../contexts/TimerContext";
import { useFirebaseContext } from "../contexts/FirebaseContext";

export default function Game() {
  const [gameComplete, setGameComplete] = useState(false);
  const { foundStatusList, setCharacterLocations, characterLocations } =
    useCharacterContext();
  const { startTimer, stopTimer } = useTimerContext();
  const { getCharacterLocations } = useFirebaseContext();

  useEffect(() => {
    if (foundStatusList.some((char) => !char.isFound)) return;
    stopTimer();
    setGameComplete(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [foundStatusList]);

  useEffect(() => {
    getCharacterLocations().then((locations) => {
      setCharacterLocations(locations);
      startTimer();
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ScreenContainer>
      <CharacterBar />
      {characterLocations ? <GameCanvas /> : <CanvasLoading />}
      <Timer />
      {gameComplete && <CompletionPopup />}
    </ScreenContainer>
  );
}
