import React from "react";
import Banner from "../components/Body/Banner/Banner";

import Flashsale from "../components/Body/FlashSale/Flashsale";
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
      <Banner />
    </div>
  );
};

export default Home;
