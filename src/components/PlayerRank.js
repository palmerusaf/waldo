import React, { useState, useEffect } from "react";
import Heading from "./Heading";
import SmallLoading from "../imgs/small-loading.gif";
import { useTimerContext } from "../contexts/TimerContext";
import { usePlayerNameContext } from "../contexts/PlayerNameContext";
import { useFirebaseContext } from "../contexts/FirebaseContext";
import { filterData, getPlayerRank } from "../utils/LeaderBoardUtils";

export default function PlayerRank(props) {
  const { playerName } = usePlayerNameContext();
  const { timer } = useTimerContext();
  const { getRankings } = useFirebaseContext();

  const [rank, setRank] = useState(null);

  const RankItem = (props) => (
    <span className="font-bold flex justify-center gap-1">
      {props.label}: <span className="font-normal">{props.children}</span>
    </span>
  );

  useEffect(() => {
    getRankings().then((data) => {
      const filteredData = filterData(data);
      const playerData = { name: playerName, time: timer };
      setRank(getPlayerRank({ playerData, filteredData }));
    });
  }, []);

  return (
    <div className={"grid " + props.className}>
      <Heading>Your Stats</Heading>
      <div className={"grid grid-cols-3"}>
        <RankItem label="Rank">
          {rank || (
            <img
              className="h-5"
              src={SmallLoading}
              alt="Hat loading animation"
            />
          )}
        </RankItem>
        <RankItem label="Name">{playerName}</RankItem>
        <RankItem label="Time">{timer}</RankItem>
      </div>
    </div>
  );
}
