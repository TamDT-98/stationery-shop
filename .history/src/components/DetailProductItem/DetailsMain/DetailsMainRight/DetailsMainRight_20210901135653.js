import React from "react";

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
              <span className="status_name availabel hasvariant">Hết hàng</span>
            </span>
            <p className="product_sku first_status">
              Mã sản phẩm:
              <span className="status_name">50010623</span>
            </p>
          </div>
          {/* Giá */}
          <div className="price-box">
            <div className="special-price">
              <span className="price product-price">130,000₫</span>
            </div>
          </div>
          {/* Giá */}

          <div className="form-product">
            <div className="box-variant clearfix">
              <input type="hidden" name="id" />
            </div>
          </div>
          <div className="form_button_details margin-top-15 w-100">
            <div className="form_product_content type1">
              <div className="soluong soluong_type_1 hidden"></div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-5 product-right"></div>
      </div>
    </div>
  );
};

export default DetailsMainRight;
