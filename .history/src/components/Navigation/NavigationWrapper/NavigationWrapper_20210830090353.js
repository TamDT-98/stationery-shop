import React from "react";

import NavigationWrapperItem from "./NavigationWrapperItem/NavigationWrapperItem";
import "./NavigationWrapper.css";

const NavigationWrapper = () => {
  return (
    <div className="col-lg-3 d-lg-block d-none navigation-wrapper pr-0">
      <ul className="navigation list-group list-group-flush scroll">
        <NavigationWrapperItem />
      </ul>
    </div>
  );
};

export default NavigationWrapper;
