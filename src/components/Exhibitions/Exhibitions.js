import React from "react";
import { Link } from "react-router-dom";
import "./Exhibitions.css";

const Exhibitions = () => {
  const exhibitionsData = [
    {
      id: 1,
      headline: "Where Did The Morning Disappear",
      imageSrc: "/exhibitions/whereDidTheMorningDisappear/image1.jpg",
      to: "/exhibitions/where-did-the-morning-disappear",
    },
    {
      id: 2,
      headline: "Hiding Place",
      imageSrc: "/exhibitions/hidingPlace/image1.jpg",
      to: "/exhibitions/hiding-place",
    },
    {
      id: 3,
      headline: "Holding The Fragments",
      imageSrc: "/exhibitions/holdingTheFragments/image1.jpg",
      to: "/exhibitions/holding-the-fragments",
    },
  ];

  return (
    <div className="exhibitions-container">
      {exhibitionsData.map((item) => (
        <Link to={item.to} key={item.id} className="exhibitions-item">
          <img
            src={item.imageSrc}
            alt={item.headline}
            className="exhibitions-image"
          />
          <h2 className="exhibitions-headline">{item.headline}</h2>
        </Link>
      ))}
    </div>
  );
};

export default Exhibitions;
