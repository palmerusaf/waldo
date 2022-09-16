export default function Characters(props) {
  const characterList = ["waldo", "winda", "wizard", "woof", "odlaw"];

  return (
    <ul>
      {characterList.map((char) => {
        return (
          <li onClick={props.handleClick} key={char}>
            <img
              src={require("../imgs/characters/" + char + ".png")}
              alt={char}
            />
          </li>
        );
      })}
    </ul>
  );
}
