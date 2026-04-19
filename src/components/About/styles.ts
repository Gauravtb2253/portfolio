import styled from "styled-components";

export const Container = styled.section`
  margin-top: 14rem;
  padding: 0 6rem;
  color: #e5e7eb;

  /* ================= GRID ================= */
  .about-grid {
    display: flex;
    justify-content: center;
  }

  .about-text {
    max-width: 1100px;
  }

  /* ================= TITLE ================= */
  h2 {
    font-size: 4rem;
    text-align: center;
    margin-bottom: 3rem;

    background: linear-gradient(90deg, #8b5cf6, #6366f1, #22d3ee);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  /* ================= TEXT ================= */
  p {
    font-size: 1.55rem;
    line-height: 1.8;
    opacity: 0.8;
    margin-bottom: 1.8rem;
  }

  /* ================= SECTION BOXES ================= */
  .section-box {
    margin-top: 2rem;
    padding: 2rem;

    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 1.6rem;

    backdrop-filter: blur(10px);
    transition: 0.3s ease;
  }

  .section-box:hover {
    transform: translateY(-5px);
    border-color: rgba(139, 92, 246, 0.4);
  }

  .section-box h3 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }

  .section-box h4 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  /* ================= EXPERIENCE ================= */
  .role {
    margin-top: 1rem;
    padding-left: 1rem;
    border-left: 2px solid rgba(139, 92, 246, 0.5);
  }

  .role h4 {
    font-size: 1.5rem;
  }

  .role span {
    font-size: 1.2rem;
    opacity: 0.6;
  }

  /* ================= SKILLS ================= */
  .skills-heading {
    margin-top: 3rem;
    font-size: 2rem;
    text-align: center;
  }

  .hard-skills {
    margin-top: 2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.5rem;
  }

  .hability {
    padding: 1rem;
    border-radius: 1.2rem;

    background: rgba(99, 102, 241, 0.06);
    border: 1px solid rgba(99, 102, 241, 0.15);

    transition: 0.3s ease;
  }

  .hability:hover {
    transform: translateY(-6px);
    background: rgba(99, 102, 241, 0.12);
  }

  .hability img {
    filter: drop-shadow(0 4px 10px rgba(0, 0, 0, 0.4));
  }

  /* ================= RESPONSIVE ================= */
  @media (max-width: 960px) {
    padding: 0 2rem;

    h2 {
      font-size: 3rem;
    }
  }
`;