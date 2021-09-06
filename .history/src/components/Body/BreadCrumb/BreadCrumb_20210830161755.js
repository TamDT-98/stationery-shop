import React from "react";

import "./BreadCrumb.css";

const BreadCrumb = (props) => {
  const isLast = (index) => {
    return index === props.crumbs.length - 1;
  };

  return (
    <div className="bread-crumb mb-3">
      <div className="container px-md-0">
        <div className="row">
          <div className="col-12 a-left">
            <ul className="breadcrumb m-0 px-0">
              {props.crumbs.map((crumb, ci) => {
                const disabled = isLast(ci) ? "disabled" : "";

                return (
                  <li key={ci} className="breadcrumb-item ">
                    <button
                      className={`btn btn-link ${disabled}`}
                      onClick={() => props.selected(crumb)}
                    >
                      {crumb}
                    </button>
                  </li>
                );
              })}
              {/* <li>
                <a href="#">
                  <span>Trang chủ</span>
                </a>
                <span className="mr_lr"> / </span>
              </li>
              <li>
                <a href="#">
                  <span>catalog all</span>
                </a>
                <span className="mr_lr"> / </span>
              </li>
              <li className="active">
                <span>
                  Bút lông 36 màu Fiber Pen Washable - Nét mảnh nét to - Colokit
                  SWM-C006
                </span>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb;
