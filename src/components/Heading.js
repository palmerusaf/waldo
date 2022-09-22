export default function Heading({ children, className }) {
  return <h2 className={"font-bold text-2xl " + className}>{children}</h2>;
}
