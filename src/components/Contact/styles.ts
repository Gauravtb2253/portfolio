import styled from "styled-components";

export const Container = styled.section`
  margin-top: 12rem;
  padding: 4rem 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;

  /* soft ambient glow (blue/purple, not green) */
  &::before {
    content: "";
    position: absolute;
    width: 500px;
    height: 500px;

    background: radial-gradient(
      circle,
      rgba(99, 102, 241, 0.12),
      transparent 70%
    );

    filter: blur(100px);
    top: -180px;
    z-index: -1;
  }

  &::after {
    content: "";
    position: absolute;
    width: 500px;
    height: 500px;

    background: radial-gradient(
      circle,
      rgba(59, 130, 246, 0.10),
      transparent 70%
    );

    filter: blur(120px);
    bottom: -200px;
    right: -100px;
    z-index: -1;
  }

  /* ================= HEADER ================= */
  header {
    text-align: center;
    max-width: 60rem;

    h2 {
      font-size: 4rem;
      margin-bottom: 1rem;

      /* gradient text instead of green */
      background: linear-gradient(90deg, #60a5fa, #a78bfa);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;

      letter-spacing: 1px;
    }

    p {
      font-size: 1.6rem;
      color: rgba(255, 255, 255, 0.75);
      margin: 0.5rem 0;
    }
  }

  /* ================= CONTACT WRAPPER ================= */
  .contacts {
    margin-top: 4rem;
    display: flex;
    justify-content: center;
    width: 100%;
  }

  /* ================= CONTACT CARD ================= */
  .contacts div {
    display: flex;
    align-items: center;
    gap: 1.5rem;

    padding: 2rem 3rem;

    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(16px);

    border-radius: 18px;

    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);

    transition: all 0.35s ease;

    position: relative;
    overflow: hidden;
  }

  /* subtle shine hover effect */
  .contacts div::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;

    width: 100%;
    height: 100%;

    background: linear-gradient(
      120deg,
      transparent,
      rgba(255, 255, 255, 0.08),
      transparent
    );

    transition: 0.6s;
  }

  .contacts div:hover::before {
    left: 100%;
  }

  .contacts div:hover {
    transform: translateY(-6px);
    border-color: rgba(99, 102, 241, 0.4);
    box-shadow: 0 20px 50px rgba(59, 130, 246, 0.15);
  }

  /* ================= ICON ================= */
  img {
    width: 38px;
    height: 38px;
    transition: transform 0.3s ease;
    opacity: 0.9;
  }

  .contacts div:hover img {
    transform: scale(1.1);
    opacity: 1;
  }

  /* ================= EMAIL ================= */
  a {
    font-size: 1.6rem;
    color: rgba(255, 255, 255, 0.9);
    font-weight: 500;
    text-decoration: none;
    transition: color 0.3s ease;
  }

  .contacts div:hover a {
    color: #93c5fd;
  }

  /* ================= MOBILE ================= */
  @media (max-width: 600px) {
    header h2 {
      font-size: 3rem;
    }

    .contacts div {
      flex-direction: column;
      text-align: center;
      padding: 2rem;
    }
  }
`;