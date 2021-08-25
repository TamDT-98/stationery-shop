import React from "react";
import Flashsale from "../components/Body/Flashsale";
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
      <Flashsale />
    </div>
  );
};

export default Home;
