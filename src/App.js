import { Link } from "react-router-dom";
import ScreenContainer from "./components/ScreenContainer.js";
import Button from "./components/Button.js";
import Title from "./components/Title.js";
import Directions from "./components/Directions.js";

function App() {
  return (
    <ScreenContainer className="bg-gray-800">
      <Title></Title>
      <Directions>
        <Link to="/game">
          <Button className="m-10">Start Game</Button>
        </Link>
      </Directions>
    </ScreenContainer>
  );
}

export default App;
