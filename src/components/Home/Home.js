import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Contact from "./Contact";
import HomeGallery from "./HomeGallery"

function Home() {
  const images = [
    "/home/images/image5.jpg",
  ];
  return (
    <section>
      <HomeGallery images={images} />
      <Contact />
    </section>
  );
}

export default Home;
