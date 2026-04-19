import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";

export function Contact() {
  return (
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Got a project or opportunity in mind?</p>
        <p>Feel free to reach out via email.</p>
      </header>

      <div className="contacts">
        <div>
          <a href="mailto:gaurav22tb@gmail.com">
            <img src={emailIcon} alt="Email" />
          </a>
          <a href="mailto:gaurav22tb@gmail.com">
            gaurav22tb@gmail.com
          </a>
        </div>
      </div>
    </Container>
  );
}