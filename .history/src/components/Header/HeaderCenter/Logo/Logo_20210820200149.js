import React from "react";

import "./Logo.css";

const Logo = (props) => {
  return (
    <div className="Logo">
      <span>
        <img src={props.children} alt="Logo" className="search-icon" />
      </span>
    </div>
  );
};

export default Logo;
