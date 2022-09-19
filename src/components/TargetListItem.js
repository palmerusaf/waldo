import { CharacterContext } from "../screens/game";
import { useCharacterContext } from "../contexts/CharacterContext";
import React from "react";

export default function TargetListItem(props) {
  const { setCharacterFound } = useCharacterContext();
  if (props.isFound) return;
  const { charImg, name } = props;
  return (
    <li>
      <figure
        onClick={() => {
          setCharacterFound(name);
        }}
      >
        {charImg}
        <figcaption>{name}</figcaption>
      </figure>
    </li>
  );
}
