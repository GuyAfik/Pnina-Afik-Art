// BranchesAndStockings.js
import React, { useState } from "react";
import "./BranchesAndStockings.css";

const BranchesAndStockings = () => {
  const images = [
    "/gallery/BranchesAndStockings/image1.jpg",
    "/gallery/BranchesAndStockings/image2.jpg",
    "/gallery/BranchesAndStockings/image3.jpg",
    "/gallery/BranchesAndStockings/image4.jpg",
    "/gallery/BranchesAndStockings/image5.jpg",
    "/gallery/BranchesAndStockings/image6.jpg",
    "/gallery/BranchesAndStockings/image7.jpg",
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
    <div className="branches-and-stockings-page">
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

      <h1>Branches and Stockings</h1>
      <p>
        I use branches or wood together with stuffed stockings, tying them up
        with ropes, creating a multi-material sculpture.
      </p>

      <div className="branches-and-stockings-gallery-container">
        <div className="branches-and-stockings-preview">
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
        <div className="branches-and-stockings-main">
          <img
            src={images[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
            className="branches-and-stockings-gallery-image"
            onClick={() => setViewMode(true)}
          />
        </div>
      </div>
    </div>
  );
};

export default BranchesAndStockings;
