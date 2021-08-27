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
          <div className="title_module_main heading-bar d-flex justify-content-between align-items-center">
            <TitleFlashSale />
          </div>
          <FlashSaleItems />
          <SeenAll />
        </div>
      </div>
    </section>
  );
};

export default Fflashsale;
