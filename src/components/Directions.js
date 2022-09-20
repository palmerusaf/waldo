export default function Directions(props) {
  return (
    <div className="bg-gray-500 p-3 py-5 mx-4 mt-2 rounded-2xl border-solid border-red-600 border-4 text-center">
      <h2 className="font-bold text-2xl">Directions</h2>
      <p className="p-10 text-xl font-mono">
        Find all the characters in the picture, then check the high score page
        to see where you rank at.
      </p>
      {props.children}
    </div>
  );
}
