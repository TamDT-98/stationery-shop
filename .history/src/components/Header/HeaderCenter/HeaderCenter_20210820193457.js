import React from "react";

import Logo from "./Logo/Logo";
import "./HeaderCenter.css";
import Search from "./Search/Search";

const HeaderCenter = () => {
  return (
    <div className="HeaderCenter">
      <Logo>
        https://theme.hstatic.net/1000230347/1000729967/14/logo.png?v=956
      </Logo>
      <Search />
    </div>
  );
};

export default HeaderCenter;
