import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer" style={{ backgroundColor: "black" }}>
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Developed by Guy Afik</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} Pnina Afik</h3>
        </Col>
        <Col md="4" className="footer-body">
          <h3>Contact Pnina Afik</h3>
          <ul className="home-about-social-links">
            <li className="social-icons">
              <a
                href="https://www.facebook.com/pnina.afik/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <FaFacebook />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/pninaafik/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
