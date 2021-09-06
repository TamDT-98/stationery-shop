import React from "react";

import SubHeaderItems from "./SubHeaderItems/SubHeaderItems";
import "./SubHeader.css";

const SubHeader = () => {
  const [isHovering, setIsHovering] = React.useState(false);

  const handleMouseEnter = (e) => {
    console.log(e);

    setIsHovering(true);
  };
  console.log(isHover);

  return (
    <div className="subheader">
      <div className="container px-md-0">
        <div onMouseEnter={handleMouseEnter} className="toogle-nav-wrapper">
          <div className="icon-bar btn menu-bar mr-2 ml-0 p-0 d-inline-flex text-white">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          Danh sách sản phẩm
        </div>
        <ul className="shop-policises list-unstyled  d-flex align-items-center flex-wrap m-0 pr-0">
          <SubHeaderItems />
        </ul>
      </div>
    </div>
  );
};

export default SubHeader;
