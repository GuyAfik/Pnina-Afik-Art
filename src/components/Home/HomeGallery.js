import React, { useState, useEffect } from "react";
import "./HomeGallery.css";

const HomeGallery = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex, images.length]);

  return (
    <div className="home-gallery-container">
      <img
        src={images[currentIndex]}
        alt={`Image ${currentIndex}`}
        style={{ maxHeight: "100vh", maxWidth: "100%", objectFit: "contain" }}
      />
    </div>
  );
};

export default HomeGallery;
