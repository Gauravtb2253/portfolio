import styled from "styled-components";

export const Container = styled.section`
  margin-top: 15rem;
  padding: 0 6rem;

  /* ================= TITLE ================= */
  h2 {
    text-align: center;
    font-size: 4rem;
    margin-bottom: 2rem;
    letter-spacing: 1px;
  }

  .note {
    text-align: center;
    opacity: 0.75;
    max-width: 70rem;
    margin: 0 auto 4rem;
    font-size: 1.6rem;
    line-height: 1.6;
  }
  /* ================= PROJECTS ================= */
  .projects {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2.5rem;
    padding: 1rem;
  }

  /* ================= PROJECT CARD ================= */
  .project {
    padding: 2.2rem 2rem;

    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(148, 163, 184, 0.12);
    border-radius: 1.6rem;

    display: flex;
    flex-direction: column;
    height: 100%;

    backdrop-filter: blur(10px);

    transition: all 0.35s ease;

    position: relative;
    overflow: hidden;
  }

  /* subtle glow overlay (modern touch) */
  .project::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;

    width: 200%;
    height: 200%;

    background: radial-gradient(
      circle,
      rgba(99, 102, 241, 0.08),
      transparent 60%
    );

    opacity: 0;
    transition: opacity 0.4s ease;
    z-index: 0;
  }

  .project:hover::before {
    opacity: 1;
  }

  .project:hover {
    transform: translateY(-8px);
    border-color: rgba(99, 102, 241, 0.35);
    box-shadow: 0 18px 40px rgba(0, 0, 0, 0.35);
  }

  /* ensure content stays above glow */
  .project > * {
    position: relative;
    z-index: 1;
  }

  /* ================= HEADER ================= */
  .project header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 2.5rem;
    opacity: 0.9;
  }

  /* icon subtle hover */
  .project header svg {
    transition: transform 0.3s ease;
  }

  .project:hover header svg {
    transform: rotate(4deg) scale(1.05);
  }

  /* ================= LINKS ================= */
  .project-links a img {
    width: 3.8rem;
    transition: all 0.3s ease;
    opacity: 0.85;
  }

  .project-links a img:hover {
    transform: scale(1.15);
    opacity: 1;
  }

  /* ================= BODY ================= */
  .project h3 {
    font-size: 1.8rem;
    line-height: 1.4;
    margin-bottom: 1.2rem;
    color: #f8fafc;
  }

  .project p {
    font-size: 1.4rem;
    line-height: 1.7;
    opacity: 0.75;
    letter-spacing: 0.2px;
    margin-bottom: 1.8rem;
  }

  /* ================= TECH LIST ================= */
  .tech-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;

    font-size: 1.2rem;
    opacity: 0.75;
  }

  .tech-list li {
    list-style: none;

    padding: 0.35rem 0.9rem;

    border-radius: 999px;
    border: 1px solid rgba(148, 163, 184, 0.2);

    background: rgba(255, 255, 255, 0.02);

    transition: all 0.25s ease;
  }

  .tech-list li:hover {
    border-color: rgba(99, 102, 241, 0.5);
    transform: translateY(-2px);
    opacity: 1;
  }

  /* ================= RESPONSIVE ================= */
  @media (max-width: 960px) {
    .projects {
      grid-template-columns: 1fr;
    }
  }

  /* ================= CERTIFICATIONS ================= */
  .certifications {
    margin-top: 6rem;
  }

  .cert-title {
    text-align: center;
    font-size: 2.6rem;
    font-weight: 600;
    margin-bottom: 3rem;
    letter-spacing: 1px;

    background: linear-gradient(90deg, #60a5fa, #a78bfa);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  /* GRID FIX (TRUE ROW LAYOUT) */
  .cert-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
  }

  /* CARD */
  .cert-card {
    width: 280px;
    min-height: 120px;

    display: flex;
    align-items: center;
    gap: 1rem;

    padding: 1.5rem;
    border-radius: 1.6rem;

    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(168, 85, 247, 0.15);

    backdrop-filter: blur(10px);
    transition: all 0.3s ease;

    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
  }

  .cert-card:hover {
    transform: translateY(-6px);
    border-color: rgba(168, 85, 247, 0.5);
    box-shadow: 0 12px 35px rgba(168, 85, 247, 0.15);
  }

  /* ICON */
  .cert-icon img {
    width: 32px;
    height: 32px;
    transition: transform 0.3s ease;
  }

  .cert-card:hover .cert-icon img {
    transform: scale(1.1);
  }

  /* TEXT */
  .cert-title-text {
    font-size: 1.4rem;
    font-weight: 500;
    color: #ffffff;
  }

  .cert-subtitle {
    font-size: 1.2rem;
    opacity: 0.6;
    color: #e5e5e5;
  }

  /* ================= RESPONSIVE ================= */
  @media (max-width: 960px) {
    .projects {
      grid-template-columns: 1fr;
    }

    .cert-grid {
      flex-direction: column;
      align-items: center;
    }

    .cert-card {
      width: 100%;
      max-width: 420px;
    }
  }
`;
