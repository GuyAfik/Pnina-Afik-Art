import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery/Gallery";
import Paintings from "./components/Paintings/Paintings";
import GeoTechnicalCloth from "./components/GeoTechnicalCloth/GeoTechnicalCloth";
import ClothCompositions from "./components/ClothCompositions/ClothCompositions";
import OversizedInstallations from "./components/OversizedInstallations/OversizedInstallations";
import OutdoorExhibitions from "./components/OutdoorExhibitions/OutdoorExhibitions";
import Cubes from "./components/Cubes/Cubes";
import Exhibitions from "./components/Exhibitions/Exhibitions";
import WhereDidTheMorningDisappear from "./components/Exhibitions/WhereDidTheMorningDisappear";
import HidingPlace from "./components/Exhibitions/HidingPlace";
import HoldingTheFragments from "./components/Exhibitions/HoldingTheFragments";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/gallery/twilight" element={<Paintings />} />
          <Route path="/gallery/geoTechnicalCloth" element={<GeoTechnicalCloth />} />
          <Route path="/gallery/cloth-compositions" element={<ClothCompositions />} />
          <Route path="/gallery/oversized-installations" element={<OversizedInstallations />} />
          <Route path="/gallery/outdoor-exhibitions" element={<OutdoorExhibitions />} />
          <Route path="/gallery/cubes" element={<Cubes />} />
          <Route path="/exhibitions" element={<Exhibitions />} />
          <Route path="/exhibitions/where-did-the-morning-disappear" element={<WhereDidTheMorningDisappear />} />
          <Route path="/exhibitions/hiding-place" element={<HidingPlace />} />
          <Route path="/exhibitions/holding-the-fragments" element={<HoldingTheFragments />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
