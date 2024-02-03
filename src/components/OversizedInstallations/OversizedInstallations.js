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
        <div className="oversized-installations-page">
            <h1>oversized installations</h1>
            <p>These installations are created by using various materials such as
                textiles, nets and jute , which have undergone processes of
                cutting, sewing, dyeing, hardening and combined with branches
                and ropes.
                These art works elevate the essence and presence of worldwide
                women.</p>
            <div className="oversized-installations-gallery-container">
                <div className="oversized-installations-preview">
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
                <div className="oversized-installations-main">
                    <button onClick={handlePrev}>&lt; Prev</button>
                    <img
                        src={images[currentIndex]}
                        alt={`Image ${currentIndex + 1}`}
                        className="oversized-installations-gallery-image"
                    />
                    <button onClick={handleNext}>Next &gt;</button>
                </div>
            </div>
        </div>
    );
};

export default OversizedInstallations;
