import React from "react";

import "./Logo.css";

const Logo = () => {
  return (
    <div className="col-3 col-lg-1 header-right">
      <a href="#" className="logo-wrapper">
        <img
          src="https://theme.hstatic.net/1000230347/1000729967/14/logo.png?v=956"
          alt="Logo"
          className="img-fluid"
        />
      </a>
    </div>
  );
};

export default Logo;
