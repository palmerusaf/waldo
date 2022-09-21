import Canvas from "../imgs/waldo-canvas.jpg";
import { getRelativeClickPosition } from "../utils/TargetingUtils.js";
import TargetList from "./TargetList";

export default function GameCanvas() {
  const handleClick = (click) => {
    console.log(getRelativeClickPosition(click));
  };

  return (
    <div className="flex relative" onClick={handleClick}>
      <img onClick={handleClick} src={Canvas} alt="Waldo Canvas" />
      <TargetList></TargetList>
    </div>
  );
}
