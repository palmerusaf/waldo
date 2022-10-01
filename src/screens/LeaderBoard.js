import React, { useState, useEffect } from "react";

import ScreenContainer from "../components/ScreenContainer";
import DisplayBox from "../components/DisplayBox";
import Heading from "../components/Heading";
import PlayerRank from "../components/PlayerRank";
import MonoContent from "../components/MonoContent";

import { useFirebaseContext } from "../contexts/FirebaseContext";
import { filterData, padData, trimData } from "../utils/LeaderBoardUtils";
import LargeLoading from "../imgs/large-loading.gif";

export default function LeaderBoard() {
  return (
    <ScreenContainer>
      <div className="flex h-full justify-center items-center">
        <DisplayBox className="py-7">
          <Heading>Leaderboard</Heading>
          <LeaderTable />
          <PlayerRank />
        </DisplayBox>
      </div>
    </ScreenContainer>
  );
}

function LeaderTable() {
  const [topTenList, setTopTenList] = useState(null);
  const { getRankings } = useFirebaseContext();

  const mapListToRows = () => {
    const playerRow = (item, index) => (
      <tr className="grid grid-cols-3" key={index}>
        <td>{index + 1}</td>
        <td className="overflow-hidden text-ellipsis">{item.name || "---"}</td>
        <td>{item.time !== null ? item.time : "---"}</td>
      </tr>
    );
    return topTenList.map(playerRow);
  };

  useEffect(() => {
    getRankings().then((data) => {
      const filteredData = filterData(data);
      const paddedData = padData(filteredData);
      const trimmedData = trimData(paddedData);
      setTopTenList(trimmedData);
    });
  }, []);

  return (
    <MonoContent>
      <table className="grid text-xl font-mono">
        <thead>
          <tr className="grid grid-cols-3">
            <th>Rank</th>
            <th>Name</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>{topTenList && mapListToRows()}</tbody>
      </table>
      {!topTenList && (
        <div className="flex">
          Loading...
          <img
            className="h-40 ml-auto mr-2 -rotate-45"
            src={LargeLoading}
            alt="Waldo Loading Animation"
          />
        </div>
      )}
    </MonoContent>
  );
}
