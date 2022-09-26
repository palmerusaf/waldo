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
    <div className={"grid " + props.className}>
      <Heading>Your Stats</Heading>
      <div className={"grid grid-cols-3"}>
        <RankItem label="Rank">TODO</RankItem>
        <RankItem label="Name">{playerName}</RankItem>
        <RankItem label="Time">{timer}</RankItem>
      </div>
    </div>
  );
}
