import { useFormik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import * as Yup from "yup";
import { changePassword } from "../../actions/Admin/settings.actions";
import Main from "../Main";

UpdatePass.propTypes = {};
function UpdatePass(props) {
  const dispatch = useDispatch();
  const setting_admin = useSelector((state) => state.setting_admin);
  const showError = setting_admin.messagePass;
  // const [oldPassword, setOldPassword] = useState("");
  // const [newPassword, setNewPassword] = useState("");
  // const [reNewPassword, setReNewPassword] = useState("");
  // const updatepass = (e) => {
  //   e.preventDefault();
  //   const send = {
  //     oldPassword,
  //     newPassword,
  //   };
  //   // alert(JSON.stringify(send));
  //   UpdatePassword(dispatch, send);
  // };

  const formik = useFormik({
    initialValues: {
      oldPassword: "",
      newPassword: "",
      reNewPassword: "",
    },
    validationSchema: Yup.object({
      oldPassword: Yup.string()
        .min(6, "Mật khẩu phải lớn hơn 6 kí tự")
        .required("Required"),
      newPassword: Yup.string()
        .min(6, "Mật khẩu phải lớn hơn 6 kí tự")
        .required("Required"),
      reNewPassword: Yup.string()
        .min(6, "Mật khẩu phải lớn hơn 6 kí tự")
        .oneOf([Yup.ref("newPassword")], "Password's not match")
        .required("Required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      const send = {
        oldPassword: values.oldPassword,
        newPassword: values.newPassword,
      };
      // alert(JSON.stringify(send));
      await dispatch(changePassword(send));
      resetForm({});
    },
  });

  return (
    <>
      <ToastContainer />
      <Main />
      <div className="modal">
        <div className="modal__overlay"></div>
        <div className="modal__body">
          {/* Login Form */}
          <form className="auth-form" onSubmit={formik.handleSubmit}>
            <div className="auth-form__container">
              <div
                className="auth-form__header"
                style={{ textAlign: "center", display: "block" }}
              >
                <h3 className="auth-form__heading">CẬP NHẬT MẬT KHẨU</h3>
              </div>
              <div className="auth-form__form">
                {showError === "Password is wrong" ? (
                  <h2 style={{ textAlign: "center", color: "red" }}>
                    Nhập sai mật khẩu cũ
                  </h2>
                ) : null}
                {showError === "Update password is success" ? (
                  <h2 style={{ textAlign: "center", color: "green" }}>
                    Cập nhật mật khẩu thành công
                  </h2>
                ) : null}
                <div className="auth-form__group">
                  <input
                    type="password"
                    placeholder="Nhập mật khẩu cũ"
                    className="auth-form__input"
                    name="oldPassword"
                    // value={oldPassword}
                    // onChange={(e) => setOldPassword(e.target.value)}
                    required
                    value={formik.values.oldPassword}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.oldPassword && formik.touched.oldPassword && (
                    <p style={{ color: "red", fontSize: "14px" }}>
                      {formik.errors.oldPassword}
                    </p>
                  )}
                </div>
                <div className="auth-form__group">
                  <input
                    type="password"
                    placeholder="Nhập mật khẩu mới"
                    className="auth-form__input"
                    name="newPassword"
                    // value={newPassword}
                    // onChange={(e) => setNewPassword(e.target.value)}
                    required
                    value={formik.values.newPassword}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.newPassword && formik.touched.newPassword && (
                    <p style={{ color: "red", fontSize: "14px" }}>
                      {formik.errors.newPassword}
                    </p>
                  )}
                </div>
                <div className="auth-form__group">
                  <input
                    type="password"
                    placeholder="Nhập lại mật khẩu mới"
                    className="auth-form__input"
                    name="reNewPassword"
                    // value={reNewPassword}
                    // onChange={(e) => setReNewPassword(e.target.value)}
                    required
                    value={formik.values.reNewPassword}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.reNewPassword &&
                    formik.touched.reNewPassword && (
                      <p style={{ color: "red", fontSize: "14px" }}>
                        {formik.errors.reNewPassword}
                      </p>
                    )}
                </div>
              </div>
              <div
                className="auth-form__controls"
                style={{ marginBottom: "16px" }}
              >
                <Link
                  to="/"
                  className="btn btn--normal auth-form__controls-back  "
                >
                  TRỞ LẠI
                </Link>
                <button className="btn btn--primary" type="submit">
                  ĐỔI MẬT KHẨU
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default UpdatePass;
