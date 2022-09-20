export default function CharacterImg(props) {
  return (
    <img
      src={require("../imgs/characters/" + props.name + ".png")}
      alt={props.name}
    />
  );
}
