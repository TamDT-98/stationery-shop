import React from "react";
import TopFooter from "./TopFooter/TopFooter";

import "./Footer.css";
import MidFooter from "./MidFooter/MidFooter";

const Footer = () => {
  return (
    <footer className="footer bg-white">
      <TopFooter />
      <MidFooter />
    </footer>
  );
};

export default Footer;
