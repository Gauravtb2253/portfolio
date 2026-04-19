import { Container } from "./styles";
import { BrowserRouter as Router } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import { useState } from "react";

export function Header() {
  const [isActive, setActive] = useState(false);

  function closeMenu() {
    setActive(false);
  }

  return (
    <Container>
      <Router>
        {/* LEFT NAV */}
        <nav className="left-nav">
          <NavHashLink smooth to="#home" onClick={closeMenu}>
            Home
          </NavHashLink>
          <NavHashLink smooth to="#about" onClick={closeMenu}>
            About
          </NavHashLink>
        </nav>

        {/* LOGO CENTER */}
        <NavHashLink smooth to="#home" className="logo" onClick={closeMenu}>
          <span className="bracket">&lt;</span>
          Gaurav <span className="highlight">Bomble</span>
          <span className="bracket">/&gt;</span>
        </NavHashLink>

        {/* RIGHT NAV */}
        <nav className="right-nav">
          <NavHashLink smooth to="#project" onClick={closeMenu}>
            Projects
          </NavHashLink>
          <NavHashLink smooth to="#contact" onClick={closeMenu}>
            Contact
          </NavHashLink>
        </nav>
      </Router>
    </Container>
  );
}