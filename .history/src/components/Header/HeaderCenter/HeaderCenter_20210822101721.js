import React from "react";

import Logo from "./Logo/Logo";
import "./HeaderCenter.css";
import Search from "./Search/Search";
import LeftContent from "./LeftContent/LeftContent";

const HeaderCenter = () => {
  return (
    <div className="mid-header wid_100 d-flex align-items-center">
      <div className="container px-md-0">
        <div className="row align-items-center"></div>
      </div>
      <Logo />
      <Search />
      <LeftContent />
    </div>
  );
};

export default HeaderCenter;
