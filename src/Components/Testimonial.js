import React, { useState, useEffect } from "react";
import { testimonials } from "../Data/TestimonialsData";
import { Link } from "react-router";

const TestimonialCarousel = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((current + 1) % testimonials.length);
  const prevSlide = () =>
    setCurrent((current - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <section className="testimonial-carousel-section">
      <div className="carousel-container">
        <h3 className="section-heading" data-aos="fade">
          What Our Members Say
        </h3>
        <div className="carousel-wrapper" data-aos="fade">
          <button onClick={prevSlide} className="carousel-btn prev">
            ‹
          </button>

          <div className="carousel-card">
            <img
              className="user-img"
              src={require("./../Assets/user.png")}
              alt={testimonials[current].name}
            />
            <Link
              to={testimonials[current].url}
              className="user-name d-block text-decoration-none"
            >
              {testimonials[current].name}
            </Link>
            <div className="stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <i
                  key={i}
                  className={`fas fa-star ${
                    i < testimonials[current].rating ? "filled" : ""
                  }`}
                ></i>
              ))}
            </div>
            <p className="user-review">“{testimonials[current].review}”</p>
          </div>

          <button onClick={nextSlide} className="carousel-btn next">
            ›
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
