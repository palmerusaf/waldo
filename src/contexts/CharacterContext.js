import React, { useState, useContext } from "react";

const CharacterContext = React.createContext();

export const useCharacterContext = () => useContext(CharacterContext);

export function CharacterProvider({ children }) {
  const [foundStatusList, setFoundStatusList] = useState([
    { name: "waldo", isFound: false },
    { name: "winda", isFound: false },
    { name: "wizard", isFound: false },
    { name: "odlaw", isFound: false },
  ]);

  const [characterLocations, setCharacterLocations] = useState();

  const setCharacterFound = (pName) => {
    setFoundStatusList(
      foundStatusList.map((char) => {
        return char.name === pName ? { ...char, isFound: true } : char;
      })
    );
  };

  return (
    <CharacterContext.Provider
      value={{
        foundStatusList,
        setCharacterFound,
        characterLocations,
        setCharacterLocations,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
}
