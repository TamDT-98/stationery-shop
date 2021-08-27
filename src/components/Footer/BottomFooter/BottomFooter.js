import React from "react";

import "./BottomFooter.css";

const BottomFooter = () => {
  return (
    <div className="bg-footer-bottom copyright clearfix py-2">
      <div className="container">
        <div className="row">
          <div
            id="copyright"
            className="col-lg-12 col-md-12 col-xs-12 fot_copyright"
          >
            <span className="wsp">
              2021 © Flexoffice.com - Bản quyền thuộc Tập đoàn Thiên Long
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomFooter;
