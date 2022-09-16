import Canvas from "../imgs/waldo-canvas.jpg";
import CharacterBar from "../components/CharacterBar.js";

export default function Game(props) {
  return (
    <div className="screen-container">
      <CharacterBar />
      <img src={Canvas} alt="Waldo Canvas" />
    </div>
  );
}
