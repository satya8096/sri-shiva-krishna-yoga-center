import React from "react";
import { services } from "./../Data/OthersData";
import ClassesSchedule from "../Components/ClassesSchedule";
import Testimonials from "../Components/Testimonial";
import { Link } from "react-router";
import BlogSection from "../Components/BlogPostHome";
import { homeMetaData } from "../Data/MetaSEOdata";
import { galleryImages } from "./Gallery";
import { benefits } from "../Data/OthersData";

const Home = () => {
  return (
    <div>
      {homeMetaData}
      {/* Hero Section */}
      <section className="hero-section overflow-hidden">
        <div className="overlay"></div>
        <div className="hero-content container" data-aos="fade-left">
          <h2 className="">Breathe. Stretch. Relax.</h2>
          <p className="">
            Discover inner peace and strength with our expert-guided yoga
            sessions.
          </p>
          <div className="hero-buttons">
            <Link className="btn btn-primary">Join a Class</Link>
            <Link to="/classes" className="btn btn-outline">
              Learn More
            </Link>
          </div>
        </div>
      </section>
      {/* About Yoga Center Section */}
      <section className="about-section pt-5 pb-5 overflow-hidden">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0" data-aos="fade-right">
              <img
                src={require("./../Assets/img12.jpeg")}
                alt="Yoga"
                width={"80%"}
                style={{ margin: "1rem 0rem" }}
                loading="lazy"
                className="img-fluid rounded"
              />
            </div>
            <div
              className="col-md-6"
              data-aos="fade-left"
              style={{ textAlign: "left" }}
            >
              <h3 className="p-2">About Our Yoga Center</h3>
              <p className="text-muted mt-3 p-2">
                At Divine Yoga Center, we blend traditional techniques with
                modern mindfulness practices. Our certified instructors guide
                every session with compassion, experience, and purpose.
              </p>
              <ul className="list-unstyled mt-4 p-2">
                <li className="mb-2">
                  <i className="fas fa-check-circle text-success me-2"></i>
                  Certified Yoga Instructors
                </li>
                <li className="mb-2">
                  <i className="fas fa-check-circle text-success me-2"></i>
                  Peaceful, Nature-Inspired Environment
                </li>
                <li className="mb-2">
                  <i className="fas fa-check-circle text-success me-2"></i>
                  Beginner to Advanced Classes
                </li>
              </ul>
              <Link to="/classes" className="btn btn-primary mt-3 ms-2">
                Explore Our Classes
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="homepage container">
        {/* Services Overview Section */}
        <section className="services-section text-center">
          <h3 className="section-heading" data-aos="fade">
            Our Services
          </h3>
          <p className="section-subtext" data-aos="fade">
            Empowering mind, body, and soul through holistic yoga sessions.
          </p>

          {/* Services Grid */}
          <div className="row g-4">
            {services.slice(0, 6).map((service, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <div className="h-100" data-aos="zoom-in">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="card-img-top"
                    loading="lazy"
                    style={{
                      height: "220px",
                      objectFit: "cover",
                      borderRadius: "2rem",
                    }}
                  />
                  <div className="card-body text-center">
                    <h5 className="fw-bold mb-2">{service.title}</h5>
                    <p className="text-muted">{service.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div>
            <Link className="btn btn-warning">See More Services</Link>
          </div>
        </section>

        <ClassesSchedule />
      </div>

      <section className="benefits-section">
        <div className="bg-shape-1"></div>
        <div className="bg-shape-2"></div>

        <div className="container">
          <h3 className="section-heading" data-aos="fade">
            Benefits of Yoga
          </h3>
          <p className="section-subtitle" data-aos="fade">
            Empower your body and mind through holistic wellness
          </p>

          <div className="benefits-grid">
            {benefits.map((item, index) => (
              <div key={index} className="benefit-card">
                <div data-aos="zoom-in">
                  <span style={{ fontSize: "2.5rem" }} className="mb-3">
                    {item.icon}
                  </span>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="explore-section mt-5">
        <div className="container">
          <h3 className="section-heading" data-aos="fade">
            Explore Our Studio
          </h3>
          <p className="explore-subtitle" data-aos="fade">
            Step into a peaceful, inspiring space where transformation begins.
          </p>

          <div className="gallery-grid">
            {galleryImages.slice(0, 6).map((img, idx) => (
              <div className="gallery-item" key={idx} data-aos="zoom-in">
                <img src={img.url} alt={`Studio ${idx + 1}`} loading="lazy" />
              </div>
            ))}
          </div>
          <div className="mb-4" style={{ marginTop: "4rem" }} data-aos="fade">
            <Link className="view-more-btn btn " to={"/gallery"}>
              See More Images
            </Link>
          </div>
        </div>
      </section>

      <Testimonials />
      <section class="join-section">
        <div className="join-section .join-content" data-aos="fade">
          <h2 className="section-heading">Join the Yoga Journey Today</h2>
          <p>
            Flexible memberships that fit your lifestyle. Start your wellness
            journey now.
          </p>
          <Link className="btn btn-join" to={"/contact"}>
            Get Started
          </Link>
        </div>
      </section>

      <BlogSection />
    </div>
  );
};

export default Home;
