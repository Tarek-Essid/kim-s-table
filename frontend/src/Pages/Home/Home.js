import React from "react";
import "./Home.css";
import ttokke from "../assets/ttokkeHome.png";

const Home = () => {
  return (
    <div
      className="LandingPage"
      style={{
        backgroundImage: `url(${ttokke})`,
      }}></div>
  );
};

export default Home;
