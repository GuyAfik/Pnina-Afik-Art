import React, { useState } from "react";
import "./Paintings.css";

const Paintings = () => {
  const images = [
    "/gallery/paintings/image4.jpg",
    "/gallery/paintings/image5.jpg",
    "/gallery/paintings/image3.jpg",
    "/gallery/paintings/image2.jpg",
    "/gallery/paintings/image6.jpg",
    "/gallery/paintings/image7.jpg",
    "/gallery/paintings/image9.jpg",
    "/gallery/paintings/image10.jpg",
    "/gallery/paintings/image11.jpg",
    "/gallery/paintings/image12.jpg",
    "/gallery/paintings/image13.jpg",
    "/gallery/paintings/image14.jpg",
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
    <div className="paintings-page">
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
      <div className="paintings-page-header">
        <h1>Paintings</h1>
        <p>{currentIndex + 1} / {images.length}</p>
      </div>
      <div className="paintings-gallery-container">
        <div className="paintings-main">
          <img
            src={images[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
            className="paintings-gallery-image"
            onClick={() => setViewMode(true)}
          />
        </div>
        <div className="paintings-nav">
          <button onClick={handlePrev}>← Prev</button>
          <button onClick={handleNext}>Next →</button>
        </div>
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
      </div>
    </div>
  );
};

export default Paintings;
