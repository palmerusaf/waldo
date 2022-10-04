export const filterData = (data) => {
  if (data.length === 0) return data;
  const sortedData = [...data].sort(
    (firstItem, secondItem) => firstItem.time - secondItem.time
  );
  return sortedData;
};

export const trimData = (data) => {
  if (data.length > 10) data = data.slice(0, 10);
  return data;
};

export const padData = (data) => {
  while (data.length < 10) data.push({ name: null, time: null });
  return data;
};

export const getPlayerRank = ({ playerData, filteredData }) =>
  filteredData.findIndex(
    ({ name, time }) => name === playerData.name && time === playerData.time
  ) + 1;
