import React from "react";
import TopFooter from "./TopFooter/TopFooter";

import "./Footer.css";
import MidFooter from "./MidFooter/MidFooter";
import BottomFooter from "./BottomFooter/BottomFooter";

const Footer = () => {
  return (
    <footer className="footer bg-white">
      <TopFooter />
      <MidFooter />
      <BottomFooter />
    </footer>
  );
};

export default Footer;
