import React, { useState, useContext } from "react";

const GameCompleteContext = React.createContext();

export const useGameCompleteContext = () => useContext(GameCompleteContext);

export function GameCompleteProvider({ children }) {
  const [gameComplete, setGameComplete] = useState(false);

  return (
    <GameCompleteContext.Provider value={{ gameComplete, setGameComplete }}>
      {children}
    </GameCompleteContext.Provider>
  );
}
