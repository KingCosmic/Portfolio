import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import codepen from "../../Assets/Projects/codepen.png";

import restaurant from "../../Assets/Projects/restaurant.png";
import admindashboard from "../../Assets/Projects/admindashboard.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={restaurant}
              isBlog={false}
              title="GERICHT"
              description="Restaurant landing page show ui/ux built with react.js, and css."
              ghLink="https://github.com/KingCosmic/restaurant"
              demoLink="https://restaurant-kingcosmic.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={admindashboard}
              isBlog={false}
              title="Admin Dashboard"
              description="Admin Dashboard built using the MERN Stack."
              ghLink="https://github.com/KingCosmic/admin-dashboard"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={codepen}
              isBlog={false}
              title="Codepens"
              description="Here is a link to my CodePens, showcasing various design implementations. Take a look and explore the creative possibilities!"
              ghLink="https://codepen.io/KingCosmic"
              demoLink="https://codepen.io/KingCosmic"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
