import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";

function Contact() {
  return (
    <section className="home-about-section" id="contact">
      <div className="home-about-social">
        <h1>Contact Me</h1>
        <ul className="home-about-social-links">
          <li className="social-icons">
            <a
              href="https://www.facebook.com/pnina.afik/"
              target="_blank"
              rel="noreferrer"
              className="icon-colour home-social-icons"
              aria-label="Facebook"
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
              aria-label="Instagram"
            >
              <AiFillInstagram />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Contact;
