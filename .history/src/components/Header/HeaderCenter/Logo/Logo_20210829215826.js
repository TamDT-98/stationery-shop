import React from "react";
import { Link } from "react-router-dom";

import "./Logo.css";

const Logo = () => {
  return (
    <div className="col-4 col-lg-2 header-right">
      <Link to="/" className="logo-wrapper">
        <img
          src="https://theme.hstatic.net/1000230347/1000729967/14/logo.png?v=956"
          alt="Logo"
          className="img-fluid"
        />
      </Link>
    </div>
  );
};

export default Logo;
