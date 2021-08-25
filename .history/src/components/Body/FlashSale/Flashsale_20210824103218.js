import React from "react";

import "./Flashsale.css";
import FlashSaleItems from "./FlashSaleItems/FlashSaleItems";

const Fflashsale = () => {
  return (
    <section className="section awe-section-3">
      <div className="section_flashsale flashsale">
        <div className="container  py-2 card border-0 ">
          <div className="title_module_main heading-bar d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center flex-wrap flashsale__header">
              <h2 className="heading-bar__title flashsale__title">
                <a className="link" href="#" title="TOP SẢN PHẨM BÁN CHẠY">
                  TOP SẢN PHẨM BÁN CHẠY
                </a>
              </h2>
              <div className="flashsale__countdown-wrapper">
                <span className="flashsale__countdown-label">
                  Chỉ có tại Thiên Long Flexoffice.com
                </span>
                <div
                  className="flashsale__countdown"
                  data-countdown-type="days"
                  data-countdown
                ></div>
              </div>
            </div>
          </div>
          <FlashSaleItems />
        </div>
      </div>
    </section>
  );
};

export default Fflashsale;
