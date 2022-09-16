import CharacterBar from "../components/CharacterBar.js";
import GameCanvas from "../components/GameCanvas.js";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

export default function Game() {
  const [charStatus, setCharStatus] = useState([
    { name: "waldo", found: false },
    { name: "winda", found: false },
    { name: "wizard", found: false },
    { name: "woof", found: false },
    { name: "odlaw", found: false },
  ]);

  return (
    <div className="screen-container">
      <CharacterBar />
      <GameCanvas />
      <Link to="/highscores">High Scores</Link>
    </div>
  );
}
