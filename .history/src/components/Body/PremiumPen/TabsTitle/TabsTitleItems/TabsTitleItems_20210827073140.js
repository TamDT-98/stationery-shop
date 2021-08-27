import React from "react";

import "./TabsTitleItems.css";

const TabsTitleItems = (props) => {
  return (
    <li className="ega-small tab-link px-3 py-2 link  current">
      {props.title}
    </li>
  );
};

export default TabsTitleItems;
