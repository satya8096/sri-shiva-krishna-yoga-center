import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router"; // make sure it's 'react-router-dom'
import { phoneNumber } from "./../Data/BrandData";
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

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
        <a className="navbar-brand text-white fw-bold mb-1" href="#">
          <i className="fas fa-spa me-2"></i>Sri Siva Rama Krishna Yoga Center
        </a>

        <button
          className="navbar-toggler mb-4"
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
              <NavLink className="nav-link text-white" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/classes">
                Classes
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/gallery">
                Gallery
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/blogs">
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/contact">
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <Link className="btn btn-join-now text-dark fw-bold px-4 py-2">
                Join Now
              </Link>
            </li>
            <li className="nav-item">
              <Link className="btn btn-join-now  text-dark fw-bold px-4 py-2">
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
