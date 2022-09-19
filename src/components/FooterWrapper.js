import Footer from "./footer";

export default function FooterWrapper({ children }) {
  return (
    <div className="grid min-h-screen grid-rows-1fr-auto">
      <div>{children}</div>
      <Footer link={"waldo"} />
    </div>
  );
}
