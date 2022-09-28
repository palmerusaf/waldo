import React, { useState, useEffect } from "react";
import MonoContent from "./MonoContent";
import LargeLoading from "../imgs/large-loading.gif";
import { useFirebaseContext } from "../contexts/FirebaseContext";
import { filterData, padData, trimData } from "../utils/LeaderBoardUtils";

export default function LeaderTable() {
  const [topTenList, setTopTenList] = useState(null);
  const { getRankings } = useFirebaseContext();

  const mapListToRows = () => {
    const playerRow = (item, index) => (
      <tr className="grid grid-cols-3" key={index}>
        <td>{index + 1}</td>
        <td>{item.name || "---"}</td>
        <td>{item.time || "---"}</td>
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
