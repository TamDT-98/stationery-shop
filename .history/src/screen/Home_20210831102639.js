import React from "react";

import Banner from "../components/Body/Banner/Banner";
import Flashsale from "../components/Body/FlashSale/Flashsale";
import LearningTools from "../components/Body/LearningTools/LearningTools";
import PremiumPen from "../components/Body/PremiumPen/PremiumPen";
import ProductNew from "../components/Body/ProductNew/ProductNew";
import ProjectBanner from "../components/Body/ProjectBanner/ProjectBanner";
import Brand from "../components/Brand/Brand";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Navigation from "../components/Navigation/Navigation";
import ScrollTop from "../components/Body/ScrollTop/ScrollTop";
import "./Home.css";
import SubHeader from "../components/Header/SubHeader/SubHeader";

const Home = () => {
  const [isShowScroll, setIsShowScroll] = React.useState(false);
  const scrollTop = () => {
    if (window.scrollY >= 500) {
      setIsShowScroll(true);
    } else {
      setIsShowScroll(false);
    }
  };

  const ShowScroll = () => {
    if (isShowScroll) {
      return "ScrollTop ScrollTop-active";
    } else {
      return "ScrollTop";
    }
  };

  window.addEventListener("scroll", scrollTop);
  return (
    <div className="Home">
      <Header />
      <SubHeader />
      <Navigation />
      <Brand />
      <Flashsale />
      <Banner />
      <ProductNew />
      <ProjectBanner />
      <LearningTools />
      <PremiumPen />
      <Footer />
      <ScrollTop showScrollTop={ShowScroll} />
    </div>
  );
};

export default Home;
