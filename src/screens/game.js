import Characters from "../components/Characters.js";
import CharacterBarItem from "../components/CharacterBarItem.js";
import TargetListItem from "../components/TargetListItem.js";
import GameCanvas from "../components/GameCanvas.js";
import React from "react";
import { CharacterProvider } from "../contexts/CharacterContext.js";

export default function Game() {
  const CharacterBar = (props) => (
    <Characters CharacterItem={CharacterBarItem} />
  );

  const TargetList = (props) => <Characters CharacterItem={TargetListItem} />;

  return (
    <div className="">
      <CharacterProvider>
        <CharacterBar />
        <GameCanvas />
        <TargetList />
      </CharacterProvider>
    </div>
  );
}
