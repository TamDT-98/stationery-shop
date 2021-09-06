import React from "react";

import SubHeaderItems from "./SubHeaderItems/SubHeaderItems";
import "./SubHeader.css";
import NavigationWrapper from "../../Navigation/NavigationWrapper/NavigationWrapper";

const SubHeader = () => {
  return (
    <div className="subheader">
      <div className="container px-md-0">
        <div className="toogle-nav-wrapper">
          <div className="icon-bar btn menu-bar mr-2 ml-0 p-0 d-inline-flex text-white">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          Danh sách sản phẩm
          {/* <NavigationWrapper /> */}
        </div>
        <ul className="shop-policises list-unstyled  d-flex align-items-center flex-wrap m-0 pr-0">
          <SubHeaderItems />
        </ul>
      </div>
    </div>
  );
};

export default SubHeader;
