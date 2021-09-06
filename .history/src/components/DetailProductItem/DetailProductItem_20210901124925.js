import React from "react";
import BreadCrumb from "../Body/BreadCrumb/BreadCrumb";
import Footer from "../Footer/Footer";

import Header from "../Header/Header";
import SubHeader from "../Header/SubHeader/SubHeader";
import "./DetailProductItem.css";
import DetailsMainLeft from "./DetailsMain/DetailsMainLeft/DetailsMainLeft";

const DetailProductItem = () => {
  const [crumbs, setCrumbs] = React.useState([
    "Trang chủ",
    "catalog all",
    "Product",
  ]);

  const selected = (crumb) => {
    console.log(crumb);
  };

  return (
    <div className="DetailProductItem">
      <Header />
      <SubHeader />
      <BreadCrumb crumbs={crumbs} selected={selected} />
      <DetailsMainLeft />
      <h1>I i'm product</h1>
      <Footer />
    </div>
  );
};

export default DetailProductItem;
