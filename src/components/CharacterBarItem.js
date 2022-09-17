export default function CharacterBarItem(props) {
  const { charImg, isFound } = props;

  const GreenCheckMark = (
    <img src={require("../imgs/green-check-mark.png")} alt="green check mark" />
  );

  return (
    <li>
      {charImg}
      {isFound && GreenCheckMark}
    </li>
  );
}
