import React from "react";
import { CharacterContext } from "../screens/game";

export default function Characters(props) {
  const { CharacterItem } = props;
  const { characterList } = React.useContext(CharacterContext);

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
