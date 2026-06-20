import React, { useState } from "react";
import "./OutdoorExhibitions.css";

const OutdoorExhibitions = () => {
  const images = [
    "/gallery/outdoorExhibitions/image1.jpg",
    "/gallery/outdoorExhibitions/image2.jpg",
    "/gallery/outdoorExhibitions/image3.jpg",
    "/gallery/outdoorExhibitions/image4.jpg",
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
    <div className="outdoor-exhibitions-page">
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
      <div className="outdoor-exhibitions-page-header">
        <h1>Outdoor Exhibitions</h1>
        <p>{currentIndex + 1} / {images.length}</p>
      </div>
      <div className="outdoor-exhibitions-gallery-container">
        <div className="outdoor-exhibitions-main">
          <img
            src={images[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
            className="outdoor-exhibitions-gallery-image"
            onClick={() => setViewMode(true)}
          />
        </div>
        <div className="outdoor-exhibitions-nav">
          <button onClick={handlePrev}>← Prev</button>
          <button onClick={handleNext}>Next →</button>
        </div>
        <div className="outdoor-exhibitions-preview">
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

export default OutdoorExhibitions;
