import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";

function About() {
  return (
    <Container fluid className="about-section">
      {/* <Particle /> */}
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              PNINA AFIK
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center" }}>
          <Col md={12} style={{ textAlign: "center" }}>
            <h1 className="project-heading">
              <strong className="purple">Solo Exhibition - Ein Hod</strong>
            </h1>
            <video width="640" height="360" controls>
              <source
                src="/about/videos/solo-exhibition-ein-hod.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", marginTop: "20px" }}>
          <h1 className="project-heading">
            <strong className="purple">Solo Exhibition - Tova Osman Gallery</strong>
          </h1>
          <Col md={6} style={{ textAlign: "center" }}>
            <img src="/about/images/image1.jpg" alt="Image 1" className="img-fluid" />
          </Col>
          <Col md={6} style={{ textAlign: "center" }}>
            <img src="/about/images/image2.jpg" alt="Image 2" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;
