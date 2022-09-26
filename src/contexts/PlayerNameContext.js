import React, { useState, useContext } from "react";

const PlayerNameContext = React.createContext();

export const usePlayerNameContext = () => useContext(PlayerNameContext);

export function PlayerNameProvider({ children }) {
  const [playerName, setPlayerName] = useState(null);

  return (
    <PlayerNameContext.Provider value={{ playerName, setPlayerName }}>
      {children}
    </PlayerNameContext.Provider>
  );
}
