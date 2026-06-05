import React, { useState } from "react";
import "./GeoTechnicalCloth.css";

const GeoTechnicalCloth = () => {
  const images = [
    "/gallery/geoTechnicalCloth/image1.jpg",
    "/gallery/geoTechnicalCloth/image2.jpg",
    "/gallery/geoTechnicalCloth/image3.jpg",
    "/gallery/geoTechnicalCloth/image4.jpg",
    "/gallery/geoTechnicalCloth/image5.jpg",
    "/gallery/geoTechnicalCloth/image6.jpg",
    "/gallery/geoTechnicalCloth/image7.jpg",
    "/gallery/geoTechnicalCloth/image8.jpg",
    "/gallery/geoTechnicalCloth/image9.jpg",
    "/gallery/geoTechnicalCloth/image10.jpg",
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
    <div className="geo-technical-page">
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
      <div className="geo-technical-gallery-container">
        <div className="geo-technical-preview">
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
        <div className="geo-technical-main">
          <img
            src={images[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
            className="geo-technical-gallery-image"
            onClick={() => setViewMode(true)}
          />
        </div>
      </div>
    </div>
  );
};

export default GeoTechnicalCloth;
