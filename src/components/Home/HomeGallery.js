import React, { useState } from "react";
import "./HomeGallery.css";

const HomeGallery = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="home-gallery-container">
      <button className="home-gallery-arrow home-gallery-arrow-left" onClick={handlePrev}>
        &#8249;
      </button>
      <img
        src={images[currentIndex]}
        alt={`Image ${currentIndex + 1}`}
        className="home-gallery-image"
      />
      <button className="home-gallery-arrow home-gallery-arrow-right" onClick={handleNext}>
        &#8250;
      </button>
    </div>
  );
};

export default HomeGallery;
