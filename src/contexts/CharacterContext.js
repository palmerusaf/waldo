import React, { useState, useContext } from "react";

const CharacterContext = React.createContext();

export const useCharacterContext = () => useContext(CharacterContext);

export function CharacterProvider({ children }) {
  const [characterList, setCharacterList] = useState([
    { name: "waldo", isFound: false },
    { name: "winda", isFound: false },
    { name: "wizard", isFound: false },
    { name: "odlaw", isFound: false },
  ]);

  const setCharacterFound = (pName) => {
    setCharacterList(
      characterList.map((char) => {
        return char.name === pName ? { ...char, isFound: true } : char;
      })
    );
  };

  return (
    <CharacterContext.Provider value={{ characterList, setCharacterFound }}>
      {children}
    </CharacterContext.Provider>
  );
}
