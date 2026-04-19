import { Container } from "./styles";
import reactIcon from "../../assets/react-icon.svg";
import linkedin from "../../assets/linkedin.svg";
import githubIcon from "../../assets/github.svg";

export function Footer() {
  return (
    <Container>
      <div className="left">
        <p>
          Built with <img src={reactIcon} alt="React" /> React
        </p>
      </div>

      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/gaurav-bomble-787287229/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="LinkedIn" />
        </a>

        <a
          href="https://github.com/Gauravtb2253"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
      </div>
    </Container>
  );
}