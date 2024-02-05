// Paintings.js

import React, { useState } from "react";
import "./Paintings.css";

const Paintings = () => {
  const images = [
    "/gallery/paintings/image1.jpg",
    "/gallery/paintings/image2.jpg",
    "/gallery/paintings/image3.jpg",
    "/gallery/paintings/image4.jpg",
    "/gallery/paintings/image5.jpg",
    "/gallery/paintings/image6.jpg",
    "/gallery/paintings/image7.jpg",
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
    <div className="paintings-page">
      <h1>Paintings</h1>
      <p>Painting has been a main technique in my art for many years. These days my interest in installation has increased, but I often return to painting, insisting not to neglect my painting skills.</p>
      <div className="paintings-gallery-container">
        <div className="paintings-preview">
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
        <div className="paintings-main">
          <button onClick={handlePrev}>&lt; Prev</button>
          <img
            src={images[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
            className="paintings-gallery-image"
          />
          <button onClick={handleNext}>Next &gt;</button>
        </div>
      </div>
    </div>
  );
};

export default Paintings;
