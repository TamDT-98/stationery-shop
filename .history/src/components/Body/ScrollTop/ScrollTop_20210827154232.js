import React from "react";

import "./ScrollTop.css";

const ScrollTop = (props) => {
  return (
    <div>
      <div
        className={props.showScrollTop()}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <i className="fas fa-angle-up"></i>
      </div>
    </div>
  );
};

export default ScrollTop;
