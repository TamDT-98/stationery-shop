import React from "react";

const Logo = (props) => {
  return (
    <div>
      <img src={props.children} alt="Logo" />
    </div>
  );
};

export default Logo;
