import DisplayBox from "./DisplayBox.js";
import PageButton from "./PageButton.js";
import Heading from "./Heading";
import MonoContent from "./MonoContent";
import { useTimerContext } from "../contexts/TimerContext";

export default function Directions() {
  const { startTimer } = useTimerContext();
  return (
    <DisplayBox>
      <Heading>Directions</Heading>
      <div className="p-6">
        <MonoContent>
          Find all the characters in the picture, then check the high score page
          to see where you rank at.
        </MonoContent>
      </div>
      <PageButton onClick={startTimer} page="/game">
        Start Game
      </PageButton>
    </DisplayBox>
  );
}