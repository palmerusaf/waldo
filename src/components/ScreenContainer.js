export default function ScreenContainer(props) {
  const { children } = props;
  const inheritedClassNames = props.className || "";
  return (
    <div className={"flex flex-col w-full h-full" + inheritedClassNames}>
      {children}
    </div>
  );
}
