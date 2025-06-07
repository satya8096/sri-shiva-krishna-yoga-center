import React from "react";
import { galleryMetaData } from "../Data/MetaSEOdata";
import { brandName } from "../Data/BrandData";

export const galleryImages = [
  {
    url: require("./../Assets/img2.jpeg"),
  },
  {
    url: require("./../Assets/img3.jpeg"),
  },
  {
    url: require("./../Assets/img1.jpeg"),
  },
  {
    url: require("./../Assets/img5.jpeg"),
  },
  {
    url: require("./../Assets/img10.jpeg"),
  },
  {
    url: require("./../Assets/img11.jpeg"),
  },
  {
    url: require("./../Assets/img13.jpeg"),
  },
  {
    url: require("./../Assets/img14.jpeg"),
  },
  {
    url: require("./../Assets/img15.jpeg"),
  },
  {
    url: require("./../Assets/img16.jpeg"),
  },
  {
    url: require("./../Assets/img17.jpeg"),
  },
  {
    url: require("./../Assets/img18.jpeg"),
  },
  {
    url: require("./../Assets/img19.jpeg"),
  },
  {
    url: require("./../Assets/img20.jpeg"),
  },
  {
    url: require("./../Assets/img21.jpeg"),
  },
  {
    url: require("./../Assets/img22.jpeg"),
  },
];

const YogaGallery = () => {
  return (
    <section className="overflow-hidden">
      {galleryMetaData}
      <div className="gallery-hero flex-column text-center">
        <h2 className="text-white" data-aos="fade-left">
          Explore Our Yoga Journey
        </h2>
        <p className="text-white" data-aos="fade-left">
          Experience the essence of peace, posture, and presence.
        </p>
      </div>
      <section className="video-section">
        <div className="video-overlay">
          <h3 className="video-title section-heading">Our Yoga's Gallery</h3>
          <p className="video-description">
            Discover the serenity and strength that comes with every yoga
            session at our center.
          </p>
        </div>
        <div className="video-wrapper">
          <video className="video-player" autoPlay muted loop>
            <source src="./video1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
      <di className="yoga-gallery-section">
        <div className="gallery-grid">
          {galleryImages.map((img, index) => (
            <div className="gallery-card" key={index} data-aos="zoom-in">
              <img
                src={img.url}
                alt={img.title}
                className="gallery-img"
                loading="lazy"
              />
              <div className="gallery-overlay">
                <h4>{brandName}</h4>
              </div>
            </div>
          ))}
        </div>
      </di>
    </section>
  );
};

export default YogaGallery;
