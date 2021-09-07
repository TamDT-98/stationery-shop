import React from "react";

import AsideTitle from "../AsideTitle/AsideTitle";

const FilterPrice = () => {
  return (
    <aside className="aside-item filter-price dq-filterxx">
      <AsideTitle title="MỨC GIÁ" />
      <div className="aside-content filter-group scroll">
        <ul>
          <li className="filter-item filter-item--check-box filter-item--green">
            <span>
              <label className="custom-checkbox" for="filter-duoi-100-000d">
                <input
                  type="checkbox"
                  id="filter-duoi-100-000d"
                  checked="checked"
                />
                <i className="fa hidden"></i>
                Giá dưới 100.000đ
              </label>
            </span>
          </li>
          <li className="filter-item filter-item--check-box filter-item--green">
            <span>
              <label className="custom-checkbox" for="filter-100-000d-200-000d">
                <input type="checkbox" id="filter-100-000d-200-000d" />
                <i className="fa"></i>
                100.000đ - 200.000đ
              </label>
            </span>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default FilterPrice;