export default function TargetListItem(props) {
  if (props.isFound) return;
  const { charImg, name, updateCharacterList } = props;
  return (
    <li>
      <figure
        onClick={() => {
          updateCharacterList(name);
        }}
      >
        {charImg}
        <figcaption>{name}</figcaption>
      </figure>
    </li>
  );
}
