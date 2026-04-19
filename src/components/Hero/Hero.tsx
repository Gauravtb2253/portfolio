import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import Illustration from "../../assets/portfolio-devops.jpg";
import linkedin from "../../assets/linkedin.svg";
import githubIcon from "../../assets/github.svg";
import Hello from "../../assets/Hello.gif";

export function Hero() {
  return (
    <Container id="home">
      <div className="hero-text">

        <ScrollAnimation animateIn="fadeInUp">
          <p className="hello">
            Hello <img src={Hello} alt="hello" /> I'm a
          </p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp" delay={200}>
          <h1>
            DevOps Engineer<br />
            <span>Cloud • Automation • CI/CD</span>
          </h1>
        </ScrollAnimation>


        {/* SOCIAL */}
        <ScrollAnimation animateIn="fadeInUp" delay={1000}>
          <div className="social-wrapper">
            <p>Find me on</p>

            <div className="social-media">
              <a href="https://www.linkedin.com/in/gaurav-bomble-787287229/" target="_blank" rel="noreferrer">
                <img src={linkedin} alt="LinkedIn" />
              </a>

              <a href="https://github.com/Gauravtb2253" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="GitHub" />
              </a>
            </div>
          </div>
        </ScrollAnimation>

      </div>

      {/* IMAGE SIDE */}
      <div className="hero-image">
        <ScrollAnimation animateIn="fadeInRight">
          <img src={Illustration} alt="DevOps Illustration" />
        </ScrollAnimation>
      </div>
    </Container>
  );
}