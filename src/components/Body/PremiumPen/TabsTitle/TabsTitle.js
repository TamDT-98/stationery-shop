import React from "react";

import "./TabsTitle.css";

const TabsTitle = () => {
  return (
    <ul className="tabs tabs-title list-unstyled  m-0 mt-2 tabs-group d-flex align-items-center">
      <li className="ega-small tab-link px-3 py-2 link current">
        Bút bi cao cấp
      </li>
      <li className="ega-small tab-link px-3 py-2 link">Bút máy cao cấp</li>
      <li className="ega-small tab-link px-3 py-2 link">Bút lông bi cao cấp</li>
    </ul>
  );
};

export default TabsTitle;
