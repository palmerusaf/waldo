export default function MonoContent({ children, className }) {
  return <div className={"text-xl font-mono " + className}>{children}</div>;
}
