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
];

const YogaGallery = () => {
  return (
    <section className="overflow-hidden">
      {galleryMetaData}
      <div className="gallery-hero flex-column">
        <h2 className="text-white" data-aos="fade-left">
          Explore Our Yoga Journey
        </h2>
        <p className="text-white" data-aos="fade-left">
          Experience the essence of peace, posture, and presence.
        </p>
      </div>
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
