import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a Web Developer building full-stack applications with React,
              Next.js, Node.js, and MongoDB. I focus on clean UIs, reliable APIs,
              and CI/CD so features ship quickly and safely.
              <br />
              <br />
              I'm proficient in
              <i>
                <b className="purple">
                  {" "}
                  JavaScript, TypeScript, React, Next.js, and Node.js{" "}
                </b>
              </i>
              — and I use MongoDB, Docker, and GitHub Actions for dependable delivery.
              <br />
              <br />
              My key areas of interest include developing
              <i>
                <b className="purple">
                  {" "}
                  Web Applications, API-first services, and Cloud-native automation{" "}
                </b>
              </i>
              focused on performance, reliability, and maintainable delivery pipelines.
              <br />
              <br />
              Whenever possible, I love building with
              <b className="purple"> Node.js </b> and modern frameworks like{" "}
              <i>
                <b className="purple">React.js</b> and{" "}
                <b className="purple">Next.js</b>,
              </i>
              {" "}using TypeScript to keep large codebases predictable.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
