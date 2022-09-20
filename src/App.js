import { Link } from "react-router-dom";
import ScreenContainer from "./components/ScreenContainer.js";
import Button from "./components/Button.js";
import Title from "./components/Title.js";
import Directions from "./components/Directions.js";

function App() {
  return (
    <ScreenContainer className="bg-gray-800">
      <Title></Title>
      <div className="bg-gray-500 p-3 mx-4 mt-3 text-center">
        <h2 className="font-bold">Directions</h2>
        <p>
          Find all the characters in the picture, then check the high score page
          to see where you rank at.
        </p>
        <Link to="/game">
          <Button className="m-10">Start Game</Button>
        </Link>
      </div>
    </ScreenContainer>
  );
}

export default App;
