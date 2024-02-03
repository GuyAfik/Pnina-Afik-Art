import React, { useState } from "react";
import "./HomeGallery.css";


const Gallery = ({ images }) => {
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
      <div className="home-gallery-buttons">
        <button onClick={handlePrev}>&lt; Prev</button>
        <button onClick={handleNext}>Next &gt;</button>
      </div>
      <img
        src={images[currentIndex]}
        alt={`Image ${currentIndex}`}
        style={{ maxHeight: "100vh", maxWidth: "100%", objectFit: "contain" }}
      />
    </div>
  );
};

export default Gallery;
