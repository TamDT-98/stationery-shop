import React from "react";
import BreadCrumb from "../Body/BreadCrumb/BreadCrumb";
import Footer from "../Footer/Footer";

import Header from "../Header/Header";
import NavigationWrapper from "../Navigation/NavigationWrapper/NavigationWrapper";
import "./DetailProductItem.css";

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
    <>
      <Header />
      <SubHeader className="subheader dropdown" />
      <BreadCrumb crumbs={crumbs} selected={selected} />
      <h1>I i'm product</h1>
      <Footer />
    </>
  );
};

export default DetailProductItem;
