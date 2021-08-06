import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "../../components/Layout";
import { changeInformation, getInformation } from "../../actions/Admin/settings.actions";

UpdateStudent.propTypes = {};

function UpdateStudent(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [gender, setGender] = useState("");

  const [a, setA] = useState(false);

  useEffect(() => {
    // GetProfile(dispatch);
    // dispatch(getInformation());
  }, [a]);
  const editedStudent = useSelector((state) => {
    const getStudent = state.auth.user;
    return getStudent;
  });
  console.log("edit student:", editedStudent);

  useEffect(() => {
    if (editedStudent.name != null) {
      setName(editedStudent.name);
      setAge(editedStudent.age);
      setPhonenumber(editedStudent.phonenumber);
      setGender(editedStudent.gender);
    }
  }, [editedStudent, a]);

  const editStudent = async (e) => {
    e.preventDefault();
    const k = {
      name,
      age,
      gender: Number(gender),
      phonenumber,
    };
    console.log(k);
    // alert(JSON.stringify(k));

    await dispatch(changeInformation(k));
    setA(!a);
    history.push("/updatestudent");
  };

  return !editedStudent ? (
    <div className="loader"></div>
  ) : (
    <>
      <ToastContainer />
      <Layout>
        <form className="app__container" onSubmit={editStudent}>
          <div className="grid">
            <h2 className="addpost__heading">CẬP NHẬT THÔNG TIN GIA SƯ</h2>
            <div className="addpost__separate" />
            <div className="addpost__content">
              <div className>
                <div className="grid__row">
                  <div className="grid__column-3">
                    {/* <div className="tutor-avatar">
                      <span>Ảnh đại diện ( chụp một mình,nhìn rõ mặt )</span>
                      <div className="tutor-container ">
                        <img
                          src="https://giasu.htcon.vn/images/avatar.jpg"
                          preview="$avatar"
                          alt=""
                          className="tutor-info-image"
                        />
                        <label>
                          <i className="fa fa-camera hidden" />
                          <input
                            type="file"
                            className="hidden"
                            accept="image/*"
                            id="avatar"
                            name="avatar"
                            file-upload
                          />
                        </label>
                      </div>
                    </div> */}
                  </div>
                  <div className="grid__column-6">
                    <div className="form__group">
                      <div className="form__lable">Họ và tên</div>
                      <input
                        type="text"
                        name="name"
                        className="form__input"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form__group">
                      <div className="form__lable">Giới tính</div>
                      <select
                        name="gender"
                        id
                        className="form__input"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        required
                      >
                        <option value="" hidden>
                          Giới tính
                        </option>
                        <option value="0">Nam</option>
                        <option value="1">Nữ</option>
                        <option value="2">khác</option>
                      </select>
                    </div>
                    <div className="form__group">
                      <div className="form__lable">Tuổi</div>
                      <input
                        type="number"
                        name="age"
                        className="form__input"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form__group">
                      <div className="form__lable">Số điện thoại</div>
                      <input
                        type="number"
                        name="phonenumber"
                        className="form__input"
                        value={phonenumber}
                        onChange={(e) => setPhonenumber(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="grid__column-3"></div>
                  <button
                    className="btn btn--primary addpost-submit"
                    type="submit"
                  >
                    Cập nhật
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      <ToastContainer />

      </Layout>
    </>
  );
}

export default UpdateStudent;
