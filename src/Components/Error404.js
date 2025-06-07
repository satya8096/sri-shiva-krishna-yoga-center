import React from "react";
import { useNavigate } from "react-router";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="notfound-wrapper">
      <div className="notfound-content">
        <img
          src={require("./../Assets/404.avif")}
          alt="404 Yoga"
          className="notfound-image"
        />
        <h1 className="notfound-title">Oops! Page Not Found</h1>
        <p className="notfound-description">
          The page you are looking for doesn’t exist or has been moved. Take a
          deep breath, relax, and return to your inner peace.
        </p>
        <button className="notfound-btn" onClick={() => navigate("/")}>
          Go Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
