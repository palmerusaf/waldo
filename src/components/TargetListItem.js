export default function TargetListItem(props) {
  if (props.isFound) return;
  const { charImg, name } = props;
  return (
    <li>
      <figure>
        {charImg}
        <figcaption>{name}</figcaption>
      </figure>
    </li>
  );
}
