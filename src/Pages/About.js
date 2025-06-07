import React from "react";
import TestimonialCarousel from "../Components/Testimonial";
import { aboutMetaData } from "../Data/MetaSEOdata";
import { Link } from "react-router";

const AboutUs = () => {
  return (
    <div className="about-us-page">
      {aboutMetaData}
      {/* Hero Section */}
      <section className="about-hero overflow-hidden">
        <div className="text-center text-white" data-aos="fade-left">
          <h2>About Us</h2>
          <p>Transforming lives through yoga and mindfulness</p>
        </div>
      </section>
      {/* Who We Are Section */}
      <section className="who-we-are d-flex align-items-center justify-content-around overflow-hidden">
        <div
          className="who-we-are-section image-section mb-3"
          data-aos="fade-right"
        >
          <img
            src={require("./../Assets/img6.jpeg")}
            alt="Yoga Team"
            loading="lazy"
          />
        </div>
        <div className="who-we-are-section" data-aos="fade-left">
          <h3>Who We Are</h3>
          <p>
            Since 1997, We are a passionate team of certified yoga instructors,
            wellness coaches, and mindfulness practitioners. Our studio is a
            peaceful sanctuary where individuals of all ages and fitness levels
            come together to restore balance, gain flexibility, and connect with
            their inner selves.
          </p>
          <p>
            Our journey began with a simple vision: to create a space where
            people could breathe, stretch, and heal—both physically and
            mentally.
          </p>
        </div>
      </section>
      {/* Mission & Vision */}
      <section className="mission-vision">
        <div className="block">
          <div className="text-center" data-aos="zoom-in">
            <img
              src={require("./../Assets/yoga_img_1.avif")}
              style={{ width: "50%" }}
              alt="yoga-image"
              loading="lazy"
            />
          </div>

          <h3 className="text-center" data-aos="fade">
            🌱 Our Mission
          </h3>
          <p data-aos="fade">
            To guide individuals toward a healthier, more peaceful life through
            the ancient practice of yoga and modern holistic methods.
          </p>
        </div>
        <div className="block">
          <div className="text-center" data-aos="zoom-in">
            <img
              src={require("./../Assets/yoga_img_3.avif")}
              style={{ width: "50%" }}
              alt="yoga-image"
              loading="lazy"
            />
          </div>

          <h3 className="text-center" data-aos="fade">
            🌟 Our Vision
          </h3>
          <p data-aos="fade">
            A world where everyone experiences wellness, clarity, and
            connection—one mindful breath at a time.
          </p>
        </div>
      </section>
      <TestimonialCarousel />

      <section className="cta-section">
        <div className="cta-content">
          <h3 className="section-heading text-white" data-aos="fade">
            Ready to Begin Your Yoga Journey?
          </h3>
          <p data-aos="fade">
            Join our community of mindful individuals and experience the
            transformation. Whether you're a beginner or a seasoned yogi,
            there's a space for you here.
          </p>
          <Link to="/contact" className="cta-btn" data-aos="fade">
            Join Us Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
