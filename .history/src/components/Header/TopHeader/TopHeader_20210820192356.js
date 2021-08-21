import React from "react";

const TopHeader = (props) => {
  return (
    <div>
      <img src={props.children} alt="Top Header" />
    </div>
  );
};

export default TopHeader;
