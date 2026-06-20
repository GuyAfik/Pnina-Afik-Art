import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="footer-artist-name">Pnina Afik</span>
        </div>
        <div className="footer-social">
          <ul className="home-about-social-links">
            <li className="social-icons">
              <a
                href="https://www.facebook.com/pnina.afik/"
                target="_blank"
                rel="noreferrer"
                className="home-social-icons"
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
                className="home-social-icons"
                aria-label="Instagram"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-copy">
          <p>© {year} Pnina Afik. Developed by Guy Afik.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
