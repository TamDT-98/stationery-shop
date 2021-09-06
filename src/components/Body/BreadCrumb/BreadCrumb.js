import React from "react";
import { Link } from "react-router-dom";

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
                  <li key={ci} className="breadcrumb-item align-items-center">
                    <Link
                      to="/"
                      className={`btn btn-link ${disabled}`}
                      onClick={() => props.selected(crumb)}
                    >
                      {crumb}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb;
