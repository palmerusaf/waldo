const formatAsInteger = (percent) => Math.floor(percent * 100);

export const getRelativeClickPosition = (click) => {
  const target = document.getElementById("canvas");
  const inTargetX = click.clientX - target.offsetLeft;
  const inTargetY = click.clientY - target.offsetTop;

  return {
    x: formatAsInteger(inTargetX / target.clientWidth),
    y: formatAsInteger(inTargetY / target.clientHeight),
  };
};
