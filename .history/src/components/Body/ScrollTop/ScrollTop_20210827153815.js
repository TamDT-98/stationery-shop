import React from "react";

const ScrollTop = () => {
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
