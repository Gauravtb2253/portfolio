import { Container } from "./styles";
import paperIcon from "../../assets/ieee.svg";
import { motion } from "framer-motion";

import gcpIcon from "../../assets/gcp.svg";
import azureIcon from "../../assets/azure.svg";

const certifications = [
  {
    href: "https://www.credly.com/badges/YOUR-AZURE-CERT-ID",
    title: "Microsoft Azure Fundamentals",
    subtitle: "AZ-900",
    icon: azureIcon,
  },
  {
    href: "https://www.credly.com/badges/YOUR-GCP-CERT-ID",
    title: "Google Cloud Digital Leader",
    subtitle: "Cloud Digital Leader",
    icon: gcpIcon,
  },
  {
    href: "https://www.coursera.org/account/accomplishments/certificate/YOUR-COURSERA-ID",
    title: "IBM DevOps and Software Engineering",
    subtitle: "Coursera",
    icon: "https://cdn.simpleicons.org/coursera",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const flip = {
  hidden: { opacity: 0, rotateX: 30, y: 40 },
  visible: { opacity: 1, rotateX: 0, y: 0 },
};

export function Project() {
  return (
    <Container id="project">

      <h2>Projects</h2>

      <p className="note">
        These projects were developed during my academic journey and reflect my
        foundation in software development and problem solving.
      </p>

      {/* PROJECTS */}
      <div className="projects">

        {/* Project 1 */}
        <motion.div
          className="project"
          variants={flip}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <header>
            <svg width="50" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1">
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
            </svg>

            <div className="project-links">
              <a href="https://i" target="_blank" rel="noreferrer">
                <img src={paperIcon} alt="Research Paper" />
              </a>
            </div>
          </header>

          <div className="body">
            <h3>Text Extraction from Document Images using CNN and LSTM</h3>
            <p>
              Built an OCR system using CNN and LSTM to extract text from document images.
              The model was trained to recognize patterns in images and convert them into structured text output.
            </p>
          </div>

          <footer>
            <ul className="tech-list">
              <li>Python</li>
              <li>CNN-LSTM</li>
              <li>OpenCV</li>
            </ul>
          </footer>
        </motion.div>

        {/* Project 2 */}
        <motion.div
          className="project"
          variants={flip}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <header>
            <svg width="50" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1">
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
            </svg>
          </header>

          <div className="body">
            <h3>Text Summarization in Local Language</h3>
            <p>
              Developed a transformer-based summarization system for a local language.
              Focused on improving output quality and handling language-specific challenges.
            </p>
          </div>

          <footer>
            <ul className="tech-list">
              <li>Python</li>
              <li>Transformers</li>
              <li>NLP</li>
            </ul>
          </footer>
        </motion.div>

        {/* Project 3 */}
        <motion.div
          className="project"
          variants={flip}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <header>
            <svg width="50" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1">
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
            </svg>
          </header>

          <div className="body">
            <h3>AI-Based Travel Itinerary Generator</h3>
            <p>
              MERN stack web app that generates personalized travel itineraries using OpenAI API.
              Containerized using Docker for deployment consistency.
            </p>
          </div>

          <footer>
            <ul className="tech-list">
              <li>MERN Stack</li>
              <li>OpenAI API</li>
              <li>Docker</li>
            </ul>
          </footer>
        </motion.div>

      </div>

      {/* CERTIFICATIONS */}
      <div className="certifications">

        <motion.p
          className="cert-title"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Certifications
        </motion.p>

        <div className="cert-grid">
          {certifications.map((cert, index) => (
            <motion.a
              key={cert.href}
              href={cert.href}
              target="_blank"
              rel="noreferrer"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="cert-card">

                <div className="cert-icon">
                  <img src={cert.icon} alt={cert.title} />
                </div>

                <div className="cert-content">
                  <p className="cert-title-text">{cert.title}</p>
                  <p className="cert-subtitle">{cert.subtitle}</p>
                </div>

              </div>
            </motion.a>
          ))}
        </div>

      </div>

    </Container>
  );
}