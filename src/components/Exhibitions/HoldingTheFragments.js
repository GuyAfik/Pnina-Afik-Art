import React, { useState } from "react";
import "./ExhibitionGallery.css";

const HoldingTheFragments = () => {
  const images = [
    "/exhibitions/holdingTheFragments/image1.jpg",
    "/exhibitions/holdingTheFragments/image3.jpg",
    "/exhibitions/holdingTheFragments/image4.jpg",
    "/exhibitions/holdingTheFragments/image5.jpg",
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
    <div className="exhibition-gallery-page">
      {viewMode && (
        <div className="better-view-mode">
          <button className="close-button" onClick={handleCloseViewMode}>
            Close
          </button>
          <img
            src={images[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
            className="better-view-image"
          />
          <div className="better-view-controls">
            <button className="prev-button" onClick={handlePrev}>
              ← Prev
            </button>
            <button className="next-button" onClick={handleNext}>
              Next →
            </button>
          </div>
        </div>
      )}
      <div className="exhibition-gallery-page-header">
        <h1>Holding The Fragments</h1>
        <p>Palazzo Mora, Venice — Personal Structures Project alongside the Art Biennale</p>
      </div>
      <div className="exhibition-gallery-container">
        <div className="exhibition-gallery-main">
          <img
            src={images[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
            className="exhibition-gallery-image"
            onClick={() => setViewMode(true)}
          />
        </div>
        <div className="exhibition-gallery-nav">
          <button onClick={handlePrev}>← Prev</button>
          <button onClick={handleNext}>Next →</button>
        </div>
        <div className="exhibition-gallery-preview">
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
      </div>
    </div>
  );
};

export default HoldingTheFragments;
