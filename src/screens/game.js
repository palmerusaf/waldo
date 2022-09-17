import Characters from "../components/Characters.js";
import CharacterBarItem from "../components/CharacterBarItem.js";
import TargetListItem from "../components/TargetListItem.js";
import GameCanvas from "../components/GameCanvas.js";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

export default function Game() {
  const [characterList, setCharacterList] = useState([
    { name: "waldo", isFound: false },
    { name: "winda", isFound: false },
    { name: "wizard", isFound: false },
    { name: "woof", isFound: false },
    { name: "odlaw", isFound: false },
  ]);

  const updateCharacterList = (name) => {
    console.log("name :>> ", name);
  };

  const CharacterBar = (props) => (
    <Characters
      characterList={characterList}
      CharacterItem={CharacterBarItem}
    />
  );

  const TargetList = (props) => (
    <Characters characterList={characterList} CharacterItem={TargetListItem} />
  );

  return (
    <div className="screen-container">
      <CharacterBar />
      <GameCanvas />
      <TargetList />
      <Link to="/highscores">High Scores</Link>
    </div>
  );
}
