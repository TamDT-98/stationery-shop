import React from "react";

import "./ProductFilter.css";
import AsideTitle from "./AsideTitle/AsideTitle";
import FilterPrice from "./FilterPrice/FilterPrice";
import FilterColor from "./FilterColor/FilterColor";
import FilterVendor from "./FilterVendor/FilterVendor";

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
          <FilterVendor />

          {/* Lọc theo màu sắc */}
          <FilterColor />

          {/* Mức giá */}
          <FilterPrice />
        </div>
      </div>
    </aside>
  );
};

export default ProductFilter;
