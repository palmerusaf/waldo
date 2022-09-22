import Canvas from "../imgs/waldo-canvas.jpg";
import { getRelativeClickPosition } from "../utils/TargetingUtils.js";
import TargetingDisplay from "./TargetingDisplay";
import React, { useState } from "react";

export default function GameCanvas() {
  const handleClick = (click) => {
    const { x, y } = getRelativeClickPosition(click);
    setCoordinates({ x, y });
  };

  const [isFocused, setIsFocused] = useState(false);

  const toggleIsFocused = () => {
    setIsFocused(!isFocused);
  };

  const [coordinates, setCoordinates] = useState({ x: null, y: null });

  return (
    <>
      <button
        className="flex relative"
        onFocus={toggleIsFocused}
        onBlur={toggleIsFocused}
        onClick={handleClick}
      >
        <img src={Canvas} alt="Waldo Canvas" />
        {isFocused && <TargetingDisplay />}
      </button>
      <div className="text-white">x: {coordinates.x}</div>
      <div className="text-white">y: {coordinates.y}</div>
    </>
  );
}
