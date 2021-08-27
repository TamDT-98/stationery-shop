import React from "react";

const MidFooter = () => {
  return (
    <div className="mid-footer">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-4 footer-click">
            <div className="logo-footer">
              <img src="https://theme.hstatic.net/1000230347/1000729967/14/footer_infor.png?v=974" />
            </div>
            <div className="about-company">
              <p>
                Flexoffice.com - Website thương mại điện tử thuộc Tập đoàn Thiên
                Long
              </p>
              <p>Công ty Cổ Phần Tập Đoàn Thiên Long </p>
              <p>
                GPĐKKD số 0301464830 do Sở KHĐT TP. Hồ Chí Minh cấp ngày
                04/03/2005.
              </p>
              <p>
                Địa chỉ: Lô 6-8-10-12, Đường số 3, KCN Tân Tạo, Q.Bình Tân, TP.
                Hồ Chí Minh, Việt Nam
              </p>
            </div>
          </div>
          <div className="col-xs-12 col-md-6 col-lg-3 footer-click f-block f-support">
            <h4 className="title-menu clicked">HỖ TRỢ KHÁCH HÀNG</h4>
            <p>Hotline: 1900 866 819</p>
            <p>salesonline@flexoffice.com.vn</p>
            <ul className="list-menu">
              <li className="li_menu">
                <a
                  className="link"
                  href="#"
                  title="Chương trình khách hàng thân thiết"
                >
                  Chương trình khách hàng thân thiết
                </a>
              </li>
              <li className="li_menu">
                <a
                  className="link"
                  href="#"
                  title="Chương trình khách hàng thân thiết"
                >
                  Hướng dẫn mua hàng
                </a>
              </li>
              <li className="li_menu">
                <a
                  className="link"
                  href="#"
                  title="Chương trình khách hàng thân thiết"
                >
                  Hướng dẫn thanh toán
                </a>
              </li>
              <li className="li_menu">
                <a
                  className="link"
                  href="#"
                  title="Chương trình khách hàng thân thiết"
                >
                  Chính sách giao hàng
                </a>
              </li>
              <li className="li_menu">
                <a
                  className="link"
                  href="#"
                  title="Chương trình khách hàng thân thiết"
                >
                  Chính sách đổi trả & hoàn tiền
                </a>
              </li>
            </ul>
          </div>
          <div className="col-xs-12 col-md-6 col-lg-2 footer-click">
            <h4 className="title-menu clicked">VỀ FLEXOFFICE</h4>
            <ul className="list-menu">
              <li className="li_menu">
                <a className="link" href="#" title="Giới thiệu">
                  Giới thiệu
                </a>
              </li>
              <li className="li_menu">
                <a className="link" href="#" title="Dịch vụ in ấn quảng cáo">
                  Dịch vụ in ấn quảng cáo
                </a>
              </li>
              <li className="li_menu">
                <a className="link" href="#" title="Chính sách bảo mật">
                  Chính sách bảo mật
                </a>
              </li>
              <li className="li_menu">
                <a className="link" href="#" title="Thông tin liên hệ">
                  Thông tin liên hệ
                </a>
              </li>
              <li className="li_menu">
                <a className="link" href="#" title="Điểm bán PARKER">
                  Điểm bán PARKER
                </a>
              </li>
            </ul>
          </div>
          <div className="col-xs-12 col-md-6 col-lg-3 footer-click">
            <div className="social-footer">
              <h4 className="title-menu">LIÊN KẾT VỚI CHÚNG TÔI</h4>
              <ul className="follow_option d-flex flex-wrap align-items-center p-0 list-unstyled">
                <li>
                  <a className="facebook link" href="#">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a className="youtube link" href="#">
                    <i class="fab fa-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MidFooter;
