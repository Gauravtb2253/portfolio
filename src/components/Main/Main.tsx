import Particles from "react-tsparticles";
import { Container } from "./styles";
import { Hero } from "../Hero/Hero";
import { About } from "../About/About";
import { Contact } from "../Contact/Contact";
import { Project } from "../Project/Project";

export function Main() {
  return (
    <Container>
      <Particles
        id="tsparticles"
        options={{
          fullScreen: { enable: true, zIndex: -1 },

          background: {
            color: "#0b0f17", // NEW dark professional background
          },

          fpsLimit: 60,

          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
              onClick: {
                enable: true,
                mode: "push",
              },
            },
          },

          particles: {
            color: {
              value: "#ffffff",
            },

            links: {
              enable: true,
              color: "#8aa0b8",
              distance: 150,
              opacity: 0.15,
              width: 1,
            },

            move: {
              enable: true,
              speed: 0.6,
              outModes: "out",
            },

            number: {
              value: 35,
              density: {
                enable: true,
              },
            },

            opacity: {
              value: 0.4,
            },

            size: {
              value: { min: 1, max: 2 },
            },
          },
        }}
      />
      <Hero></Hero>
      <About></About>
      <Project></Project>
      <Contact></Contact>
    </Container>
  );
}
