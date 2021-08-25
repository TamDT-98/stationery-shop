import React from "react";

import "./FlashSaleItems.css";

const FlashSaleItems = () => {
  return (
    <div>
      <div className="row mt-3">
        <div className="flashsale__item col-12 col-md-15">
          <div className="item_product_main">
            <form className="variants product-action">
              <div className="product-thumbnail pos-relative">
                <a
                  className="image_thumb pos-relative embed-responsive embed-responsive-1by1"
                  href="#"
                  title="Bút lông 36 màu Fiber Pen Washable - Nét mảnh nét to - Colokit SWM-C006"
                >
                    <img className="product-frame lazyload loaded"
                </a>
              </div>
              <div className="product-info"></div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashSaleItems;
