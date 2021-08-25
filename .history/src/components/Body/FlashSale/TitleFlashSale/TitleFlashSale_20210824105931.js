import React from "react";

const TitleFlashSale = () => {
  return (
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
  );
};

export default TitleFlashSale;
