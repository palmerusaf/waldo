export const getRelativeClickPosition = (click) => {
  const { clientX, clientY } = click;
  const target = document.getElementById("canvas");
  let [x, y] = [
    (clientX - target.offsetLeft) / target.clientWidth,
    (clientY - target.offsetTop) / target.clientHeight,
  ];
  return { x, y };
};
