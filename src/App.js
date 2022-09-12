import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <h1>Where's Waldo</h1>
      <h2>Directions</h2>
      <p>
        Find all the characters in the picture, then check the high score page
        to see where you rank up.
      </p>
      <ul>
        <li>
          <Link to="/game">Start Game</Link>
        </li>
        <li>
          <Link to="/highscores">High Scores</Link>
        </li>
      </ul>
    </>
  );
}

export default App;
