import React from "react";
import SeenAll from "../Button/SeenAll";

import "./Flashsale.css";
import FlashSaleItems from "./FlashSaleItems/FlashSaleItems";
import TitleFlashSale from "./TitleFlashSale/TitleFlashSale";

const Fflashsale = () => {
  return (
    <section className="section awe-section-3">
      <div className="section_flashsale flashsale">
        <div className="container  py-2 card border-0 ">
          <TitleFlashSale />
          <FlashSaleItems />
          <SeenAll />
        </div>
      </div>
    </section>
  );
};

export default Fflashsale;
