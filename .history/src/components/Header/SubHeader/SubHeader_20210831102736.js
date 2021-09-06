import React from "react";

import SubHeaderItems from "./SubHeaderItems/SubHeaderItems";
import "./SubHeader.css";
import NavigationWrapper from "../../Navigation/NavigationWrapper/NavigationWrapper";

const SubHeader = (props) => {
  const [isHovering, setIsHovering] = React.useState(false);

  let attachedClasses = ["container drop-menu p-0"];

  if (isHovering === true) {
    attachedClasses = ["container drop-menu p-0", "active"];
  }

  attachedClasses.join(" ");

  const handleMouseEnter = (e) => {
    console.log(e);
    setIsHovering(true);
  };
  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  console.log(isHovering);

  return (
    <div className={props.className}>
      <div className="container px-md-0">
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="toogle-nav-wrapper"
        >
          <div className="icon-bar btn menu-bar mr-2 ml-0 p-0 d-inline-flex text-white">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          Danh sách sản phẩm
          <NavigationWrapper />
        </div>
        <ul className="shop-policises list-unstyled  d-flex align-items-center flex-wrap m-0 pr-0">
          <SubHeaderItems />
        </ul>
      </div>
    </div>
  );
};

export default SubHeader;
