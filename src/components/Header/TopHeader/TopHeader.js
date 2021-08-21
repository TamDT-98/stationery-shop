import React from "react";

import "./TopHeader.css";

const TopHeader = (props) => {
  return (
    <div className="TopHeader">
      <img src={props.children} alt="Top Header" />
    </div>
  );
};

export default TopHeader;
