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

      <h1>Hi i'm Good Price Today</h1>
    </div>
  );
};

export default GoodPriceToday;
