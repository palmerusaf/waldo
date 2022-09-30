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

export const getMarkerCoordinates = ({
  foundCharacters,
  characterLocations,
}) => {
  const getCoordinate = ({ name }) => {
    const location = characterLocations.find((item) => item.name === name);
    const { minX, minY, maxX, maxY } = location;

    const getCenter = (min, max) => Math.floor((min + max) / 2);
    
    const centerX = getCenter(minX, maxX);
    const centerY = getCenter(minY, maxY);

    return { x: centerX, y: centerY };
  };

  return foundCharacters.map(getCoordinate);
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
