const formatAsInteger = (percent) => Math.floor(percent * 100);

export const isCharacterLocationCorrect = (
  { name, x, y },
  characterLocations
) => {
  return { name, x, y, characterLocations };
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
