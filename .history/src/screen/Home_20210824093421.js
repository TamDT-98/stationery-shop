import React from "react";
import Brand from "../components/Brand/Brand";

import Header from "../components/Header/Header";
import Navigation from "../components/Navigation/Navigation";
import "./Home.css";

const Home = () => {
  return (
    <div className="Home">
      <Header />
      <Navigation />
      <Brand />
    </div>
  );
};

export default Home;
