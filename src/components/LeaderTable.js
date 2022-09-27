import React, { useState, useEffect } from "react";
import MonoContent from "./MonoContent";
import LargeLoading from "../imgs/large-loading.gif";

export default function LeaderTable() {
  const [topTenList, setTopTenList] = useState(null);

  const mapListToRows = () => {
    const playerRow = (item, index) => (
      <tr className="grid grid-cols-3">
        <td>{index + 1}</td>
        <td>{item.name || "---"}</td>
        <td>{item.time || "---"}</td>
      </tr>
    );
    return topTenList.map(playerRow);
  };

  useEffect(() => {
    //TODO: fetch data
    //TODO: filter data
  }, []);

  return (
    <MonoContent>
      <table className="grid">
        <tr className="grid grid-cols-3">
          <th>Rank</th>
          <th>Name</th>
          <th>Time</th>
        </tr>
        {topTenList && mapListToRows()}
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
