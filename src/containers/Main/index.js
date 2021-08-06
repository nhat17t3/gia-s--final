import React from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Layout from "../../components/Layout";

const Main = (props) => {
  return (
    <>
      {/* <div className="grid__full-width banner">
        <div className="banner-content">
          <h1>Tìm gia sư phù hợp</h1>
          <h2>Nhanh - Chủ động - Miễn phí</h2>
          <p>Hãy để chúng tôi giúp bạn tiến bộ mỗi ngày</p>
          <p> với nền tảng gia sư theo công nghệ 4.0</p>
          <Link to="/register" className="btn btn--primary">
            Đăng kí ngay
          </Link>
        </div>
      </div> */}

      <Layout>
        <div className="grid__full-width banner">
          <div className="banner-content">
            <h1>Tìm gia sư phù hợp</h1>
            <h2>Nhanh - Chủ động - Miễn phí</h2>
            <p>Hãy để chúng tôi giúp bạn tiến bộ mỗi ngày</p>
            <p> với nền tảng gia sư theo công nghệ 4.0</p>
            <Link to="/signin" className="btn btn--primary">
              Đăng kí ngay
            </Link>
          </div>
        </div>
        <div className="grid">
          <div className="section-title">
            <div className="section-title__center">
              <b />
              <span className="section-title__content">Tính năng nổi bật</span>
              <b />
            </div>
          </div>
        </div>
        <div className="grid feature">
          <div className="grid__row">
            <div className="grid__column-6 feature-hot">
              <div className="feature-hot__title">
                <i className="fas fa-check-circle" />
                CHẤT LƯỢNG
              </div>
              <div className="feature-hot__description">
                Gia sư giỏi, kinh nghiệm từ các trường TOP đầu. Thông tin hồ sơ
                rõ ràng
              </div>
            </div>
            <div className="grid__column-6 feature-hot">
              <div className="feature-hot__title">
                <i className="fas fa-check-circle" />
                HỌC PHÍ
              </div>
              <div className="feature-hot__description">
                Tự chọn gia sư và tự chủ động đưa ra mức học phí phù hợp với yêu
                cầu
              </div>
            </div>
            <div className="grid__column-6 feature-hot">
              <div className="feature-hot__title">
                <i className="fas fa-check-circle" />
                NHANH CHÓNG
              </div>
              <div className="feature-hot__description">
                Chỉ vài phút để tìm gia sư giỏi phù hợp với đúng yêu cầu của gia
                đình
              </div>
            </div>
            <div className="grid__column-6 feature-hot">
              <div className="feature-hot__title">
                <i className="fas fa-check-circle" />
                MIỄN PHÍ
              </div>
              <div className="feature-hot__description">
                Nguời học không phải trả bất kỳ khoản phí kết nối tìm gia sư cho
                chúng tôi
              </div>
            </div>
            <div className="grid__column-6 feature-hot">
              <div className="feature-hot__title">
                <i className="fas fa-check-circle" />
                TIỆN LỢI
              </div>
              <div className="feature-hot__description">
                Công nghệ 4.0 giúp bạn tự kết nối với hàng ngàn gia sư ngay trên
                Smartphone
              </div>
            </div>
            <div className="grid__column-6 feature-hot">
              <div className="feature-hot__title">
                <i className="fas fa-check-circle" />
                ĐA DẠNG
              </div>
              <div className="feature-hot__description">
                Người học có thể lựa chọn gia sư là: Giáo viên, Sinh viên,..
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Main;
