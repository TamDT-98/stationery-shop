import React from "react";

import "./TopFooter.css";

const TopFooter = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-sm-6 col-md-4">
          <h4>ĐĂNG KÝ NHẬN BẢN TIN</h4>
          <div className="form_register">
            <div className="custom-input-group mb-3 form_newsletter form_newsletter_customer">
              <form className="contact-form">
                <input name="form_type" type="hidden" value="customer" />
                <input name="form_name" type="hidden" value="✓" />
                <div className="input-group">
                  <input
                    name="contact[tags]"
                    type="hidden"
                    value="khách hàng tiềm năng, bản tin"
                    id="newsletter-tags"
                  />
                  <input
                    className="form-control input-group-field"
                    type="email"
                    placeholder="Nhập địa chỉ email"
                    required
                    autocomplete="off"
                  />
                </div>
                <div className="input-group-btn btn-action">
                  <button
                    className="h-100 btn text-white button_subscribe subscribe"
                    type="submit"
                    name="subscribe"
                  >
                    Đăng ký
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-4 text-center"></div>
        <div className="col-xs-12 col-sm-6 col-md-4"></div>
      </div>
    </div>
  );
};

export default TopFooter;
