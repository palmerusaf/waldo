import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <h1>main screen</h1>
      <Link to="/game">Game Screen</Link>
      <br />
      <Link to="/highscores">High scores</Link>
    </>
  );
}

export default App;
