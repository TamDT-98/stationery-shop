import React from "react";
import AsideTitle from "../AsideTitle/AsideTitle";

const FilterVendor = () => {
  return (
    <aside className="aside-item filter-vendor">
      <AsideTitle title="THƯƠNG HIỆU" />
      <div className="aside-content filter-group">
        <ul>
          <li className="filter-item filter-item--check-box filter-item--green">
            <span>
              <label className="custom-checkbox" for="filter-vendor-colokit">
                <input type="checkbox" id="filter-vendor-colokit" />
                <i className="fa"></i>
                Colokit
              </label>
            </span>
          </li>
          <li className="filter-item filter-item--check-box filter-item--green">
            <span>
              <label className="custom-checkbox" for="filter-vendor-flexoffice">
                <input type="checkbox" id="filter-vendor-flexoffice" />
                <i className="fa"></i>
                Flexoffice
              </label>
            </span>
          </li>
          <li className="filter-item filter-item--check-box filter-item--green">
            <span>
              <label className="custom-checkbox" for="filter-vendor-thien-long">
                <input type="checkbox" id="filter-vendor-thien-long" />
                <i className="fa"></i>
                Thiên long
              </label>
            </span>
          </li>
          <li className="filter-item filter-item--check-box filter-item--green">
            <span>
              <label className="custom-checkbox" for="filter-vendor-diem-10">
                <input type="checkbox" id="filter-vendor-diem-10" />
                <i className="fa"></i>
                Điểm 10
              </label>
            </span>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default FilterVendor;
