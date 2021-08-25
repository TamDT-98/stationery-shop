import React from "react";

const SeenAll = (props) => {
  return (
    <div className="text-center my-3">
      <a className="btn btn-main" title="Xem tất cả" href={props.children}>
        Xem tất cả <i class="fas fa-chevron-right"></i>
      </a>
    </div>
  );
};

export default SeenAll;
