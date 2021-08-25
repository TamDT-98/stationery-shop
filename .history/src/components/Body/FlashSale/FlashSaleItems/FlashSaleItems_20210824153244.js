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
                  <img
                    className="product-frame lazyload loaded"
                    src="https://theme.hstatic.net/1000230347/1000729967/14/frame_1.png?v=974"
                  />
                  <img
                    className="lazyload loaded"
                    src="https://product.hstatic.net/1000230347/product/fiber_pen_colokit_swm-c006_c_600x600_e730566c46164ee6a2c0ac0292b18b3d_medium.jpg"
                  />
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
