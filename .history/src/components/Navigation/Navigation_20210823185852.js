import React from "react";
import NavigationWrapper from "./NavigationWrapper/NavigationWrapper";
import Slider from "./Slider/Slider";

const Navigation = () => {
  return (
    <section className="section awe-section-1">
      <div className="container section px-md-0 mt-lg-0 mt-3">
        <div className="row">
          <div className="section awe-section-1">
            <NavigationWrapper />
            <Slider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navigation;
