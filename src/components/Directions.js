import DisplayBox from "../components/DisplayBox.js";
import PageButton from "../components/PageButton.js";

export default function Directions({ children }) {
  const content = (
    <p className="p-10 text-xl font-mono">
      Find all the characters in the picture, then check the high score page to
      see where you rank at.
    </p>
  );

  return (
    <DisplayBox heading="Directions" content={content}>
      <PageButton page="/game">Start Game</PageButton>
    </DisplayBox>
  );
}
