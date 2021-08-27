import React from "react";

import Title from "../Title/Title";
import TabsTitle from "./TabsTitle/TabsTitle";
import "./PremiumPen.css";

const PremiumPen = () => {
  return (
    <section className="section awe-section-8">
      <section className="section_product_top section">
        <div className="container  py-2  card border-0">
          <div className="title_module_main heading-bar d-flex justify-content-between align-items-center">
            <Title
              href="#"
              title="BÚT VIẾT CAO CẤP - Thiên Long Flexoffice.com"
            />
            <TabsTitle />
          </div>
        </div>
      </section>
    </section>
  );
};

export default PremiumPen;
