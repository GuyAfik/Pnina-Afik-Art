// ClothCompositions.js

import React, { useState } from "react";
import "./ClothCompositions.css";


const ClothCompositions = () => {
    const images = [
        "/gallery/clothCompositions/image1.jpg",
        "/gallery/clothCompositions/image2.jpg",
        "/gallery/clothCompositions/image3.jpg",
        "/gallery/clothCompositions/image4.jpg",
        "/gallery/clothCompositions/image5.jpg",
        "/gallery/clothCompositions/image6.jpg",
        "/gallery/clothCompositions/image7.jpg",
        "/gallery/clothCompositions/image8.jpg",
        "/gallery/clothCompositions/image9.jpg",
        "/gallery/clothCompositions/image10.jpg",
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
        <div className="cloth-compositions-page">
            <h1>Cloth compositions</h1>
            <p>I choose clothes from my wardrobe; I cut and create new
                compositions based on clothes fir my own wardrobe. Combining
                ropes, canvas, paint.</p>
            <div className="cloth-compositions-gallery-container">
                <div className="cloth-compositions-preview">
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
                <div className="cloth-compositions-main">
                    <button onClick={handlePrev}>&lt; Prev</button>
                    <img
                        src={images[currentIndex]}
                        alt={`Image ${currentIndex + 1}`}
                        className="cloth-compositions-gallery-image"
                    />
                    <button onClick={handleNext}>Next &gt;</button>
                </div>
            </div>
        </div>
    );
};

export default ClothCompositions;
