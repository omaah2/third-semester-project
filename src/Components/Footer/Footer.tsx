/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="ct">
        <div className="footer-top">
          <div className="footer-info">
            <h3>Contact Us</h3>
            <ul>
              <li>
                <FontAwesomeIcon icon={faMapMarkerAlt} /> 123 Street, City,
                Country
              </li>
              <li>
                <FontAwesomeIcon icon={faPhone} /> +123 456 7890
              </li>
              <li>
                <FontAwesomeIcon icon={faEnvelope} /> info@example.com
              </li>
            </ul>
          </div>
          <div className="footer-social">
            <h3>Follow Us</h3>
            <ul>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faFacebook} />
                  <span>Facebook</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faTwitter} />
                  <span>Twitter</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faInstagram} />
                  <span>Instagram</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-links">
            <h3>Links</h3>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 CareFinder, All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
