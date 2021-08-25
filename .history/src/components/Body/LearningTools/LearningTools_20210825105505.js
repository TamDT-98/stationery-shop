import React from "react";
import Title from "../Title/Title";
import LearningToolsBanner from "./LearningToolsBanner/LearningToolsBanner";
import LearningToolsItem from "./LearningToolsItem/LearningToolsItem";

const LearningTools = () => {
  return (
    <section className="section awe-section-7">
      <section className="section_product_new section">
        <div className="container py-2 card border-0">
          <Title href="#" title="DỤNG CỤ HỌC TẬP - Thiên Long Flexoffice.com" />
          <div className="row mt-3">
            <LearningToolsBanner />
            <LearningToolsItem />
          </div>
        </div>
      </section>
    </section>
  );
};

export default LearningTools;
