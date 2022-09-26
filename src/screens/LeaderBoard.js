import ScreenContainer from "../components/ScreenContainer";
import DisplayBox from "../components/DisplayBox";
import Heading from "../components/Heading";
import PlayerRank from "../components/PlayerRank";

export default function LeaderBoard(props) {
  return (
    <ScreenContainer>
      <div className="flex h-full justify-center items-center">
        <DisplayBox className="p-6">
          <Heading>Leaderboard</Heading>
          <PlayerRank />
        </DisplayBox>
      </div>
    </ScreenContainer>
  );
}
