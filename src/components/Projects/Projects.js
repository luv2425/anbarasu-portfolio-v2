import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import editor from "../../Assets/Projects/codeEditor.png";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few recent projects.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="MERN Capstone App"
              description="A full-stack React/Next.js and Node.js/MongoDB application with protected routes, CRUD features, and clean UI components. CI/CD runs on GitHub Actions, containerized with Docker, and deployed to Vercel for previews and production."
              ghLink="https://github.com/luv2425"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="CI/CD Templates"
              description="Reusable GitHub Actions workflows for React/Next.js projects: build, lint, test, and deploy with environment secrets, caching, and release tagging. Designed to standardize pipelines across teams and reduce manual steps in delivery."
              ghLink="https://github.com/luv2425"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="n8n Automation Flows"
              description="A set of n8n flows that automate notifications, deployment checks, and log parsing. Integrates GitHub events and webhooks, reduces repetitive tasks, and improves developer feedback loops during sprints and releases."
              ghLink="https://github.com/luv2425"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="S3 Media Uploader"
              description="Minimal Node.js service that issues presigned S3 upload URLs to clients, adds basic rate limiting, and enforces content-type checks. Built to demonstrate secure media uploads, cloud storage, and a simple monitoring setup."
              ghLink="https://github.com/luv2425"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Microservices Auth Demo"
              description="Authentication prototype split into auth, users, and gateway services on Node.js/Express. Dockerized services explore Kubernetes manifests, JWT tokens, and session storage in MongoDB to model microservice boundaries and secure access."
              ghLink="https://github.com/luv2425"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
