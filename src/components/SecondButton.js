export default function SecondButton(props) {
  return (
    <button
      onClick={props.onClick}
      className={
        "bg-gray-700 px-2 rounded text-gray-100 border border-yellow-400 hover:scale-105 " +
          props.className || ""
      }
    >
      {props.children}
    </button>
  );
}
