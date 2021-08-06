import React from "react";

const Footer = (props) => {
  return (
    <>
      <footer className="footer">
        <div className="grid">
          <div className="grid__row">
            <div className="grid__column-3">
              <h3 className="footer__heading">Chăm sóc khách hàng</h3>
              <ul className="footer-list">
                <li className="footer-item"><a href className="footer-item__link">Trung tâm trợ giúp</a></li>
                <li className="footer-item"><a href className="footer-item__link">Về chúng tôi</a></li>
                <li className="footer-item"><a href className="footer-item__link">Hướng dẫn sử dụng</a></li>
              </ul>
            </div>
            <div className="grid__column-3">
              <h3 className="footer__heading">Giới thiệu</h3>
              <ul className="footer-list">
                <li className="footer-item"><a href className="footer-item__link">Chính Sách</a></li>
                <li className="footer-item"><a href className="footer-item__link">Tuyển dụng</a></li>
                <li className="footer-item"><a href className="footer-item__link">Điều khoản</a></li>
              </ul>
            </div>
            <div className="grid__column-3">
              <h3 className="footer__heading">Danh mục</h3>
              <ul className="footer-list">
                <li className="footer-item"><a href className="footer-item__link">Gia sư nổi bật</a></li>
                <li className="footer-item"><a href className="footer-item__link">Các lớp mới đăng</a></li>
                <li className="footer-item"><a href className="footer-item__link">Gia sư Tiếng anh</a></li>
              </ul>
            </div>
            <div className="grid__column-3">
              <h3 className="footer__heading">Liên hệ</h3>
              <ul className="footer-list">
                <li className="footer-item">
                  <a href className="footer-item__link">
                    <i className=" footer-item__icon fab fa-facebook" />
                    Facebook
                  </a>
                </li>
                <li className="footer-item">
                  <a href className="footer-item__link">
                    <i className="footer-item__icon fab fa-instagram" />
                    Instagram
                  </a>
                </li>
                <li className="footer-item">
                  <a href className="footer-item__link">
                    <i className="footer-item__icon fab fa-google" />
                    Google
                  </a>
                </li>
              </ul>
            </div>
            {/* <div className="grid__column-2-4">
              <h3 className="footer__heading">Tải ứng dụng</h3>
              <div className="footer__download">
                <img src alt="" />
                <div className="footer__download-apps">
                  <img className="footer__download-apps-img" src alt="" />
                  <img className="footer__download-apps-img" src alt="" />
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </footer>
      <div className="copyright">
        <div className="grid">
          <p className="copyright__text">@ 2021-Bản quyền thuộc về Hoàng Long Nhật</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
