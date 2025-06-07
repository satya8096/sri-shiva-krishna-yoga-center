import React, { useEffect, useState } from "react";
import { phoneNumber } from "../Data/BrandData";

const FloatingButtons = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const whatsappNumber = phoneNumber;

  return (
    <div className="floating-buttons">
      {showTop && (
        <button className="top-button" onClick={scrollToTop} data-aos="zoom-in">
          <i className="fa-solid fa-arrow-up"></i>
        </button>
      )}
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-button"
        data-aos="zoom-in"
      >
        <img
          src="https://img.icons8.com/color/48/000000/whatsapp--v1.png"
          alt="WhatsApp"
        />
      </a>
    </div>
  );
};

export default FloatingButtons;
