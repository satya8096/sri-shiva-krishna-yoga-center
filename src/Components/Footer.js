import React from "react";
import {
  address,
  brandEmail,
  brandName,
  facebook,
  instagram,
  mapsLink,
  phoneNumber,
  youtube,
} from "../Data/BrandData";
import { Link } from "react-router";

const YogaFooter = () => {
  return (
    <footer className="yoga-footer text-white pt-5">
      <div className="container">
        <div className="row g-4">
          {/* Logo and About */}
          <div className="col-md-4 footer-section logo-section">
            <img
              src={require("./../Assets/yoga_logo.png")}
              alt="logo"
              width={"20%"}
            />
            <h3 className="footer-logo">{brandName}</h3>
            <p className="footer-desc">
              Experience tranquility, health, and inner peace at our modern Yoga
              Studio. Embrace your journey with us.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-2 footer-section quick-links">
            <h5 className="section-heading">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/classes">Classes</a>
              </li>
              <li>
                <a href="/gallery">Gallery</a>
              </li>
              <li>
                <a href="/blogs">Blog</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-md-3 footer-section services-links">
            <h5 className="section-heading">Our Services</h5>
            <ul className="list-unstyled">
              <li>
                <Link>Hatha Yoga</Link>
              </li>
              <li>
                <Link>Meditation</Link>
              </li>
              <li>
                <Link>Online Classes</Link>
              </li>
              <li>
                <Link>Personal Training</Link>
              </li>
              <li>
                <Link>Retreats</Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="col-md-3 footer-section contact-social">
            <h5 className="section-heading">Contact Us</h5>
            <Link
              to={mapsLink}
              className="wrap-email text-decoration-none text-white"
            >
              <i
                className="fas fa-map-marker-alt me-2"
                style={{ color: "#fff689" }}
              ></i>{" "}
              {address}
            </Link>
            <Link
              to={`mailto:${brandEmail}`}
              className="wrap-email text-decoration-none text-white"
            >
              <i
                className="fas fa-envelope me-2"
                style={{ color: "#fff689" }}
              ></i>{" "}
              {brandEmail}
            </Link>
            <p>
              <i className="fas fa-phone-alt"></i> +{phoneNumber}
            </p>
            <div className="social-icons mt-3">
              <a href={facebook}>
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href={instagram}>
                <i className="fab fa-instagram"></i>
              </a>
              <a href={youtube}>
                <i className="fab fa-youtube"></i>
              </a>
              <a href={`https://wa.me/${phoneNumber}`}>
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
          <div className="text-center  border-top pt-3 copyright">
            <p>
              © 2025 {brandName}. All rights reserved. | Designed with ❤️ by{" "}
              <a
                className="text-decoration-none"
                href="https://nexgenwebdesigns.com"
              >
                NexGen Web Designs
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default YogaFooter;
