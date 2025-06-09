import React from "react";
import {
  phoneNumber,
  brandEmail,
  mapsLink,
  address,
  instagram,
  facebook,
  youtube,
} from "../Data/BrandData";
import { Link } from "react-router";
import { contactMetaData } from "../Data/MetaSEOdata";
const socialLinks = [
  {
    name: "Instagram",
    icon: "fab fa-instagram",
    url: instagram,
    color: "#E1306C",
  },
  {
    name: "Facebook",
    icon: "fab fa-facebook-f",
    url: facebook,
    color: "#3b5998",
  },
  {
    name: "YouTube",
    icon: "fab fa-youtube",
    url: youtube,
    color: "#ff0000",
  },
  {
    name: "WhatsApp",
    icon: "fab fa-whatsapp",
    url: `https://wa.me/${phoneNumber}`,
    color: "#25D366",
  },
];

const ContactPage = () => {
  return (
    <div className="contact-wrapper">
      {contactMetaData}
      <header className="contact-header overflow-hidden">
        <h2 data-aos="fade-left">Contact Us</h2>
        <p data-aos="fade-left">
          We'd love to hear from you! Reach out to start your yoga journey with
          us.
        </p>
      </header>

      <section className="contact-section">
        <div className="contact-info">
          <h3 className="section-heading" data-aos="fade">
            Our Studio
          </h3>
          <div className="info-item">
            <strong data-aos="fade">Phone</strong>
            <p data-aos="fade">+{phoneNumber}</p>
          </div>
          <div className="info-item">
            <strong data-aos="fade">Email</strong>
            <Link
              data-aos="fade wrap-email"
              to={`mailto:${brandEmail}`}
              className="wrap-email text-decoration-none text-dark"
            >
              {brandEmail}
            </Link>
          </div>
          <div className="info-item">
            <strong data-aos="fade">Location</strong>
            <p data-aos="fade">{address}</p>
            <p data-aos="fade">
              Maps: <Link to={mapsLink}>Click Here</Link>
            </p>
          </div>
        </div>
        <div className="contact-form">
          <h3 className="section-heading" data-aos="fade">
            Branch Address
          </h3>
          <img
            src={require("./../Assets/img12.jpeg")}
            alt="Yoga"
            width={"100%"}
            style={{ margin: "1rem 0rem" }}
            loading="lazy"
            className="img-fluid rounded"
            data-aos="fade"
          />
          <p data-aos="fade">
            Full Address : Sri Siva Rama Krishna Yoga Center, Dell Exclusive
            Store computer shoppe, Sarojini Naidu St, beside S.B.I ATM, beside
            Town church Road, Kothapet, Ramalingeswara Pet, Tenali, Andhra
            Pradesh 522201
          </p>
        </div>

        <div className="contact-form d-none">
          <h3 className="section-heading">Send a Message</h3>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea rows="5" placeholder="Your Message" required></textarea>
            <button type="submi">Submit</button>
          </form>
        </div>
      </section>

      <section className="map-section" data-aos="fade">
        <h3 className="section-heading">Find Us Here</h3>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7661.464559344193!2d80.651834!3d16.2341975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a060a492374ef%3A0x992152d74d848a!2sSri%20Siva%20Rama%20Krishna%20Yoga%20Center!5e0!3m2!1sen!2sin!4v1749140446651!5m2!1sen!2sin"
            width="100%"
            height="400"
            allowFullScreen=""
            loading="lazy"
            title="Yoga Studio Location"
          ></iframe>
        </div>
      </section>

      <section className="social-media-section">
        <h3 className="section-heading" data-aos="fade">
          Connect with Us
        </h3>
        <div className="social-icons" data-aos="fade">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="social-icon text-decoration-none"
              style={{ color: link.color }}
              title={link.name}
            >
              <i className={link.icon}></i>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
