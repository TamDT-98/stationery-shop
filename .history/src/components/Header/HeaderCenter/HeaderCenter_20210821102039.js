import React from "react";

import Logo from "./Logo/Logo";
import "./HeaderCenter.css";
import Search from "./Search/Search";
import LeftContent from "./LeftContent/LeftContent";

const HeaderCenter = () => {
  return (
    <div className="row align-items-center ">
      <Logo />
      <Search />
      <LeftContent />
    </div>
  );
};

export default HeaderCenter;
