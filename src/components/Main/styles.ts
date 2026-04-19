import styled from "styled-components";

export const Container = styled.main`
  position: relative;
  z-index: 0;

  padding: 0 10rem;

  min-height: 100vh;

  background: radial-gradient(
    circle at top,
    #111827 0%,
    #0b0f17 50%,
    #070a10 100%
  );

  overflow-x: hidden;

  /* subtle glow layer */
  &::before {
    content: "";
    position: absolute;
    top: -200px;
    left: -200px;

    width: 600px;
    height: 600px;

    background: rgba(99, 102, 241, 0.08);
    filter: blur(120px);

    z-index: -1;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -200px;
    right: -200px;

    width: 600px;
    height: 600px;

    background: rgba(59, 130, 246, 0.08);
    filter: blur(140px);

    z-index: -1;
  }

  #tsparticles {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: -2;
  }

  @media (max-width: 740px) {
    padding: 0 4rem;
  }

  @media (max-width: 360px) {
    padding: 0 2rem;
  }
`;