// Twilight.js

import React, { useState } from "react";
import "./Twilight.css";

const Twilight = () => {
  const images = [
    "/gallery/twilight/image1.jpg",
    "/gallery/twilight/image2.jpg",
    "/gallery/twilight/image3.jpg",
    "/gallery/twilight/image4.jpg",
    "/gallery/twilight/image5.jpg",
    "/gallery/twilight/image6.jpg",
    "/gallery/twilight/image7.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div>
      <h1>Twilight</h1>
      <p>This is some text on the top of the page.</p>
      <div className="twilight-gallery-container">
        <div className="twilight-preview">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Preview ${index + 1}`}
              className={`thumbnail ${index === currentIndex ? "active" : ""}`}
              onClick={() => handleThumbnailClick(index)}
            />
          ))}
        </div>
        <div className="twilight-main">
          <button onClick={handlePrev}>&lt; Prev</button>
          <img
            src={images[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
            className="twilight-gallery-image"
          />
          <button onClick={handleNext}>Next &gt;</button>
        </div>
      </div>
    </div>
  );
};

export default Twilight;
