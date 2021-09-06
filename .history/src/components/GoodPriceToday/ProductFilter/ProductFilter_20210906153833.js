import React from "react";

import "./ProductFilter.css";
import AsideTitle from "./AsideTitle/AsideTitle";

const ProductFilter = () => {
  return (
    <aside className=" scroll card py-2 dqdt-sidebar sidebar left-content col-xl-3 col-lg-3 col-md-12 col-sm-12">
      <div className="filter-content aside-filter">
        <div className="filter-container">
          <div className="filter-container__selected-filter">
            <div className="filter-container__selected-filter-header clearfix d-none">
              <span className="filter-container__selected-filter-header-title">
                <i className="fa fa-arrow-left hidden-sm-up"></i>
                Bạn chọn
              </span>
              <a href="#" className="filter-container__clear-all">
                Bỏ hết <i className="fa fa-angle-right"></i>
              </a>
            </div>
          </div>

          {/* Lọc hãng */}
          <aside className="aside-item filter-vendor">
            <AsideTitle title="THƯƠNG HIỆU" />
            <div className="aside-content filter-group">
              <ul>
                <li className="filter-item filter-item--check-box filter-item--green">
                  <span>
                    <label
                      className="custom-checkbox"
                      for="filter-vendor-colokit"
                    >
                      <input
                        type="checkbox"
                        id="filter-vendor-colokit"
                        data-group="PRODUCT_VENDOR"
                        data-field="vendor"
                        value="product contains Colokit"
                        data-operator="||"
                      />
                      <i className="fa"></i>
                      Colokit
                    </label>
                  </span>
                </li>
                <li className="filter-item filter-item--check-box filter-item--green">
                  <span>
                    <label
                      className="custom-checkbox"
                      for="filter-vendor-flexoffice"
                    >
                      <input
                        type="checkbox"
                        id="filter-vendor-flexoffice"
                        data-group="PRODUCT_VENDOR"
                        data-field="vendor"
                        value="product contains Flexoffice"
                        data-operator="||"
                      />
                      <i className="fa"></i>
                      Flexoffice
                    </label>
                  </span>
                </li>
                <li className="filter-item filter-item--check-box filter-item--green">
                  <span>
                    <label
                      className="custom-checkbox"
                      for="filter-vendor-thien-long"
                    >
                      <input
                        type="checkbox"
                        id="filter-vendor-thien-long"
                        data-group="PRODUCT_VENDOR"
                        data-field="vendor"
                        value="product contains Thiên Long"
                        data-operator="||"
                      />
                      <i className="fa"></i>
                      Thiên long
                    </label>
                  </span>
                </li>
                <li className="filter-item filter-item--check-box filter-item--green">
                  <span>
                    <label
                      className="custom-checkbox"
                      for="filter-vendor-diem-10"
                    >
                      <input
                        type="checkbox"
                        id="filter-vendor-diem-10"
                        data-group="PRODUCT_VENDOR"
                        data-field="vendor"
                        value="product contains Điểm 10"
                        data-operator="||"
                      />
                      <i className="fa"></i>
                      Điểm 10
                    </label>
                  </span>
                </li>
              </ul>
            </div>
          </aside>

          {/* Lọc theo màu sắc */}
          <aside className="aside-item filter-tag-style-1">
            <AsideTitle title="MÀU SẮC" />
            <div className="aside-content filter-group clearfix scroll">
              <ul>
                <li className="filter-item color filter-item--check-box filter-item--green">
                  <span>
                    <label
                      className="custom-checkbox color"
                      for="filter-variant-Đỏ"
                    >
                      <input
                        type="checkbox"
                        id="filter-variant-Đỏ"
                        data-group="tag1"
                        data-field="variant"
                        data-text="Đỏ"
                        value="product**Đỏ"
                        data-operator="||"
                      />
                      <i className="fa"></i>
                      Đỏ
                    </label>
                  </span>
                </li>
                <li className="filter-item color filter-item--check-box filter-item--green">
                  <span>
                    <label
                      className="custom-checkbox color"
                      for="filter-variant-Đen"
                    >
                      <input
                        type="checkbox"
                        id="filter-variant-Đen"
                        data-group="tag1"
                        data-field="variant"
                        data-text="Đen"
                        value="product**Đen"
                        data-operator="||"
                      />
                      <i className="fa"></i>
                      Đen
                    </label>
                  </span>
                </li>
                <li className="filter-item color filter-item--check-box filter-item--green">
                  <span>
                    <label
                      className="custom-checkbox color"
                      for="filter-variant-Vàng"
                    >
                      <input
                        type="checkbox"
                        id="filter-variant-Vàng"
                        data-group="tag1"
                        data-field="variant"
                        data-text="Vàng"
                        value="product**Vàng"
                        data-operator="||"
                      />
                      <i className="fa"></i>
                      Vàng
                    </label>
                  </span>
                </li>
                <li className="filter-item color filter-item--check-box filter-item--green">
                  <span>
                    <label
                      className="custom-checkbox color"
                      for="filter-variant-Hồng"
                    >
                      <input
                        type="checkbox"
                        id="filter-variant-Hồng"
                        data-group="tag1"
                        data-field="variant"
                        data-text="Hồng"
                        value="product**Hồng"
                        data-operator="||"
                      />
                      <i className="fa"></i>
                      Hồng
                    </label>
                  </span>
                </li>
                <li className="filter-item color filter-item--check-box filter-item--green">
                  <span>
                    <label
                      className="custom-checkbox color"
                      for="filter-variant-Trắng"
                    >
                      <input
                        type="checkbox"
                        id="filter-variant-Trắng"
                        data-group="tag1"
                        data-field="variant"
                        data-text="Đỏ"
                        value="product**Đỏ"
                        data-operator="||"
                      />
                      <i className="fa"></i>
                      Trắng
                    </label>
                  </span>
                </li>
                <li className="filter-item color filter-item--check-box filter-item--green">
                  <span>
                    <label
                      className="custom-checkbox color"
                      for="filter-variant-Xanh"
                    >
                      <input
                        type="checkbox"
                        id="filter-variant-Xanh"
                        data-group="tag1"
                        data-field="variant"
                        data-text="Đỏ"
                        value="product**Đỏ"
                        data-operator="||"
                      />
                      <i className="fa"></i>
                      Xanh
                    </label>
                  </span>
                </li>
                <li className="filter-item color filter-item--check-box filter-item--green">
                  <span>
                    <label
                      className="custom-checkbox color"
                      for="filter-variant-bac"
                    >
                      <input
                        type="checkbox"
                        id="filter-variant-bac"
                        data-group="tag1"
                        data-field="variant"
                        data-text="Đỏ"
                        value="product**Đỏ"
                        data-operator="||"
                      />
                      <i className="fa"></i>
                      bac
                    </label>
                  </span>
                </li>
                <li className="filter-item color filter-item--check-box filter-item--green">
                  <span>
                    <label
                      className="custom-checkbox color"
                      for="filter-variant-cam"
                    >
                      <input
                        type="checkbox"
                        id="filter-variant-cam"
                        data-group="tag1"
                        data-field="variant"
                        data-text="cam"
                        value="product**cam"
                        data-operator="||"
                      />
                      <i className="fa"></i>
                      cam
                    </label>
                  </span>
                </li>
                <li className="filter-item color filter-item--check-box filter-item--green">
                  <span>
                    <label
                      className="custom-checkbox color"
                      for="filter-variant-la"
                    >
                      <input
                        type="checkbox"
                        id="filter-variant-la"
                        data-group="tag1"
                        data-field="variant"
                        data-text="la"
                        value="product**la"
                        data-operator="||"
                      />
                      <i className="fa"></i>
                      la
                    </label>
                  </span>
                </li>
                <li className="filter-item color filter-item--check-box filter-item--green">
                  <span>
                    <label
                      className="custom-checkbox color"
                      for="filter-variant-Tím"
                    >
                      <input
                        type="checkbox"
                        id="filter-variant-Tím"
                        data-group="tag1"
                        data-field="variant"
                        data-text="Tím"
                        value="product**Tím"
                        data-operator="||"
                      />
                      <i className="fa"></i>
                      Tím
                    </label>
                  </span>
                </li>
                <li className="filter-item color filter-item--check-box filter-item--green">
                  <span>
                    <label
                      className="custom-checkbox color"
                      for="filter-variant-xanhdam"
                    >
                      <input
                        type="checkbox"
                        id="filter-variant-xanhdam"
                        data-group="tag1"
                        data-field="variant"
                        data-text="xanhdam"
                        value="product**xanhdam"
                        data-operator="||"
                      />
                      <i className="fa"></i>
                      xanhdam
                    </label>
                  </span>
                </li>
                <li className="filter-item color filter-item--check-box filter-item--green">
                  <span>
                    <label
                      className="custom-checkbox color"
                      for="filter-variant-xanhla"
                    >
                      <input
                        type="checkbox"
                        id="filter-variant-xanhla"
                        data-group="tag1"
                        data-field="variant"
                        data-text="xanhla"
                        value="product**xanhla"
                        data-operator="||"
                      />
                      <i className="fa"></i>
                      xanhla
                    </label>
                  </span>
                </li>
                <li className="filter-item color filter-item--check-box filter-item--green">
                  <span>
                    <label
                      className="custom-checkbox color"
                      for="filter-variant-blueviolet"
                    >
                      <input
                        type="checkbox"
                        id="filter-variant-blueviolet"
                        data-group="tag1"
                        data-field="variant"
                        data-text="blueviolet"
                        value="product**blueviolet"
                        data-operator="||"
                      />
                      <i className="fa"></i>
                      blueviolet
                    </label>
                  </span>
                </li>
                <li className="filter-item color filter-item--check-box filter-item--green">
                  <span>
                    <label
                      className="custom-checkbox color"
                      for="filter-variant-Xanhlámạ"
                    >
                      <input
                        type="checkbox"
                        id="filter-variant-Xanhlámạ"
                        data-group="tag1"
                        data-field="variant"
                        data-text="Xanhlámạ"
                        value="product**Xanhlámạ"
                        data-operator="||"
                      />
                      <i className="fa"></i>
                      Xanhlámạ
                    </label>
                  </span>
                </li>
                <li className="filter-item color filter-item--check-box filter-item--green">
                  <span>
                    <label
                      className="custom-checkbox color"
                      for="filter-variant-vangchanh"
                    >
                      <input
                        type="checkbox"
                        id="filter-variant-vangchanh"
                        data-group="tag1"
                        data-field="variant"
                        data-text="vangchanh"
                        value="product**vangchanh"
                        data-operator="||"
                      />
                      <i className="fa"></i>
                      vangchanh
                    </label>
                  </span>
                </li>
                <li className="filter-item color filter-item--check-box filter-item--green">
                  <span>
                    <label
                      className="custom-checkbox color"
                      for="filter-variant-Vàngnghệ"
                    >
                      <input
                        type="checkbox"
                        id="filter-variant-Vàngnghệ"
                        data-group="tag1"
                        data-field="variant"
                        data-text="Vàngnghệ"
                        value="product**Vàngnghệ"
                        data-operator="||"
                      />
                      <i className="fa"></i>
                      Vàngnghệ
                    </label>
                  </span>
                </li>
                <li className="filter-item color filter-item--check-box filter-item--green">
                  <span>
                    <label
                      className="custom-checkbox color"
                      for="filter-variant-Vàngđất"
                    >
                      <input
                        type="checkbox"
                        id="filter-variant-Vàngđất"
                        data-group="tag1"
                        data-field="variant"
                        data-text="Vàngđất"
                        value="product**Vàngđất"
                        data-operator="||"
                      />
                      <i className="fa"></i>
                      Vàngđất
                    </label>
                  </span>
                </li>
                <li className="filter-item color filter-item--check-box filter-item--green">
                  <span>
                    <label
                      className="custom-checkbox color"
                      for="filter-variant-Xám"
                    >
                      <input
                        type="checkbox"
                        id="filter-variant-Xám"
                        data-group="tag1"
                        data-field="variant"
                        data-text="Xám"
                        value="product**Xám"
                        data-operator="||"
                      />
                      <i className="fa"></i>
                      Xám
                    </label>
                  </span>
                </li>
                <li className="filter-item color filter-item--check-box filter-item--green">
                  <span>
                    <label
                      className="custom-checkbox color"
                      for="filter-variant-hongdam"
                    >
                      <input
                        type="checkbox"
                        id="filter-variant-hongdam"
                        data-group="tag1"
                        data-field="variant"
                        data-text="hongdam"
                        value="product**hongdam"
                        data-operator="||"
                      />
                      <i className="fa"></i>
                      hongdam
                    </label>
                  </span>
                </li>
                <li className="filter-item color filter-item--check-box filter-item--green">
                  <span>
                    <label
                      className="custom-checkbox color"
                      for="filter-variant-xanhtim"
                    >
                      <input
                        type="checkbox"
                        id="filter-variant-xanhtim"
                        data-group="tag1"
                        data-field="variant"
                        data-text="xanhtim"
                        value="product**xanhtim"
                        data-operator="||"
                      />
                      <i className="fa"></i>
                      xanhtim
                    </label>
                  </span>
                </li>
              </ul>
            </div>
          </aside>

          {/* Mức giá */}
          <aside className="aside-item filter-price dq-filterxx">
            <AsideTitle title="MỨC GIÁ" />
          </aside>
        </div>
      </div>
    </aside>
  );
};

export default ProductFilter;
