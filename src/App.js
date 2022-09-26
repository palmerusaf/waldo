import ScreenContainer from "./components/ScreenContainer.js";
import Title from "./components/Title.js";
import Directions from "./components/Directions.js";

function App() {
  return (
    <ScreenContainer className="bg-gray-800">
      <Title />
      <Directions />
    </ScreenContainer>
  );
}

export default App;
