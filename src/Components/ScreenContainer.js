export default function ScreenContainer(props) {
  const { children } = props;
  const backGround = "bg-gray-800";
  return (
    <div className={"flex flex-col w-full h-full " + backGround}>
      {children}
    </div>
  );
}
