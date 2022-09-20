import styled from "styled-components";
import Footer from "./footer";

const Wrap = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  min-height: 100vh;
`;

export default function FooterWrapper({ children }) {
  return (
    <Wrap>
      <div>{children}</div>
      <Footer link={"waldo"} />
    </Wrap>
  );
}
