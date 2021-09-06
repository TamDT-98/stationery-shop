import React from "react";

const AsideTitle = (props) => {
  return (
    <div className="aside-title">
      <h2 className="title-head margin-top-0">
        <span>{props.title}</span>
      </h2>
    </div>
  );
};

export default AsideTitle;
