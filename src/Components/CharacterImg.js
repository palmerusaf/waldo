export default function CharacterImg(props) {
  return (
    <img
      className={props.className}
      src={require("../imgs/characters/" + props.name + ".png")}
      alt={props.name}
    />
  );
}
