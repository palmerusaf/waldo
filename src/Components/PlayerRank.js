import { useTimerContext } from "../contexts/TimerContext";

export default function PlayerRank(props) {
  const { name } = props;
  const { timer } = useTimerContext();

  const RankItem = (props) => (
    <span className="font-bold">
      {props.label}: <span className="font-normal">{props.children}</span>
    </span>
  );

  return (
    <div className={"flex justify-center gap-2 " +props.className}>
      <RankItem label="Name">{name}</RankItem>
      <RankItem label="Timer">{timer}</RankItem>
      <RankItem label="Rank">TODO getRank</RankItem>
    </div>
  );
}
