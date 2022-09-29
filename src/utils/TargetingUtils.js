const formatAsInteger = (percent) => Math.floor(percent * 100);

export const isCharacterLocationCorrect = (
  { name, x, y },
  characterLocations
) => {
  const checkMatch = (item) => {
    const { minX, maxX, minY, maxY } = item;
    const checkRange = (value, min, max) => value >= min && value <= max;

    const nameMatches = item.name === name;
    const xInRange = checkRange(x, minX, maxX);
    const yInRange = checkRange(y, minY, maxY);
    return nameMatches && xInRange && yInRange;
  };
  return characterLocations.some(checkMatch);
};

export const getRelativeClickPosition = (click) => {
  const target = document.getElementById("canvas");
  const inTargetX = click.pageX - target.offsetLeft;
  const inTargetY = click.pageY - target.offsetTop;

  return {
    x: formatAsInteger(inTargetX / target.clientWidth),
    y: formatAsInteger(inTargetY / target.clientHeight),
  };
};
