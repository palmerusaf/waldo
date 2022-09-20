import ScreenContainer from "../components/ScreenContainer";
import Characters from "../components/Characters.js";
import CharacterBarItem from "../components/CharacterBarItem.js";
import TargetListItem from "../components/TargetListItem.js";
import GameCanvas from "../components/GameCanvas.js";
import React from "react";
import { CharacterProvider } from "../contexts/CharacterContext.js";

export default function Game() {
  const CharacterBar = () => <Characters CharacterItem={CharacterBarItem} />;

  const TargetList = () => <Characters CharacterItem={TargetListItem} />;

  return (
    <ScreenContainer>
      <CharacterProvider>
        <CharacterBar />
        <GameCanvas />
        <TargetList />
      </CharacterProvider>
    </ScreenContainer>
  );
}
