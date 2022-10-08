import Canvas from "../imgs/waldo-canvas.jpg";
import { getRelativeClickPosition } from "../utils/TargetingUtils.js";
import TargetingDisplay from "./TargetingDisplay";
import React, { useState } from "react";
import LargeLoading from "../imgs/large-loading.gif";
import DisplayBox from "./DisplayBox";
import MarkedLocations from "./MarkedLocations.js";

export default function GameCanvas() {
  const handleClick = (e) => {
    const nonTargetingClick = !(
      e.target.alt === "Waldo Canvas" ||
      e.target.alt === "Magnifying Glass" ||
      e.target.alt === "Marked Location"
    );

    if (nonTargetingClick) return;
    setCoordinates(null);
    const position = getRelativeClickPosition(e);
    setTimeout(() => {
      setCoordinates(position);
    }, 0);
  };

  const [coordinates, setCoordinates] = useState(null);
  const clearCoordinates = () => setCoordinates(null);

  return (
    <div className="flex relative z-0" onClick={handleClick} id="canvas">
      <img src={Canvas} alt="Waldo Canvas" />
      {coordinates && (
        <TargetingDisplay
          clearCoordinates={clearCoordinates}
          coordinates={coordinates}
        />
      )}
      <MarkedLocations />
    </div>
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
