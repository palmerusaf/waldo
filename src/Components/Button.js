import React from "react";

export default function Button(props) {
  return (
    <button
      onClick={props.onClick}
      className="rounded-md bg-blue-500 p-1 hover:scale-105 transition-all shadow-md px-2 font-semibold border-solid border-teal-900 border-2"
    >
      {props.children}
    </button>
  );
}
