export default function PlayerRank(props) {
    const {name} = props;
  return (
    <div className="flex justify-center gap-2">
      <span className="font-bold">
        Rank: <span className="font-normal">{name}</span>
      </span>
      <span className="font-bold">
        Name: <span className="font-normal">{name}</span>
      </span>
      <span className="font-bold">
        Time: <span className="font-normal">{name}</span>
      </span>
    </div>
  );
}
