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
                    decoding="async"
                    loading="lazyload"
                    className="ok lazyload loaded"
                    src="https://product.hstatic.net/1000230347/product/fiber_pen_colokit_swm-c006_c_600x600_e730566c46164ee6a2c0ac0292b18b3d_medium.jpg"
                  />
                </a>
              </div>
              <div className="product-info">
                <h3 className="product-name">
                  <a
                    href="#"
                    title="Bút lông 36 màu Fiber Pen Washable - Nét mảnh nét to - Colokit SWM-C006"
                  >
                    Bút lông 36 màu Fiber Pen Washable - Nét mảnh nét to -
                    Colokit SWM-C006
                  </a>
                </h3>
                <div className="price-box">
                  <span className="price">130,000₫</span>
                </div>
                <div className="product-action">
                  <div className="group_action">
                    <a
                      href="#"
                      title="Xem nhanh"
                      className="d-none d-lg-block btn-last xem_nhanh btn-circle btn-views btn_view btn right-to quick-view"
                    >
                      XEM NHANH
                    </a>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashSaleItems;
