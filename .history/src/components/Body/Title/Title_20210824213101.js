import React from "react";

const Title = (props) => {
  return (
    <div className="title_module_main heading-bar d-flex justify-content-between align-items-center">
      <h2 className="heading-bar__title">
        <a className="link" href={props.href} title={props.title}>
          {props.title}
        </a>
      </h2>
    </div>
  );
};

export default Title;
