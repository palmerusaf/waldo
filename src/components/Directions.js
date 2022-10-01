import DisplayBox from "./DisplayBox.js";
import PageButton from "./PageButton.js";
import Heading from "./Heading";
import MonoContent from "./MonoContent";

export default function Directions() {
  return (
    <div className="self-center">
      <DisplayBox className="py-5">
        <Heading>Directions</Heading>
        <div className="p-4 pt-3 flex flex-col text-md md:text-xl gap-1">
          <p>Find all the characters in the picture.</p>
          <p>Then check the Leaderboard page to see where you rank at.</p>
        </div>
        <PageButton page="/game">Start Game</PageButton>
      </DisplayBox>
    </div>
  );
}
