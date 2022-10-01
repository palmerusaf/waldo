import ScreenContainer from "./components/ScreenContainer.js";
import Title from "./components/Title.js";
import Directions from "./components/Directions.js";

function App() {
  return (
    <ScreenContainer className="content-center md:items-center justify-center px-4">
      <Title />
      <Directions />
    </ScreenContainer>
  );
}

export default App;
