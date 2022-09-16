import Canvas from "../imgs/waldo-canvas.jpg";
import CharacterBar from "../components/CharacterBar.js";
import { Link } from "react-router-dom";

export default function Game(props) {
  return (
    <div className="screen-container">
      <CharacterBar />
      <img src={Canvas} alt="Waldo Canvas" />
      <Link to="/highscores">High Scores</Link>
    </div>
  );
}
