import { useTimerContext } from "../contexts/TimerContext";
import { usePlayerNameContext } from "../contexts/PlayerNameContext";
import Heading from "./Heading";

export default function PlayerRank(props) {
  const { playerName } = usePlayerNameContext();
  const { timer } = useTimerContext();

  const RankItem = (props) => (
    <span className="font-bold">
      {props.label}: <span className="font-normal">{props.children}</span>
    </span>
  );

  return (
    <div className="grid">
      <Heading>Your Stats</Heading>
      <div className={"flex justify-center gap-2 " + props.className}>
        <RankItem label="Name">{playerName}</RankItem>
        <RankItem label="Time">{timer}</RankItem>
        <RankItem label="Rank">TODO getRank</RankItem>
      </div>
    </div>
  );
}
