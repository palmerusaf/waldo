import "../styles/footer.scss";
import GitHubLogo from "../imgs/github-logo.png";

export default function Footer(props) {
  const { color, link } = props;

  return (
    <footer className="footer" style={{ backgroundColor: `${color}` }}>
      <a
        href={"https://github.com/palmerusaf/" + link}
        target="_blank"
        className="footer__content"
        rel="noreferrer"
      >
        <p className="footer__text">GitHub Repo</p>
        <img className="footer__img" src={GitHubLogo} alt="GitHub Logo" />
      </a>
    </footer>
  );
}
