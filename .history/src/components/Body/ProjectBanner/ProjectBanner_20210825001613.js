import React from "react";
import Title from "../Title/Title";
import BannerProject from "./BannerProject/BannerProject";

const ProjectBanner = () => {
  return (
    <section className="section awe-section-6">
      <section className="section_product_banner section">
        <div className="container py-2 card border-0">
          <div className="row">
            <div className="col-12">
              <Title
                href="#"
                title="VĂN PHÒNG PHẨM - Thiên Long Flexoffice.com"
              />
              <div className="row mt-3">
                  <BannerProject/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ProjectBanner;
