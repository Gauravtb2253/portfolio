import styled from "styled-components";

export const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  padding: 1.4rem 6rem;

  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;

  background: rgba(10, 12, 20, 0.65);
  backdrop-filter: blur(16px);

  border-bottom: 1px solid rgba(255, 255, 255, 0.06);

  z-index: 1000;

  /* subtle depth shadow */
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.25);

  /* ================= NAV ================= */
  nav {
    display: flex;
    gap: 2.2rem;
    justify-content: center;
    align-items: center;
  }

  .left-nav {
    justify-content: flex-start;
  }

  .right-nav {
    justify-content: flex-end;
  }

  nav a {
    font-size: 1.25rem;
    text-transform: uppercase;
    letter-spacing: 1px;

    color: rgba(255, 255, 255, 0.65);

    position: relative;
    transition: all 0.3s ease;

    padding: 0.4rem 0.2rem;
  }

  nav a:hover {
    color: white;
    transform: translateY(-1px);
  }

  /* modern underline (no green dependency) */
  nav a::after {
    content: "";
    position: absolute;
    bottom: -6px;
    left: 0;

    width: 0%;
    height: 2px;

    background: linear-gradient(90deg, #60a5fa, #a78bfa);

    transition: 0.3s ease;
    border-radius: 2px;
  }

  nav a:hover::after {
    width: 100%;
  }

  /* ================= LOGO ================= */
  .logo {
    font-size: 1.7rem;
    font-weight: 600;

    text-decoration: none;
    color: white;

    justify-self: center;

    letter-spacing: 0.5px;
    transition: 0.3s ease;
  }

  .logo:hover {
    opacity: 0.85;
  }

  .bracket {
    color: #60a5fa;
  }

  .highlight {
    background: linear-gradient(90deg, #60a5fa, #a78bfa);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  /* ================= MOBILE ================= */
  @media (max-width: 900px) {
    display: flex;
    justify-content: space-between;

    padding: 1.2rem 2rem;

    nav {
      display: none;
    }
  }
`;