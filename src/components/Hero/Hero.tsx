import { Container } from "./styles";
import { motion } from "framer-motion";

import Illustration from "../../assets/portfolio-devops.jpg";
import linkedin from "../../assets/linkedin.svg";
import githubIcon from "../../assets/github.svg";
import Hello from "../../assets/Hello.gif";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0 },
};

export function Hero() {
  return (
    <Container id="home">
      
      {/* TEXT SIDE */}
      <div className="hero-text">

        <motion.p
          className="hello"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6 }}
        >
          Hello <img src={Hello} alt="hello" /> I'm a
        </motion.p>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          DevOps Engineer <br />
          <span>Cloud • Automation • CI/CD</span>
        </motion.h1>

        {/* SOCIAL */}
        <motion.div
          className="social-wrapper"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p>Find me on</p>

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
        </motion.div>

      </div>

      {/* IMAGE SIDE */}
      <div className="hero-image">

        <motion.img
          src={Illustration}
          alt="DevOps Illustration"
          variants={fadeRight}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8 }}
        />

      </div>

    </Container>
  );
}