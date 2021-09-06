import React from "react";

import NavigationWrapper from "./NavigationWrapper/NavigationWrapper";
import Slider from "./Slider/Slider";
import "./Navigation.css";
import Brand from "../Brand/Brand";

const Navigation = () => {
  return (
    <section className="section awe-section-1">
      <div className="container section px-md-0 mt-lg-0 mt-3">
        <div className="row">
          {/* <NavigationWrapper /> */}
          <Slider />
        </div>
      </div>
    </section>
  );
};

export default Navigation;
