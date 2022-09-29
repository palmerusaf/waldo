import React, { useEffect } from "react";
import ScreenContainer from "../components/ScreenContainer";
import GameCanvas, { CanvasLoading } from "../components/GameCanvas.js";
import Timer from "../components/Timer";
import CharacterBar from "../components/CharacterBar.js";
import CompletionPopup from "../components/CompletionPopup.js";
import { useGameCompleteContext } from "../contexts/GameCompleteContext";
import { useCharacterContext } from "../contexts/CharacterContext";
import { useTimerContext } from "../contexts/TimerContext";
import { useFirebaseContext } from "../contexts/FirebaseContext";

export default function Game() {
  const { gameComplete, setGameComplete } = useGameCompleteContext();
  const { characterList, setCharacterLocations, characterLocations } =
    useCharacterContext();
  const { startTimer, stopTimer } = useTimerContext();
  const { getCharacterLocations } = useFirebaseContext();

  useEffect(() => {
    if (characterList.some((char) => !char.isFound)) return;
    stopTimer();
    setGameComplete(true);
  }, [characterList]);

  useEffect(() => {
    getCharacterLocations().then((locations) => {
      setCharacterLocations(locations);
      startTimer();
    });
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
