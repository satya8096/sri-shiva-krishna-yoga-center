import React from "react";
import ClassesSchedule from "../Components/ClassesSchedule";
import { classesMetaData } from "../Data/MetaSEOdata";
import { Link } from "react-router";
import { services } from "../Data/OthersData";

const Classes = () => {
  return (
    <div className="">
      {classesMetaData}
      {/* Header Section */}
      <section className="text-center mb-5 classes-hero flex-column overflow-hidden">
        <h3 className="text-white" data-aos="fade-left">
          Explore Our Yoga Programs
        </h3>
        <p className="text-white" data-aos="fade-left">
          Tailored sessions to support your physical, mental, and spiritual
          well-being.
        </p>
      </section>

      <div className="text-center">
        <img src={require("./../Assets/img22.jpeg")} width={"80%"} alt="yoga" />
      </div>

      {/* Services Grid */}
      <div className="row g-4 container">
        {services.map((service, index) => (
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

      <ClassesSchedule />

      {/* Call to Action */}
      <section className="mt-5 text-center mb-5">
        <h3 className="mb-3 section-heading" data-aos="fade">
          Ready to Start Your Yoga Journey?
        </h3>
        <p className="text-muted mb-4" data-aos="fade">
          Whether you're new or experienced, we have a program designed just for
          you.
        </p>
        <Link
          to="/contact"
          className="btn btn-primary px-4 py-2"
          data-aos="fade"
        >
          Book a Free Trial
        </Link>
      </section>
    </div>
  );
};

export default Classes;
