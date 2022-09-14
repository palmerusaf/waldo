import Canvas from '../imgs/waldo-canvas.jpg';
export default function Game(props) {
  return (
    <div className="screen-container">
      <img src={Canvas} alt="Waldo Canvas" />
    </div>
  );
}
