import Canvas from "../imgs/waldo-canvas.jpg";
import { getRelativeClickPosition } from "../utils/TargetingUtils.js";
import TargetingDisplay from "./TargetingDisplay";
import React, { useState } from "react";
import LargeLoading from "../imgs/large-loading.gif";
import DisplayBox from "./DisplayBox";

export default function GameCanvas() {
  const handleClick = (e) => {
    const nonTargetingClick = !(
      e.target.alt === "Waldo Canvas" || e.target.alt === "Magnifying Glass"
    );

    if (nonTargetingClick) return;
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

export const CanvasLoading = () => {
  return (
    <DisplayBox className={"self-center p-3"}>
      <div className="flex animate-pulse w-full justify-center items-center font-mono">
        <span className="w-full text-center"> Loading...</span>
        <img
          className="h-12 ml-auto mr-2 -rotate-45"
          src={LargeLoading}
          alt="Waldo Loading Animation"
        />
      </div>
    </DisplayBox>
  );
};
