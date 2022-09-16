import CharacterBar from "../components/CharacterBar.js";
import GameCanvas from "../components/GameCanvas.js";
import { Link } from "react-router-dom";

export default function Game() {
  return (
    <div className="screen-container">
      <CharacterBar />
      <GameCanvas />
      <Link to="/highscores">High Scores</Link>
    </div>
  );
}
