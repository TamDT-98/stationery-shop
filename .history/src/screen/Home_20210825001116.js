import React from "react";
import Banner from "../components/Body/Banner/Banner";

import Flashsale from "../components/Body/FlashSale/Flashsale";
import ProductNew from "../components/Body/ProductNew/ProductNew";
import ProjectBanner from "../components/Body/ProjectBanner/ProjectBanner";
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
      <ProductNew />
      <ProjectBanner />
    </div>
  );
};

export default Home;
