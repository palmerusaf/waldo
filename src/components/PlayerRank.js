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
    <span className={"font-bold grid " + props.className}>
      {props.label}:
      <span className="font-normal overflow-hidden overflow-ellipsis ">
        {props.children}
      </span>
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
      <div
        className={
          "grid grid-cols-3 w-full pt-2 px-4 whitespace-nowrap md:text-xl "
        }
      >
        <RankItem label="Rank">
          {rank || (
            <div className="flex justify-center">
              <img
                className="h-5 justify-self-center self-center"
                src={SmallLoading}
                alt="Hat loading animation"
              />
            </div>
          )}
        </RankItem>
        <RankItem label="Name">{playerName}</RankItem>
        <RankItem label="Time">{timer}</RankItem>
      </div>
    </div>
  );
}
