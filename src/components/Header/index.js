import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions";

const Header = (props) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { authenticate } = useSelector((state) => state.auth);
  const role = localStorage.getItem("role");
  const link_img = "/assets/img/avatar.jpg";
  const link_img_logo = "/assets/img/logo-final.png";


  return (
    <>
      <header className="header">
        <div className="grid">
          <nav className="header__navbar">
            <ul className="header__navbar-list">
              <li className="header__navbar-item header__navbar-item--separate">
                Ứng dụng kết nối gia sư và người học
              </li>
              <li className="header__navbar-item">
                <span className="header__navbar-item-title">Kết nối</span>
                <a href="#" className="header__navbar-icon-link">
                  <i className="header__navbar-icon fab fa-facebook" />
                </a>
                <a href="#" className="header__navbar-icon-link">
                  <i className="header__navbar-icon fab fa-instagram" />
                </a>
              </li>
            </ul>
            <ul className="header__navbar-list">
              <li className="header__navbar-item display-notify">
                <a href="#" className="header__navbar-item-link">
                  <i className="header__navbar-icon fas fa-bell" />
                  Thông báo
                </a>
              </li>
              <li className="header__navbar-item">
                <a href="#" className="header__navbar-item-link">
                  <i className="header__navbar-icon far fa-question-circle" />
                  Trợ giúp
                </a>
              </li>
              {!authenticate ? (
                <>
                  <li class="header__navbar-item  header__navbar-item--separate">
                    <Link
                      to="/signup"
                      className="header__navbar-item-link header__navbar-item--strong"
                    >
                      Đăng kí
                    </Link>
                  </li>
                  <li class="header__navbar-item header__navbar-item--strong">
                    <Link
                      to="/signin"
                      className="header__navbar-item-link header__navbar-item--strong"
                    >
                      Đăng nhập
                    </Link>
                  </li>
                </>
              ) : (
                <li className="header__navbar-item header__navbar-user">
                  {role === "ROLE_STUDENT" ? (
                    <img
                      src={link_img}
                      alt="vv"
                      className="header__navbar-user-img"
                    />
                  ) : (
                    <img
                      src={user.avatar ? user.avatar : link_img}
                      alt=""
                      className="header__navbar-user-img"
                    />
                  )}

                  <span className="header__navbar-user-name">{user.name}</span>
                  <ul className="header__navbar-user-menu">
                    {role === "ROLE_TUTOR" ? (
                      <li className="header__navbar-user-menu-item">
                        <Link to="/updatetutor">Tài khoản</Link>
                      </li>
                    ) : (
                      <li className="header__navbar-user-menu-item">
                        <Link to="/updatestudent">Tài khoản</Link>
                      </li>
                    )}
                    <li className="header__navbar-user-menu-item">
                      <Link to="/updatepass">Đổi mật khẩu</Link>
                    </li>
                    {/* <li className="header__navbar-user-menu-item">
                      <a href="#">Địa chỉ của tôi</a>
                    </li>
                    <li className="header__navbar-user-menu-item">
                      <a href="#">Đơn mua</a>
                    </li> */}
                    <li className="header__navbar-user-menu-item">
                      <a href="/" onClick={() => dispatch(logout())}>
                        Đăng xuất
                      </a>
                    </li>
                  </ul>
                </li>
              )}
            </ul>
          </nav>
          <div className="header-with-search">
            <Link className="header__logo" to="/">
              <img
                src={link_img_logo}
                alt=""
                className="header__logo-img"
              />
            </Link>
            {role === "ROLE_STUDENT" ? (
              <div className="header__search">
                <ul className="header__search-list">
                  <li className="header__search-item">
                    <Link to="/listpostshare" className="header__search-link">
                      Lớp mới
                    </Link>
                  </li>
                  <li className="header__search-item">
                    <Link to="/listtutor" href className="header__search-link">
                      Tìm gia sư
                    </Link>
                  </li>

                  <li className="header__search-item header__search-drop">
                    <a href className="header__search-link">
                      Dành cho học sinh
                      <i className="fas fa-chevron-down" />
                    </a>
                    <ul className="header__search-menu">
                      <li className="header__search-menu-item">
                        <Link to="/updatestudent">
                          Cập nhật thông tin học sinh
                        </Link>
                      </li>
                      <li className="header__search-menu-item">
                        <Link to="/addpost">Đăng bài</Link>
                      </li>
                      <li className="header__search-menu-item">
                        <Link to="/listpost">Quản lí bài đăng</Link>
                      </li>
                      <li className="header__search-menu-item">
                        <Link to="/managesuggestion">
                          Danh sách đề nghị dạy
                        </Link>
                      </li>
                      <li className="header__search-menu-item">
                        <Link to="#">more</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="header__search-item">
                    <Link
                      to="/notifycation"
                      href
                      className="header__search-link"
                    >
                      Thông báo
                    </Link>
                  </li>
                </ul>
              </div>
            ) : role === "ROLE_TUTOR" ? (
              <div className="header__search">
                <ul className="header__search-list">
                  <li className="header__search-item">
                    <Link to="/listpostshare" className="header__search-link">
                      Lớp mới
                    </Link>
                  </li>
                  <li className="header__search-item">
                    <Link to="/listtutor" href className="header__search-link">
                      Tìm gia sư
                    </Link>
                  </li>

                  <li className="header__search-item header__search-drop">
                    <a href className="header__search-link">
                      Dành cho gia sư
                      <i className="fas fa-chevron-down" />
                    </a>
                    <ul className="header__search-menu">
                      <li className="header__search-menu-item">
                        <Link to="/updatetutor">Cập nhật thông tin gia sư</Link>
                      </li>
                      <li className="header__search-menu-item">
                        <Link to="/manageinvitation">Danh sách mời dạy</Link>
                      </li>
                      <li className="header__search-menu-item">
                        <Link to="#">more</Link>
                      </li>
                    </ul>
                  </li>

                  <li className="header__search-item">
                    <Link
                      to="/notifycation"
                      href
                      className="header__search-link"
                    >
                      Thông báo
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <div className="header__search">
                <ul className="header__search-list">
                  <li className="header__search-item">
                    <Link to="/listpostshare" className="header__search-link">
                      Lớp mới
                    </Link>
                  </li>
                  <li className="header__search-item">
                    <Link to="/listtutor" href className="header__search-link">
                      Tìm gia sư
                    </Link>
                  </li>

                  <li className="header__search-item header__search-drop">
                    <a href className="header__search-link">
                      Dành cho gia sư
                      <i className="fas fa-chevron-down" />
                    </a>
                    <ul className="header__search-menu">
                      <li className="header__search-menu-item">
                        <Link>Cập nhật thông tin gia sư</Link>
                      </li>
                      <li className="header__search-menu-item">
                        <Link>Danh sách mời dạy</Link>
                      </li>
                      <li className="header__search-menu-item">
                        <Link to="#">more</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="header__search-item header__search-drop">
                    <a href className="header__search-link">
                      Dành cho học sinh
                      <i className="fas fa-chevron-down" />
                    </a>
                    <ul className="header__search-menu">
                      <li className="header__search-menu-item">
                        <Link>Cập nhật thông tin học sinh</Link>
                      </li>
                      <li className="header__search-menu-item">
                        <Link>Đăng bài</Link>
                      </li>
                      <li className="header__search-menu-item">
                        <Link>Quản lí bài đăng</Link>
                      </li>
                      <li className="header__search-menu-item">
                        <Link>Danh sách đề nghị dạy</Link>
                      </li>
                      <li className="header__search-menu-item">
                        <Link to="#">more</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="header__search-item">
                    <Link href className="header__search-link">
                      Thông báo
                    </Link>
                  </li>
                </ul>
              </div>
            )}
            <div className="header__cart">
              {/* <i className="header__cart-icon fas fa-cart-plus" /> */}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
