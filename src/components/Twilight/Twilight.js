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
    <div className="twilight-page">
      <h1>Paintings</h1>
      <p>Painting has been a main technique in my art for many years.
These days my interest in installation has increased, but I often
return to painting, insisting not to neglect my painting skills.</p>
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
