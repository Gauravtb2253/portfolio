import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";

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

export function About() {
  return (
    <Container id="about">
      <div className="about-grid">
        {/* LEFT SIDE */}
        <div className="about-text">
          <ScrollAnimation animateIn="fadeInLeft">
            <h2>About me</h2>
          </ScrollAnimation>

          <ScrollAnimation animateIn="fadeInLeft" delay={100}>
            <p>
              Hi, I’m Gaurav, a DevOps engineer with around 1 year of experience
              working with cloud platforms like Google Cloud Platform and
              Microsoft Azure. I use Terraform to manage infrastructure and
              build CI/CD pipelines that enable reliable and consistent
              deployments.
            </p>

            <p>
              My work involves handling day-to-day DevOps tasks across
              deployments, infrastructure, and issue resolution in cloud
              environments. I aim to keep systems stable, efficient, and easy to
              manage.
            </p>

            <p>
              I also have exposure to incident management practices through
              project work, and I’m particularly interested in cloud-native
              technologies and AI-driven tooling. I’m continuously learning and
              improving my skills.
            </p>
          </ScrollAnimation>

          <ScrollAnimation animateIn="fadeInLeft" delay={200}>
            <div className="section-box">
              <h3>Education:</h3>
              <h4> Bachelor of Technology (B.Tech)</h4>
              <p>Vishwakarma Institute of Technology, Pune | 2021 - 2025</p>
              <p>9.04 CGPA</p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animateIn="fadeInLeft" delay={200}>
            <div className="section-box">
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
            </div>
          </ScrollAnimation>

          <ScrollAnimation animateIn="fadeInLeft" delay={200}>
            <h3 className="skills-heading">Here are my main skills:</h3>
          </ScrollAnimation>

          <div className="hard-skills">
            {skills.map((skill, index) => (
              <div className="hability" key={skill.name}>
                <ScrollAnimation animateIn="fadeInUp" delay={100 + index * 50}>
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    title={skill.name}
                    width="40"
                    height="40"
                  />
                </ScrollAnimation>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
