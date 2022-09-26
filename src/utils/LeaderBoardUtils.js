export const filterData = (data) => {
  if (data.length === 0) return data;
  data.sort((firstItem, secondItem) => firstItem.time - secondItem.time);
  if (data.length > 10) data = data.slice(0, 10);
  return data;
};

export const padData = (data) => {
  while (data.length < 10) data.push({ name: null, time: null });
  return data;
};
