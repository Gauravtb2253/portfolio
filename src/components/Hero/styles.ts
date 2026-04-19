import styled from "styled-components";

export const Container = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;

  padding: 0 6rem;
  color: #e5e7eb;
  box-sizing: border-box;

  /* ================= GRID ================= */
  .hero-grid {
    width: 100%;
    display: grid;
    grid-template-columns: 1.3fr 1fr;
    align-items: center;
    gap: 5rem;
  }

  /* ================= LEFT TEXT ================= */
  .hero-text {
    text-align: left;
  }

  .hello {
    font-size: 1.6rem;
    display: flex;
    align-items: center;
    gap: 0.8rem;
    opacity: 0.85;
  }

  .hello img {
    width: 22px;
  }

  /* ================= TITLE ================= */
  h1 {
    font-size: 4.5rem;
    font-weight: 700;
    line-height: 1.2;
    margin-top: 1rem;
  }

  h1 span {
    display: block;
    font-size: 1.8rem;
    margin-top: 1rem;
    color: #8b5cf6;
    font-weight: 500;
  }

  /* ================= CTA ================= */
  .cta {
    margin-top: 2.5rem;
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
  }

  .cta a {
    padding: 1rem 1.8rem;
    border-radius: 1rem;

    font-size: 1.4rem;
    text-decoration: none;

    background: rgba(99, 102, 241, 0.15);
    border: 1px solid rgba(99, 102, 241, 0.3);

    color: #fff;

    transition: 0.3s ease;
  }

  .cta a:hover {
    transform: translateY(-4px);
    background: rgba(99, 102, 241, 0.3);
  }

  /* ================= SOCIAL ================= */
  .social-wrapper {
    margin-top: 3rem;
  }

  .social-wrapper p {
    font-size: 1.3rem;
    opacity: 0.7;
    margin-bottom: 1rem;
  }

  .social-media {
    display: flex;
    gap: 1.5rem;
  }

  .social-media a img {
    width: 40px;
    transition: 0.3s ease;
  }

  .social-media a:hover img {
    transform: translateY(-5px) scale(1.1);
    filter: drop-shadow(0 10px 20px rgba(139, 92, 246, 0.4));
  }

  /* ================= IMAGE (RIGHT SIDE FIX) ================= */
  .hero-image {
    display: flex;
    justify-content: flex-end; /* 🔥 pushes image fully right */
    align-items: center;
    margin-left: 100px;
    padding-right: 0;
  }

  .hero-image img {
    width: 100%;
    max-width: 420px;

    margin-left: auto;
    margin-right: 0;

    animation: float 4s ease-in-out infinite;

    filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.35));

    
  }

  /* ================= FLOAT ANIMATION ================= */
  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-15px);
    }
  }

  /* ================= RESPONSIVE ================= */
  @media (max-width: 960px) {
    padding: 0 2rem;

    .hero-grid {
      grid-template-columns: 1fr;
      text-align: center;
    }

    .cta {
      justify-content: center;
      flex-wrap: wrap;
    }

    .social-media {
      justify-content: center;
    }

    h1 {
      font-size: 3.5rem;
    }

    .hero-image {
      justify-content: center; /* center on mobile */
      margin-top: 3rem;
    }
  }
`;