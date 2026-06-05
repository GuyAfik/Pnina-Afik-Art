import React, { useState } from "react";
import "./Cubes.css";

const Cubes = () => {
  const images = [
    "/gallery/cubes/image1.jpg",
    "/gallery/cubes/image2.jpg",
    "/gallery/cubes/image3.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewMode, setViewMode] = useState(false);

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
    setViewMode(true);
  };

  const handleCloseViewMode = () => {
    setViewMode(false);
  };

  return (
    <div className="cubes-page">
      {viewMode && (
        <div className="better-view-mode">
          <button className="close-button" onClick={handleCloseViewMode}>
            X
          </button>
          <img
            src={images[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
            className="better-view-image"
          />
          <button className="prev-button" onClick={handlePrev}>
            &lt; Prev
          </button>
          <button className="next-button" onClick={handleNext}>
            Next &gt;
          </button>
        </div>
      )}
      <div className="cubes-gallery-container">
        <div className="cubes-preview">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Preview ${index + 1}`}
              className={`thumbnail ${
                index === currentIndex ? "active" : ""
              }`}
              onClick={() => handleThumbnailClick(index)}
            />
          ))}
        </div>
        <div className="cubes-main">
          <img
            src={images[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
            className="cubes-gallery-image"
            onClick={() => setViewMode(true)}
          />
        </div>
      </div>
    </div>
  );
};

export default Cubes;
