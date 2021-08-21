import React from "react";

import Logo from "./Logo/Logo";
import "./HeaderCenter.css";
import Search from "./Search/Search";
import LeftContent from "./LeftContent/LeftContent";

const HeaderCenter = () => {
  return (
    <div className="mid-header wid_100 d-flex align-items-center">
      <div className="row">
        <Logo />
        <Search />
        <LeftContent />
      </div>
    </div>
  );
};

export default HeaderCenter;
