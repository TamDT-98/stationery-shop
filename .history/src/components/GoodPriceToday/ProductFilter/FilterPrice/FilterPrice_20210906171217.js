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
                  onchange=""
                  data-group="Khoảng giá"
                  data-field="price"
                  data-text="Dưới 100.000đ"
                  value="(price:product <100000)"
                  data-operator="||"
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
                <input
                  type="checkbox"
                  id="filter-100-000d-200-000d"
                  onchange=""
                  data-group="Khoảng giá"
                  data-field="price"
                  data-text="100.000đ - 200.000đ"
                  value="(price:product >=100000) &amp;&amp; (price:product<=200000)"
                  data-operator="||"
                />
                <i className="fa"></i>
                100.000đ - 200.000đ
              </label>
            </span>
          </li>
          <li className="filter-item filter-item--check-box filter-item--green">
							<span>
								<label className="custom-checkbox" for="filter-200-000d-300-000d">
									<input type="checkbox" id="filter-200-000d-300-000d" onchange="" data-group="Khoảng giá" data-field="price" data-text="200.000đ - 300.000đ" value="(price:product >=200000) &amp;&amp; (price:product<=300000)" data-operator="||">
									<i className="fa"></i>
									200.000đ - 300.000đ
								</label>
							</span>
						</li>
                        <li className="filter-item filter-item--check-box filter-item--green">
							<span>
								<label className="custom-checkbox" for="filter-300-000d-500-000d">
									<input type="checkbox" id="filter-300-000d-500-000d" onchange="" data-group="Khoảng giá" data-field="price" data-text="300.000đ - 500.000đ" value="(price:product >=300000) &amp;&amp; (price:product<=500000)" data-operator="||">
									<i className="fa"></i>
									300.000đ - 500.000đ
								</label>
							</span>
						</li>
                        <li className="filter-item filter-item--check-box filter-item--green">
							<span>
								<label className="custom-checkbox" for="filter-500-000d-1-000-000d">
									<input type="checkbox" id="filter-500-000d-1-000-000d" onchange="" data-group="Khoảng giá" data-field="price" data-text="500.000đ - 1.000.000đ" value="(price:product >=500000 )&amp;&amp; (price:product <=1000000)" data-operator="||">
									<i className="fa"></i>
									500.000đ - 1.000.000đ
								</label>
							</span>
						</li>
                        <li className="filter-item filter-item--check-box filter-item--green">
							<span>
								<label className="custom-checkbox" for="filter-tren1-000-000d">
									<input type="checkbox" id="filter-tren1-000-000d" onchange="" data-group="Khoảng giá" data-field="price" data-text="Trên 1.000.000đ" value="(price:product >=1000000)" data-operator="||">
									<i className="fa"></i>
									Giá trên 1.000.000đ
								</label>
							</span>
						</li>
        </ul>
      </div>
    </aside>
  );
};

export default FilterPrice;
