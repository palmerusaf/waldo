import React from "react";
import { useCharacterContext } from "../contexts/CharacterContext";

export default function Characters(props) {
  const { CharacterItem } = props;
  const { characterList } = useCharacterContext();

  return (
    <ul>
      {characterList.map((char) => {
        const charImg = (
          <img
            src={require("../imgs/characters/" + char.name + ".png")}
            alt={char.name}
          />
        );
        return (
          <CharacterItem
            charImg={charImg}
            name={char.name}
            isFound={char.isFound}
            key={char.name}
            setCharacterFound={props.setCharacterFound || null}
          />
        );
      })}
    </ul>
  );
}
