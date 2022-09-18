export default function Characters(props) {
  const { characterList, CharacterItem } = props;

  return (
    <ul>
      {characterList.map((char) => {
        const charImg = (
          <img
            src={require("../imgs/characters/" + char.name + ".png")}
            alt={char}
          />
        );
        return (
          <CharacterItem
            charImg={charImg}
            name={char.name}
            isFound={char.isFound}
            key={char.name}
            updateCharacterList={props.updateCharacterList || null}
          />
        );
      })}
    </ul>
  );
}
