import React from "react";
import BreadCrumb from "../Body/BreadCrumb/BreadCrumb";

import Header from "../Header/Header";
import SubHeader from "../Header/SubHeader/SubHeader";
import "./GoodPriceToday.css";

const GoodPriceToday = () => {
  const [crumbs, setCrumbs] = React.useState([
    "Trang chủ",
    "Danh mục",
    "Giá tốt hôm nay",
  ]);
  const selected = (crumb) => {
    // console.log(crumb);
  };
  return (
    <div className="GoodPriceToday">
      <Header />
      <SubHeader />
      <BreadCrumb crumbs={crumbs} selected={selected} />
      <div className="section wrap_background">
        <div className="container">
          <div className="bg_collection section">
            <div className="row"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoodPriceToday;
