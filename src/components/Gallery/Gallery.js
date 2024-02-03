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
      to: "/gallery/twilight",
    },
    {
      id: 2,
      headline: "Branches And Stockings",
      imageSrc: "/gallery/BranchesAndStockings/image1.jpg",
      to: "/gallery/branches-and-stockings",
    },
    {
      id: 3,
      headline: "Cloth Compositions",
      imageSrc: "/gallery/clothCompositions/image1.jpg",
      to: "/gallery/cloth-compositions",
    },
    {
      id: 4,
      headline: "Oversized Installations",
      imageSrc: "/gallery/oversizedInstallations/image1.jpg",
      to: "/gallery/oversized-installations",
    },
  ];

  return (
    
    <div className="gallery-container">
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
