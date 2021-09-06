import React from "react";

import "./DetailsMainRight.css";

const DetailsMainRight = () => {
  return (
    <div className="col-xs-12 col-sm-12  col-lg-8 details-pro">
      <h1 className="title-product">
        Bút lông 36 màu Fiber Pen Washable - Nét mảnh nét to - Colokit SWM-C006
      </h1>
      <div className="row">
        <div className="col-12 col-md-7">
          <div className="group-status">
            <span className="first_status">
              Thương hiệu:
              <span className="status_name">Colokit</span>
              <span className="line"> | </span>
            </span>
            <span className="first_status status_2">
              Tình trạng:
              <span className="status_name availabel hasvariant">Còn hàng</span>
            </span>
            <p className="product_sku first_status">
              Mã sản phẩm:
              <span className="status_name">50010623</span>
            </p>
          </div>
          {/* Giá */}
          <div className="price-box">
            <div className="row">
              <div className="col-9">
                <span className="special-price">
                  <span className="price product-price">10,620₫</span>
                </span>
                {/* Giá khuyến mãi */}
                <span className="old-price">
                  <del className="price product-price-old sale">11,800₫</del>
                </span>
                {/* Giá gốc */}
              </div>
              <div className="col-3">
                <div className="product-discount">
                  <span>
                    Tiết kiệm<strong>10%</strong>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="form-product">
            <div className="swatch-color swatch clearfix">
              <div className="header">Màu sắc</div>
            </div>

            <div className="form_button_details margin-top-15 w-100">
              <div className="form_product_content type1">
                <div className="soluong soluong_type_1 show">
                  <label>Số lượng:</label>
                  <div className="custom input_number_product custom-btn-number">
                    <button className="btn btn_num num_1 button button_qty">
                      -
                    </button>
                    <input className="form-control prd_quantity" value="5" />
                    <button className="btn btn_num num_2 button button_qty">
                      +
                    </button>
                  </div>
                </div>
                <div className="warning-quantity">
                  Sản phẩm này chỉ cho phép mua tối thiểu <b>5 sản phẩm</b>
                </div>
                <div className="button_actions clearfix">
                  <button
                    type="submit"
                    className="btn btn_base btn_add_cart btn-cart add_to_cart"
                  >
                    <span className="text_1">Chọn Mua</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="product-more-info">
            <p className="block-heading"></p>
            <div className="product-addon-item">
              <span className="product-addon-image">
                <img src="https://theme.hstatic.net/1000230347/1000729967/14/product_1_info_image.png?v=975" />
              </span>
              <div className="text-collapse">
                Lưu ý: Các mã giảm giá không áp dụng cho các sản phẩm giấy văn
                phòng và các sản phẩm flash sale
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-5 product-right"></div>
      </div>
    </div>
  );
};

export default DetailsMainRight;
