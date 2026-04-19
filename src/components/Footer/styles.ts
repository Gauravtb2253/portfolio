import styled from "styled-components";

export const Container = styled.footer`
  margin-top: 10rem;
  padding: 4rem 8rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: relative;
  overflow: hidden;

  /* ================= MODERN BACKGROUND ================= */
  background: linear-gradient(
    180deg,
    rgba(17, 24, 39, 0.9),
    rgba(10, 12, 20, 0.95)
  );

  border-top: 1px solid rgba(255, 255, 255, 0.08);

  backdrop-filter: blur(12px);

  /* soft glow layer */
  &::before {
    content: "";
    position: absolute;
    width: 400px;
    height: 400px;

    background: radial-gradient(
      circle,
      rgba(99, 102, 241, 0.12),
      transparent 70%
    );

    top: -150px;
    left: -120px;
    filter: blur(90px);
    z-index: 0;
  }

  /* ================= LEFT TEXT ================= */
  .left {
    position: relative;
    z-index: 1;
  }

  .left p {
    display: flex;
    align-items: center;
    gap: 0.8rem;

    font-size: 1.5rem;
    color: rgba(255, 255, 255, 0.7);
    letter-spacing: 0.5px;
  }

  .left img {
    width: 2rem;
    animation: spin 6s linear infinite;
    opacity: 0.9;
  }

  /* ================= SOCIAL ================= */
  .social-media {
    display: flex;
    align-items: center;
    gap: 1.8rem;
    position: relative;
    z-index: 1;
  }

  /* remove box completely */
  .social-media a {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    background: transparent;
    border: none;
    width: auto;
    height: auto;

    padding: 0;

    transition:
      transform 0.25s ease,
      opacity 0.25s ease;
  }

  /* icon only */
  .social-media img {
    width: 2.6rem;
    height: 2.6rem;
    opacity: 0.75;
    transition: all 0.25s ease;
  }

  /* hover effect */
  .social-media a:hover img {
    opacity: 1;
    transform: translateY(-3px) scale(1.15);
    filter: drop-shadow(0 6px 12px rgba(99, 102, 241, 0.4));
  }
`;
