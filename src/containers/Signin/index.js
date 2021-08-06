import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { login } from "../../actions";
import Main from "../Main";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

Login.propTypes = {};
function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const showError =  auth.error;

  const loginUser = (e) => {
    e.preventDefault();
    const send = {
      username,
      password,
    };

    // alert(JSON.stringify(send));
    dispatch(login(send));
  };

  if (auth.authenticate) {
    return <Redirect to={`/`} />;
  }

  if (auth.authenticating) {
    return <div className="loader" >
      
    </div>
  }
  
  return (
    <>
      <Main />
      <div className="modal">
        <div className="modal__overlay"></div>
        <div className="modal__body">
          {/* Login Form */}
          <form className="auth-form" onSubmit={loginUser}>
            <div className="auth-form__container">
              <div className="auth-form__header">
                <h3 className="auth-form__heading">ĐĂNG NHẬP</h3>
                <Link to="/signup" className="auth-form__switch-btn">
                  ĐĂNG KÍ
                </Link>
              </div>
              <div className="auth-form__form">

                  {
                    showError === "Unauthorized" ? (
                      <h2 style={{textAlign : "center", color:"red"}}>Sai tên đăng nhập hoặc mật khẩu</h2>
                    ) : null
                  }
                
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
                    type="password"
                    placeholder="Mật khẩu"
                    className="auth-form__input"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="auth-form__aside">
                <div className="auth-form__help">
                  <a
                    href="#"
                    className="auth-form__help-link auth-form__help-link-primary "
                  >
                    Quên mật khẩu
                  </a>
                  <span className="auth-form__help-link-seperate" />
                  <a href="#" className="auth-form__help-link">
                    Cần trợ giúp ?{" "}
                  </a>
                </div>
              </div>
              <div className="auth-form__controls">
                <Link
                  to="/"
                  className="btn btn--normal auth-form__controls-back  "
                >
                  TRỞ LẠI
                </Link>
                <button className="btn btn--primary" type="submit">
                  ĐĂNG NHẬP
                </button>
              </div>
            </div>
          
          </form>
        </div>
      </div>
      <ToastContainer autoClose={2000} />

    </>
  );
}
export default Login;
