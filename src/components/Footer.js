import GitHubLogo from "../imgs/github-logo.png";

export default function Footer(props) {
  const { link } = props;

  return (
    <footer className="bg-black text-white flex justify-center p-1">
      <a
        className="flex space-x-2"
        href={"https://github.com/palmerusaf/" + link}
        target="_blank"
        rel="noreferrer"
      >
        <p className="padding">GitHub Repo</p>
        <img className="h-6" src={GitHubLogo} alt="GitHub Logo" />
      </a>
    </footer>
  );
}
