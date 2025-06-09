import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router"; // make sure it's 'react-router-dom'
import { brandName, phoneNumber } from "./../Data/BrandData";
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleNavCollapse = () => {
    if (window.innerWidth <= 1100) {
      const navbarToggler = document.querySelector(".navbar-toggler");
      if (
        navbarToggler &&
        navbarToggler.getAttribute("aria-expanded") === "true"
      ) {
        navbarToggler.click();
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={`navbar-yoga overflow-hidden navbar navbar-expand-lg fixed-top ${
        scrolled ? "navbar-scrolled" : ""
      }`}
    >
      <div
        className="container d-flex flex-column align-items-center"
        data-aos="fade-down"
      >
        <a className="navbar-brand text-white fw-bold" href="/">
          <img
            src={require("./../Assets/yoga_logo.png")}
            alt="logo"
            style={{ width: "3rem" }}
          />{" "}
          {brandName}
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#yogaNavbar"
        >
          <i className="fa-solid fa-bars"></i>
        </button>

        <div
          className="collapse navbar-collapse justify-content-center"
          id="yogaNavbar"
        >
          <ul className="navbar-nav gap-4 text-center">
            <li className="nav-item">
              <NavLink
                className="nav-link text-white"
                to="/"
                onClick={handleNavCollapse}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link text-white"
                to="/about"
                onClick={handleNavCollapse}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link text-white"
                to="/classes"
                onClick={handleNavCollapse}
              >
                Classes
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link text-white"
                to="/gallery"
                onClick={handleNavCollapse}
              >
                Gallery
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link text-white"
                to="/blogs"
                onClick={handleNavCollapse}
              >
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link text-white"
                to="/contact"
                onClick={handleNavCollapse}
              >
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <Link
                to={`https://wa.me/${phoneNumber}`}
                className="btn btn-join-now text-dark fw-bold px-4 py-2"
              >
                Join Now
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={`tel:${phoneNumber}`}
                className="btn btn-join-now  text-dark fw-bold px-4 py-2"
              >
                +{phoneNumber}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
