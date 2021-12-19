import React from "react";
import "./Footer.scss";
// import { Button } from "./Button";
import { Link } from "react-router-dom";
// import { Form } from "./Form";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__wrapper">
        <div className="footer__links">
          <div className="footer__links-wrapper">
            <div className="footer__links-about">
              <h2 className="footer__links-tittle">About Us</h2>
              <ul className="footer__links-nav">
                <li>
                  <Link className="footer__links-hover" to="/sign-up">
                    Who we are?
                  </Link>
                </li>
                <li>
                  <Link className="footer__links-hover" to="/sign-up">
                    Where we?
                  </Link>
                </li>
                <li>
                  <Link className="footer__links-hover" to="/sign-up">
                    Our team
                  </Link>
                </li>
                <li>
                  <Link className="footer__links-hover" to="/sign-up">
                    Our membership
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer__links-contacts">
              <h2 className="footer__links-tittle">Contact Us</h2>
              <ul className="footer__links-nav">
                <li>
                  <Link className="footer__links-hover" to="/">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link className="footer__links-hover" to="/">
                    Support
                  </Link>
                </li>
                <li>
                  <Link className="footer__links-hover" to="/">
                    Destinations
                  </Link>
                </li>
                <li>
                  <Link className="footer__links-hover" to="/">
                    Sponsorships
                  </Link>
                </li>
              </ul>
            </div>

            <div className="footer__links-policy">
              <h2 className="footer__links-tittle">Privat policy</h2>
              <ul className="footer__links-nav">
                <li>
                  <Link className="footer__links-hover" to="/">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link className="footer__links-hover" to="/">
                    Support
                  </Link>
                </li>
                <li>
                  <Link className="footer__links-hover" to="/">
                    Destinations
                  </Link>
                </li>
                <li>
                  <Link className="footer__links-hover" to="/">
                    Sponsorships
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer__links-media">
              <h2 className="footer__links-tittle">Social Media</h2>
              <ul className="footer__links-nav">
                <li>
                  <a
                    className="footer__links-hover"
                    target="_blank"
                    rel="noreferrer"
                    href=" https://twitter.com/"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    className="footer__links-hover"
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.instagram.com/"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    className="footer__links-hover"
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.youtube.com/"
                  >
                    Youtube
                  </a>
                </li>
                <li>
                  <a
                    className="footer__links-hover"
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.facebook.com/"
                  >
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* copyr */}
        <div className="footer__copyr">
          <div className="footer__logo">
            <Link to="/" className="footer__logo-link">
              <img src="/images/logo.png" alt="logo-Active-Trust" />
              <div className="title-wrapper">
                <span className="logo-title">Active</span>
                <span className="logo-title">Trust</span>
              </div>
            </Link>
          </div>
          <div className="footer__copiryte">
            <small className="footer__logo-copy">
              Active Trust <sup>&copy;</sup> 2021
            </small>
          </div>
          <div className="footer__media">
            <a
              className="footer__media-link "
              aria-label="Facebook"
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/"
            >
              <i className="fab fa-facebook-f" />
            </a>
            <a
              className="footer__media-link "
              aria-label="Instagram"
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/"
            >
              <i className="fab fa-instagram" />
            </a>
            <a
              className="footer__media-link "
              aria-label="Youtube"
              target="_blank"
              rel="noreferrer"
              href="https://www.youtube.com/"
            >
              <i className="fab fa-youtube" />
            </a>
            <a
              className="footer__media-link "
              aria-label="Twetter"
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/"
            >
              <i className="fab fa-twitter" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer__opacity"></div>
    </div>
  );
}

export default Footer;
