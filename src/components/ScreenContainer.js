export default function ScreenContainer(props) {
  const { children, className } = props;
  return (
    <div
      className={
        "relative flex flex-col w-full h-full bg-gray-800 " + className
      }
    >
      {children}
    </div>
  );
}
