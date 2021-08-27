import React from "react";
import TabsTitle from "../PremiumPen/TabsTitle/TabsTitle";

const Title = (props) => {
  return (
    <h2 className="heading-bar__title">
      <a className="link" href={props.href} title={props.title}>
        {props.title}
      </a>
    </h2>
  );
};

export default Title;
