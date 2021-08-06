import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { signup } from "../../actions/Admin/register.actions";
import Main from "../Main";

SignUp.propTypes = {};

function SignUp(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  const [username, setUsername] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const registerUser = async (e) => {
    e.preventDefault();
    const send = {
      username,
      phonenumber,
      email,
      password,
      role: [role],
    };
    console.log(send);
    // alert(JSON.stringify(send));
    await dispatch(signup(send));
    setUsername("");
    setPhonenumber("");
    setEmail("");
    setPassword("");
    setRole("");
  };
  return (
    <>
      <ToastContainer />
      <Main />
      <div className="modal">
        <div className="modal__overlay"></div>
        <div className="modal__body">
          {/* Register form */}
          <form className="auth-form" onSubmit={registerUser}>
            <div className="auth-form__container">
              <div className="auth-form__header">
                <h3 className="auth-form__heading">ĐĂNG KÍ</h3>
                <Link to="/signin" className="auth-form__switch-btn">
                  ĐĂNG NHẬP
                </Link>
              </div>
              <div className="auth-form__form">
                <div className="auth-form__group">
                  <input
                    type="text"
                    placeholder="Tên đăng nhập"
                    className="auth-form__input"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
                <div className="auth-form__group">
                  <input
                    type="email"
                    placeholder="Email"
                    className="auth-form__input"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="auth-form__group">
                  <input
                    type="number"
                    placeholder="Số điện thoại"
                    className="auth-form__input"
                    name="phonenumber"
                    value={phonenumber}
                    onChange={(e) => setPhonenumber(e.target.value)}
                    required
                  />
                </div>
                <div className="auth-form__group">
                  <input
                    type="password"
                    placeholder="Mật khẩu của bạn"
                    className="auth-form__input"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                {/* <div class="auth-form__group">
            <input type="password" placeholder="Nhập lại mật khẩu" class="auth-form__input">
          </div> */}
                <select
                  name="role"
                  id="role"
                  className="auth-form__input"
                  onChange={(e) => setRole(e.target.value)}
                  required
                  value={role}
                >
                  <option value="" hidden>
                    Bạn là Gia sư hay Học sinh
                  </option>
                  <option value="tutor">Gia sư</option>
                  <option value="student">Học sinh</option>
                </select>
              </div>
              <div className="auth-form__aside">
                <p className="auth-form__policy-text">
                  Bằng việc đăng kí, bạn đã đồng ý với chúng tôi về
                  <a href="#" className="auth-form__policy-link">
                    Điều khoản dịch vụ
                  </a>
                  và
                  <a href="#" className="auth-form__policy-link">
                    Chính sách bảo mật
                  </a>
                </p>
              </div>
              <div className="auth-form__controls">
                <Link
                  to="/"
                  className="btn btn--normal auth-form__controls-back  "
                >
                  TRỞ LẠI
                </Link>
                <button className="btn btn--primary" type="submit">
                  ĐĂNG KÍ
                </button>
              </div>
            </div>
        
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUp;
