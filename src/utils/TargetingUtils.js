export const getRelativeClickPosition = (click) => {
  const { clientX, clientY, target } = click;
  const { clientWidth, clientHeight } = target;
  let [x, y] = [
    (clientX - target.parentNode.offsetLeft) / target.clientWidth,
    (clientY - target.parentNode.offsetTop) / target.clientHeight,
  ];
  if (y > 1) {
    const newTarget = target.parentNode.parentNode;
    [x, y] = [
      (clientX - newTarget.parentNode.offsetLeft) / newTarget.clientWidth,
      (clientY - newTarget.parentNode.offsetTop) / newTarget.clientHeight,
    ];
  }
  return { x, y };
};
