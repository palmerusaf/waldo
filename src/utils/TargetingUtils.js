export const getRelativeClickPosition = ({ clientX, clientY, target }) => {
  const { offsetLeft, offsetTop } = target;
  const relativeX = clientX - offsetLeft;
  const relativeY = clientY - offsetTop;
  return { relativeX, relativeY };
};
