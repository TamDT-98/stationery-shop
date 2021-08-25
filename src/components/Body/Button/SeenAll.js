import React from "react";

import "./SeenAll.css";

const SeenAll = (props) => {
  return (
    <div className="text-center my-3">
      <a className="btn btn-main" title="Xem tất cả" href={props.href}>
        Xem tất cả <i className="fas fa-chevron-right"></i>
      </a>
    </div>
  );
};

export default SeenAll;
