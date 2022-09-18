import Characters from "../components/Characters.js";
import CharacterBarItem from "../components/CharacterBarItem.js";
import TargetListItem from "../components/TargetListItem.js";
import GameCanvas from "../components/GameCanvas.js";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

export const CharacterContext = React.createContext();

export default function Game() {
  const [characterList, setCharacterList] = useState([
    { name: "waldo", isFound: false },
    { name: "winda", isFound: false },
    { name: "wizard", isFound: false },
    { name: "woof", isFound: false },
    { name: "odlaw", isFound: false },
  ]);

  const setCharacterFound = (pName) => {
    setCharacterList(
      characterList.map((char) => {
        return char.name === pName ? { ...char, isFound: true } : char;
      })
    );
  };

  const CharacterBar = (props) => (
    <Characters CharacterItem={CharacterBarItem} />
  );

  const TargetList = (props) => <Characters CharacterItem={TargetListItem} />;

  return (
    <div className="screen-container">
      <CharacterContext.Provider value={{ characterList, setCharacterFound }}>
        <CharacterBar />
        <GameCanvas />
        <TargetList />
      </CharacterContext.Provider>
    </div>
  );
}
