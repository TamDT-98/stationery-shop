import React from "react";

import "./FilterName.css";

const FilterName = () => {
  return (
    <div className="border-bottom">
      <div className=" d-flex justify-content-between align-items-baseline">
        <div className="sortPagiBar">
          <div className="sort-cate clearfix">
            <div className="d-flex align-items-baseline">
              <label className="left">
                <span>Sắp xếp: </span>
              </label>
              <ul className="ul_col ml-2 mb-0">
                <li>
                  <span className="d-flex d-lg-none align-items-center justify-content-between">
                    Thứ tự
                  </span>
                  <i className="fas fa-chevron-down float-right"></i>
                  <ul className="content_ul">
                    <li>
                      <a className="link" href="#">
                        Tên A → Z
                      </a>
                    </li>
                    <li>
                      <a className="link" href="#">
                        Tên Z → A
                      </a>
                    </li>
                    <li>
                      <a className="link" href="#">
                        Giá tăng dần
                      </a>
                    </li>
                    <li>
                      <a className="link" href="#">
                        Giá giảm dần
                      </a>
                    </li>
                    <li>
                      <a className="link" href="#">
                        Hàng mới
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterName;
