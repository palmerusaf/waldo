import React, { useState, useEffect } from "react";

export default function LeaderTable() {
  const [topTenList, setTopTenList] = useState(null);

  useEffect(() => {
    //TODO: fetch data
    //TODO: filter data
  }, []);

  return (
    <table>
      <tr>
        <th>Rank</th>
        <th>Name</th>
        <th>Time</th>
      </tr>
      {topTenList ? <div></div> : <div>spinning thing</div>}
    </table>
  );
}
