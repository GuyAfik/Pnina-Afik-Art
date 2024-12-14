// OversizedInstallations.js
import React, { useState } from "react";
import "./OversizedInstallations.css";

const OversizedInstallations = () => {
  const images = [
    "/gallery/oversizedInstallations/image1.jpg",
    "/gallery/oversizedInstallations/image2.jpg",
    "/gallery/oversizedInstallations/image3.jpg",
    "/gallery/oversizedInstallations/image4.jpg",
    "/gallery/oversizedInstallations/image5.jpg",
    "/gallery/oversizedInstallations/image6.jpg",
    "/gallery/oversizedInstallations/image7.jpg",
    "/gallery/oversizedInstallations/image8.jpg",
    "/gallery/oversizedInstallations/image9.jpg",
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
    <div className="oversized-installations-page">
      {viewMode && (
        <div className="better-view-mode">
          <button className="close-button" onClick={handleCloseViewMode}>
            X
          </button>
          <img
            src={images[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
            className="better-view-image"
            onClick={handleCloseViewMode} // Close view mode when clicking on the image
          />
          <button className="prev-button" onClick={handlePrev}>
            &lt; Prev
          </button>
          <button className="next-button" onClick={handleNext}>
            Next &gt;
          </button>
        </div>
      )}

      <h1>Oversized Installations</h1>
      <p>
        These installations are created by using various materials such as
        textiles, nets, and jute, which have undergone processes of cutting,
        sewing, dyeing, hardening and combined with branches and ropes. These
        artworks elevate the essence and presence of worldwide women.
      </p>

      <div className="oversized-installations-gallery-container">
        <div className="oversized-installations-preview">
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
        <div className="oversized-installations-main">
          <img
            src={images[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
            className="oversized-installations-gallery-image"
            onClick={() => setViewMode(true)}
          />
        </div>
      </div>
    </div>
  );
};

export default OversizedInstallations;
