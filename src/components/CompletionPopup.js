import Heading from "./Heading";
import DisplayBox from "./DisplayBox";
import ScoreForm from "./ScoreForm";
import PlayerRank from "./PlayerRank.js";
import PageButton from "./PageButton";
import { GrayTransparent } from "./FoundOverlay";
import { usePlayerNameContext } from "../contexts/PlayerNameContext.js";

export default function CompletionPopup() {
  const { playerName } = usePlayerNameContext();

  return (
    <GrayTransparent className="absolute w-full h-full grid justify-center items-center">
      <DisplayBox className="m:px-4 p-1 pb-7 pt-6">
        <Heading className="p-0 m-0">Congratulations!</Heading>
        <p>You have found all the characters.</p>
        <p>Please enter your name below to find out where you rank.</p>
        {!playerName ? (
          <ScoreForm className='pt-3' />
        ) : (
          <>
            <PlayerRank className="pb-2" />
            <PageButton page={"/leaderboard"}>View Leaderboard</PageButton>
          </>
        )}
      </DisplayBox>
    </GrayTransparent>
  );
}
