import Canvas from "../imgs/waldo-canvas.jpg";
import { getRelativeClickPosition } from "../utils/TargetingUtils.js";
import TargetingDisplay from "./TargetingDisplay";

export default function GameCanvas() {
  const handleClick = (click) => {
    console.log(getRelativeClickPosition(click));
  };

  return (
    <div className="flex relative" onClick={handleClick}>
      <img onClick={handleClick} src={Canvas} alt="Waldo Canvas" />
      <TargetingDisplay></TargetingDisplay>
    </div>
  );
}
