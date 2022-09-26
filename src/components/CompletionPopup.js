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
      <DisplayBox className="px-2 py-5">
        <Heading className="p-0 m-0">Congratulations!</Heading>
        <p>You have found all the characters.</p>
        <p>Please enter your name below to find out where you rank.</p>
        {!playerName ? (
          <ScoreForm />
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
