import React from "react";

const LeftContent = () => {
  return (
    <div className="col-4 col-xl-5 col-lg-6 ">
      <ul className="header-left mb-0 float-right list-unstyled  d-flex align-items-center">
        <li>
          <img
            src="https://theme.hstatic.net/1000230347/1000729967/14/phone-call.png?v=956"
            alt="phone"
          />
          <div>
            <span>Hỗ trợ khách hàng</span>
            <a href="tel:1900866819" title="1900 866 819">
              1900 866 819
            </a>
          </div>
        </li>
        <li>
          <i className="fas fa-user-circle"></i>
          <div>
            <a href="#">Tài Khoản</a>
            <a href="#">Đăng Nhập</a>
          </div>
        </li>
        <li>
          <div>
            <a href="#">
              <i className="fas fa-shopping-bag"></i>
              <span>Giỏ hàng</span>
              <span>0</span>
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default LeftContent;
