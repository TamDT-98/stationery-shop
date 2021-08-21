import React from "react";

import "./Logo.css";

const Logo = (props) => {
  return (
    <div>
      <img src={props.children} alt="Logo" />
    </div>
  );
};

export default Logo;
