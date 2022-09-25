import ScreenContainer from "./Components/ScreenContainer.js";
import Title from "./Components/Title.js";
import Directions from "./Components/Directions.js";

function App() {
  return (
    <ScreenContainer className="bg-gray-800">
      <Title />
      <Directions />
    </ScreenContainer>
  );
}

export default App;
