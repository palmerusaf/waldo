import Canvas from "../imgs/waldo-canvas.jpg";
import { getRelativeClickPosition } from "../utils/TargetingUtils.js";
import TargetingDisplay from "./TargetingDisplay";
import React, { useState } from "react";

export default function GameCanvas() {
  const handleClick = (e) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    const position = getRelativeClickPosition(e);
    setCoordinates(position);
  };

  const [isFocused, setIsFocused] = useState(false);

  const toggleIsFocused = () => {
    setIsFocused(!isFocused);
  };

  const [coordinates, setCoordinates] = useState({ x: null, y: null });

  return (
    <button
      className="flex relative"
      onFocus={toggleIsFocused}
      onBlur={toggleIsFocused}
      onClick={handleClick}
      id="canvas"
    >
      <img src={Canvas} alt="Waldo Canvas" />
      {isFocused && <TargetingDisplay coordinates={coordinates} />}
    </button>
  );
}
