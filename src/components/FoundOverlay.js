import GreenCheckMark from "./GreenCheckMark.js";
import styled from "styled-components";

const GrayTransparent = styled.div`
  background: rgba(0, 0, 0, 0.3);
`;

export default function FoundOverlay() {
  return (
    <GrayTransparent className="rounded-xl absolute flex h-full w-full items-center">
      <GreenCheckMark />
    </GrayTransparent>
  );
}
