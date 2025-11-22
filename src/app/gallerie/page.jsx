import React from "react";
import Navbar from "../../components/Navbar";
import Contact from "../../components/Contact";
import Map from "../../components/Map";
import Gallery from "../../components/Gallery";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Gallery />
      <Map />
      <Contact />
    </div>
  );
};

export default Home;
