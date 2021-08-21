import React from "react";

import "./LeftContent.css";

const LeftContent = () => {
  return (
    <div className="col-3 col-xl-4 col-lg-5">
      <ul className="header-left mb-0 float-right list-unstyled d-flex align-items-center">
        <li className="media d-lg-flex d-none hotline">
          <img
            src="https://theme.hstatic.net/1000230347/1000729967/14/phone-call.png?v=956"
            alt="phone"
            className="align-self-center mr-3"
          />
          <div className="media-body d-md-flex flex-column d-none">
            <span>Hỗ trợ khách hàng</span>
            <a
              className="font-weight-bold d-block"
              href="tel:1900866819"
              title="1900 866 819"
            >
              1900 866 819
            </a>
          </div>
        </li>
        <li className="ml-4 mr-4 mr-md-3 ml-md-3 media d-lg-flex d-none ">
          <i className="fas fa-user-circle mr-3 align-self-center"></i>
          <div className="media-body d-md-flex flex-column d-none">
            <a href="#" className="d-block">
              Tài Khoản
            </a>
            <a href="#" className="font-weight: light">
              Đăng Nhập
            </a>
          </div>
        </li>
        <li className="cartgroup  ml-0 mr-2 mr-md-0">
          <div className="mini-cart text-xs-center">
            <a href="#" className="">
              <i className="fas fa-shopping-bag"></i>
              <span className="">Giỏ hàng</span>
              <span className="">0</span>
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default LeftContent;
