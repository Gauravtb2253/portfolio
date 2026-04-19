import { Container } from "./styles";
import { motion } from "framer-motion";

import gcpIcon from "../../assets/gcp.svg";
import azureIcon from "../../assets/azure.svg";
import python from "../../assets/python.svg";
import kubernetesIcon from "../../assets/kubernetes.svg";

const skills = [
  { name: "GCP", icon: gcpIcon },
  { name: "Azure", icon: azureIcon },
  { name: "Terraform", icon: "https://cdn.simpleicons.org/terraform" },
  { name: "Docker", icon: "https://cdn.simpleicons.org/docker" },
  { name: "Kubernetes", icon: kubernetesIcon },
  { name: "CI/CD", icon: "https://cdn.simpleicons.org/githubactions" },
  { name: "Python", icon: python },
  { name: "Flutter", icon: "https://cdn.simpleicons.org/flutter" },
  { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript" },
];

const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export function About() {
  return (
    <Container id="about">
      <div className="about-grid">

        {/* LEFT SIDE */}
        <div className="about-text">

          <motion.h2
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            About me
          </motion.h2>

          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <p>
              Hi, I’m Gaurav, a DevOps engineer with around 1 year of experience
              working with cloud platforms like Google Cloud Platform and Microsoft Azure.
              I use Terraform to manage infrastructure and build CI/CD pipelines.
            </p>

            <p>
              My work involves handling deployments, infrastructure, and issue resolution
              in cloud environments. I aim to keep systems stable and efficient.
            </p>

            <p>
              I also have exposure to incident management and I’m interested in
              cloud-native technologies and AI-driven tooling.
            </p>
          </motion.div>

          {/* EDUCATION */}
          <motion.div
            className="section-box"
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>Education:</h3>
            <h4>Bachelor of Technology (B.Tech)</h4>
            <p>Vishwakarma Institute of Technology, Pune | 2021 - 2025</p>
            <p>9.04 CGPA</p>
          </motion.div>

          {/* EXPERIENCE */}
          <motion.div
            className="section-box"
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6, delay: 0.25 }}
            viewport={{ once: true }}
          >
            <h3>Experience</h3>

            <div className="role">
              <h4>DevOps Analyst</h4>
              <p>MSCI Inc.</p>
              <span>July 2025 – Present • Mumbai, India</span>
            </div>

            <div className="role">
              <h4>DevOps Intern</h4>
              <p>MSCI Inc.</p>
              <span>January 2025 – June 2025 • Mumbai, India</span>
            </div>
          </motion.div>

          {/* SKILLS TITLE */}
          <motion.h3
            className="skills-heading"
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Here are my main skills:
          </motion.h3>

          {/* SKILLS GRID */}
          <div className="hard-skills">
            {skills.map((skill, index) => (
              <motion.div
                className="hability"
                key={skill.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  title={skill.name}
                  width="40"
                  height="40"
                />
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </Container>
  );
}