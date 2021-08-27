import React from "react";

import TabsTitleItems from "./TabsTitleItems/TabsTitleItems";
import "./TabsTitle.css";

const TabsTitle = () => {
  return (
    <ul className="tabs tabs-title list-unstyled  m-0 mt-2 tabs-group d-flex align-items-center">
      <TabsTitleItems title="Bút bi cao cấp" />
      <TabsTitleItems title="Bút máy cao cấp" />
      <TabsTitleItems title="Bút lông bi cao cấp" />
    </ul>
  );
};

export default TabsTitle;
