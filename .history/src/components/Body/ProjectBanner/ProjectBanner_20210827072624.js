import React from "react";
import SeenAll from "../Button/SeenAll";
import Title from "../Title/Title";
import BannerProject from "./BannerProject/BannerProject";
import ProjectBannerItems from "./ProjectBannerItems/ProjectBannerItems";

const ProjectBanner = () => {
  return (
    <section className="section awe-section-6">
      <section className="section_product_banner section">
        <div className="container py-2 card border-0">
          <div className="row">
            <div className="col-12">
              <div className="title_module_main heading-bar d-flex justify-content-between align-items-center">
                <Title
                  href="#"
                  title="VĂN PHÒNG PHẨM - Thiên Long Flexoffice.com"
                />
              </div>
              <div className="row mt-3">
                <BannerProject />
                <ProjectBannerItems />
                <SeenAll href="#" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ProjectBanner;
