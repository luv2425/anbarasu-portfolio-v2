import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I'm <span className="purple">Anbarasu</span>{" "}
            from <span className="purple">Chennai, India</span>, building full-stack web applications and learning fast with AI-assisted development workflows.
            <br />
            I'm currently working as a{" "}
            <span className="purple">Web Developer</span>, available for hire.
            <br />
            I hold a Diploma in Electronics and Communication from Excel, Erode.
            <br />
            <br />
            Outside of coding, I enjoy activities that keep me curious and balanced:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs ✍️
            </li>
            <li className="about-activity">
              <ImPointRight /> Long Walks & Travel 🌍
            </li>
            <li className="about-activity">
              <ImPointRight /> Automating Daily Tasks ⚙️
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Build clearly, iterate fast, stay curious."{" "}
          </p>
          <footer className="blockquote-footer">Anbarasu</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
