import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/about.png";
import Contact from "./Contact";
import HomeGallery from "./HomeGallery"

function Home() {
  const images = [
    "/home/images/image1.jpg",
    "/home/images/image2.jpg",
    "/home/images/image3.jpg",
    "/home/images/image4.jpg",
    "/home/images/image5.jpg",
    "/home/images/image6.jpg",
    "/home/images/image7.jpg",
    "/home/images/image8.jpg",
    "/home/images/image9.jpg",
  ];
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I am Pnina Afik the artist
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <HomeGallery images={images} />
      <Contact />
    </section>
  );
}

export default Home;
