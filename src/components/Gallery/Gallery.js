// Gallery.js

import React from "react";
import { Link } from "react-router-dom";
import "./Gallery.css"; // Import your CSS file for styling

const Gallery = () => {
  const galleryData = [
    {
      id: 1,
      headline: "Twilight",
      imageSrc: "/gallery/twilight/image1.jpg",
      to: "/twilight",
    },
    {
      id: 2,
      headline: "Pockets",
      imageSrc: "/gallery/twilight/image2.jpg",
      to: "/pockets",
    },
    // Add more photo data as needed
  ];

  return (
    <div className="gallery-container">
      <h1>Gallery</h1>
      {galleryData.map((item) => (
        <Link to={item.to} key={item.id} className="gallery-item">
          <img
            src={item.imageSrc}
            alt={item.headline}
            className="gallery-image"
          />
          <h2 className="gallery-headline">{item.headline}</h2>
        </Link>
      ))}
    </div>
  );
};

export default Gallery;
