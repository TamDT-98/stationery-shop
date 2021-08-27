import React from "react";

import TabsTitleItems from "./TabsTitleItems/TabsTitleItems";

const TabsTitle = () => {
  return (
    <ul className="tabs tabs-title list-unstyled  m-0 mt-2 tabs-group d-flex align-items-center">
      <TabsTitleItems />
    </ul>
  );
};

export default TabsTitle;
