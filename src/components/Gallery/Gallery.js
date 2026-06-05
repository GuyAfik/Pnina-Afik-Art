// Gallery.js

import React from "react";
import { Link } from "react-router-dom";
import "./Gallery.css"; // Import your CSS file for styling

const Gallery = () => {
  const galleryData = [
    {
      id: 1,
      headline: "Paintings",
      imageSrc: "/gallery/paintings/image4.jpg",
      to: "/gallery/twilight",
    },
    // {
    //   id: 2,
    //   headline: "Branches And Stockings",
    //   imageSrc: "/gallery/BranchesAndStockings/image1.jpg",
    //   to: "/gallery/branches-and-stockings",
    // },
    {
      id: 2,
      headline: "Cloth Compositions",
      imageSrc: "/gallery/clothCompositions/image1.jpg",
      to: "/gallery/cloth-compositions",
    },
    {
      id: 3,
      headline: "Geotextile",
      imageSrc: "/gallery/geoTechnicalCloth/image1.jpg",
      to: "/gallery/geoTechnicalCloth",
    },
    {
      id: 4,
      headline: "Oversized Installations",
      imageSrc: "/gallery/oversizedInstallations/image1.jpg",
      to: "/gallery/oversized-installations",
    },
    {
      id: 5,
      headline: "Outdoor Exhibitions",
      imageSrc: "/gallery/outdoorExhibitions/image1.jpg",
      to: "/gallery/outdoor-exhibitions",
    },
    {
      id: 6,
      headline: "Cubes",
      imageSrc: "/gallery/cubes/image1.jpg",
      to: "/gallery/cubes",
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
