import React from "react";
import TopFooter from "./TopFooter/TopFooter";

import "./Footer.css";
import MidFooter from "./MidFooter/MidFooter";
import BottomFooter from "./BottomFooter/BottomFooter";
import HomeParnter from "../Body/HomeParnter/HomeParnter";

const Footer = () => {
  return (
    <footer className="footer bg-white">
      <HomeParnter />
      <TopFooter />
      <MidFooter />
      <BottomFooter />
    </footer>
  );
};

export default Footer;
