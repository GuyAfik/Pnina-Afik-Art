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
      <HomeGallery images={images} />
      <Contact />
    </section>
  );
}

export default Home;
