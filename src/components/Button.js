export default function Button(props) {
  return <button className="rounded-md bg-blue-500 p-1 hover:scale-105 transition-all">{props.children}</button>;
}