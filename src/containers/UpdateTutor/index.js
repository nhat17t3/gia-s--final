import React, { useEffect, useState } from "react";
import MultiSelect from "react-multi-select-component";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Layout from "../../components/Layout";
import {
  changeAvatar,
  changeInformation,
  getInformation,
} from "../../actions/Admin/settings.actions";

UpdateTutor.propTypes = {};

function UpdateTutor(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  const [avatar, setAvatar] = useState(null);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [subject, setSubject] = useState([]);
  const [grade, setGrade] = useState([]);
  const [phonenumber, setPhonenumber] = useState("");
  const [address, setAddress] = useState("");
  const [qualification, setQualification] = useState("");
  const [description, setDescription] = useState("");

  const [sang_2, setSang_2] = useState(false);
  const [chieu_2, setChieu_2] = useState(false);
  const [toi_2, setToi_2] = useState(false);
  const [sang_3, setSang_3] = useState(false);
  const [chieu_3, setChieu_3] = useState(false);
  const [toi_3, setToi_3] = useState(false);
  const [sang_4, setSang_4] = useState(false);
  const [chieu_4, setChieu_4] = useState(false);
  const [toi_4, setToi_4] = useState(false);
  const [sang_5, setSang_5] = useState(false);
  const [chieu_5, setChieu_5] = useState(false);
  const [toi_5, setToi_5] = useState(false);
  const [sang_6, setSang_6] = useState(false);
  const [chieu_6, setChieu_6] = useState(false);
  const [toi_6, setToi_6] = useState(false);
  const [sang_7, setSang_7] = useState(false);
  const [chieu_7, setChieu_7] = useState(false);
  const [toi_7, setToi_7] = useState(false);
  const [sang_8, setSang_8] = useState(false);
  const [chieu_8, setChieu_8] = useState(false);
  const [toi_8, setToi_8] = useState(false);

  const [a, setA] = useState(false);

  useEffect(() => {
    // GetProfile(dispatch);
    // dispatch(getInformation());
  }, [a]);
  const editedTutor = useSelector((state) => {
    const getTutor = state.auth.user;
    return getTutor;
  });
  console.log("edit tutor:", editedTutor);

  useEffect(() => {
    if (editedTutor.schedules != null) {
      let b = [];
      for (let a of editedTutor.subject) {
        let c = { label: a, value: a };
        b.push(c);
      }
      let i = [];
      for (let j of editedTutor.grade) {
        let k = { label: j, value: j };
        i.push(k);
      }
      console.log("vvvvv", editedTutor);
      setAvatar(editedTutor.avatar);
      setName(editedTutor.name);
      setAge(editedTutor.age);
      setGender(editedTutor.gender);
      setSubject(b);
      setGrade(i);
      setPhonenumber(editedTutor.phonenumber);
      setAddress(editedTutor.address);
      setQualification(editedTutor.qualification);
      setDescription(editedTutor.description);

      setSang_2(editedTutor.schedules.sang_2);
      setChieu_2(editedTutor.schedules.chieu_2);
      setToi_2(editedTutor.schedules.toi_2);
      setSang_3(editedTutor.schedules.sang_3);
      setChieu_3(editedTutor.schedules.chieu_3);
      setToi_3(editedTutor.schedules.toi_3);
      setSang_4(editedTutor.schedules.sang_4);
      setChieu_4(editedTutor.schedules.chieu_4);
      setToi_4(editedTutor.schedules.toi_4);
      setSang_5(editedTutor.schedules.sang_5);
      setChieu_5(editedTutor.schedules.chieu_5);
      setToi_5(editedTutor.schedules.toi_5);
      setSang_6(editedTutor.schedules.sang_6);
      setChieu_6(editedTutor.schedules.chieu_6);
      setToi_6(editedTutor.schedules.toi_6);
      setSang_7(editedTutor.schedules.sang_7);
      setChieu_7(editedTutor.schedules.chieu_7);
      setToi_7(editedTutor.schedules.toi_7);
      setSang_8(editedTutor.schedules.sang_8);
      setChieu_8(editedTutor.schedules.chieu_8);
      setToi_8(editedTutor.schedules.toi_8);
    }
  }, [editedTutor, a]);

  // const [avatar, setAvatar] = useState(editedTutor.avatar);
  // const [name, setName] = useState(editedTutor.name);
  // const [age, setAge] = useState(editedTutor.age);
  // const [subject, setSubject] = useState(editedTutor.subject[0]);
  // const [grade, setGrade] = useState(editedTutor.grade[0]);
  // const [phonenumber, setPhonenumber] = useState(editedTutor.phonenumber);
  // const [address, setAddress] = useState(editedTutor.address);
  // const [qualification, setQualification] = useState(editedTutor.qualification);
  // const [description, setDescription] = useState(editedTutor.description);

  // const [sang_2, setSang_2] = useState(editedTutor.schedules.sang_2);
  // const [chieu_2, setChieu_2] = useState(editedTutor.schedules.chieu_2);
  // const [toi_2, setToi_2] = useState(editedTutor.schedules.toi_2);
  // const [sang_3, setSang_3] = useState(editedTutor.schedules.sang_3);
  // const [chieu_3, setChieu_3] = useState(editedTutor.schedules.chieu_3);
  // const [toi_3, setToi_3] = useState(editedTutor.schedules.toi_3);
  // const [sang_4, setSang_4] = useState(editedTutor.schedules.sang_4);
  // const [chieu_4, setChieu_4] = useState(editedTutor.schedules.chieu_4);
  // const [toi_4, setToi_4] = useState(editedTutor.schedules.toi_4);
  // const [sang_5, setSang_5] = useState(editedTutor.schedules.sang_5);
  // const [chieu_5, setChieu_5] = useState(editedTutor.schedules.chieu_5);
  // const [toi_5, setToi_5] = useState(editedTutor.schedules.toi_5);
  // const [sang_6, setSang_6] = useState(editedTutor.schedules.sang_6);
  // const [chieu_6, setChieu_6] = useState(editedTutor.schedules.chieu_6);
  // const [toi_6, setToi_6] = useState(editedTutor.schedules.toi_6);
  // const [sang_7, setSang_7] = useState(editedTutor.schedules.sang_7);
  // const [chieu_7, setChieu_7] = useState(editedTutor.schedules.chieu_7);
  // const [toi_7, setToi_7] = useState(editedTutor.schedules.toi_7);
  // const [sang_8, setSang_8] = useState(editedTutor.schedules.sang_8);
  // const [chieu_8, setChieu_8] = useState(editedTutor.schedules.chieu_8);
  // const [toi_8, setToi_8] = useState(editedTutor.schedules.toi_8);

  const optionAddress = (
    <>
      <option value="" hidden>
        Địa chỉ
      </option>
      <option value={"Liên Chiểu"}>Liên Chiểu</option>
      <option value={"Ngũ Hành Sơn"}>Ngũ Hành Sơn</option>
      <option value={"Sơn Trà"}>Sơn Trà</option>
      <option value={"Thanh Khê"}>Thanh Khê</option>
      <option value={"Hoà Vang"}>Hoà Vang</option>
      <option value={"Hải Châu"}>Hải Châu</option>
    </>
  );

  // const optionSubject = (
  //   <>
  //     <option value={"Toán"}>Toán</option>
  //     <option value={"Lý"}>Lý</option>
  //     <option value={"Hóa"}>Hóa</option>
  //     <option value={"Tiếng Anh"}>Tiếng Anh</option>
  //     <option value={"Ngữ Văn"}>Văn</option>
  //     <option value={"Tiếng Việt"}>Tiếng Việt</option>
  //     <option value={"Lịch sử"}>Lịch sử</option>
  //     <option value={"Địa lý"}>Địa lý</option>
  //     <option value={"Sinh"}>Sinh</option>
  //   </>
  // );

  // const optionGrade = (
  //   <>
  //     <option value={"Lớp 1"}>lớp 1</option>
  //     <option value={"Lớp 2"}>lớp 2</option>
  //     <option value={"Lớp 3"}>lớp 3</option>
  //     <option value={"Lớp 4"}>lớp 4</option>
  //     <option value={"Lớp 5"}>lớp 5</option>
  //     <option value={"Lớp 6"}>lớp 6</option>
  //     <option value={"Lớp 7"}>lớp 7</option>
  //     <option value={"Lớp 8"}>lớp 8</option>
  //     <option value={"Lớp 9"}>lớp 9</option>
  //     <option value={"Lớp 10"}>lớp 10</option>
  //     <option value={"Lớp 11"}>lớp 11</option>
  //     <option value={"Lớp 12"}>lớp 12</option>
  //   </>
  // );
  const optionSubject = [
    { label: "Toán ", value: "Toán" },
    { label: "Lý ", value: "Lý" },
    { label: "Hóa", value: "Hóa" },
    { label: "Tiếng Anh", value: "Tiếng Anh" },
    { label: "Ngữ Văn", value: "Ngữ Văn" },
    { label: "Tiếng Việt", value: "Tiếng Việt" },
    { label: "Lịch Sử", value: "Lịch Sử" },
  ];
  const optionGrade = [
    { label: "Lớp 1", value: "Lớp 1" },
    { label: "Lớp 2", value: "Lớp 2" },
    { label: "Lớp 3", value: "Lớp 3" },
    { label: "Lớp 4", value: "Lớp 4" },
    { label: "Lớp 5", value: "Lớp 5" },
    { label: "Lớp 6", value: "Lớp 6" },
    { label: "Lớp 7", value: "Lớp 7" },
    { label: "Lớp 8", value: "Lớp 8" },
    { label: "Lớp 9", value: "Lớp 9" },
    { label: "Lớp 10", value: "Lớp 10" },
    { label: "Lớp 11", value: "Lớp 11" },
    { label: "Lớp 12", value: "Lớp 12" },
  ];

  const edittutor = async (e) => {
    let listSubject = [];
    for (const a of subject) {
      listSubject.push(a.value);
    }
    let listGrade = [];
    for (const a of grade) {
      listGrade.push(a.value);
    }
    e.preventDefault();
    const k = {
      name,
      age,
      gender: Number(gender),
      grade: listGrade,
      subject: listSubject,
      phonenumber,
      address,
      qualification,
      description,
      schedules: {
        sang_2,
        chieu_2,
        toi_2,
        sang_3,
        chieu_3,
        toi_3,
        sang_4,
        chieu_4,
        toi_4,
        sang_5,
        chieu_5,
        toi_5,
        sang_6,
        chieu_6,
        toi_6,
        sang_7,
        chieu_7,
        toi_7,
        sang_8,
        chieu_8,
        toi_8,
      },
    };
    console.log(k);
    // alert(JSON.stringify(k));

    await dispatch(changeInformation(k));
    setA(!a);
    history.push("/updatetutor");
  };

  const update_avatar = async () => {
    // Create an object of formData
    const formData = new FormData();

    // Update the formData object
    formData.append(
      "file",
      avatar
      // avatar.name,
    );
    // Details of the uploaded file
    console.log("update avatar", avatar);
    await dispatch(changeAvatar(formData));
    setA(!a);
    // history.push("/updatetutor");
  };

  //  const  imageHandler = (e) => {
  //     const reader = new FileReader();
  //     reader.onload = () =>{
  //       if(reader.readyState === 2){
  //         setAvatar(reader.result )
  //       }
  //     }
  //     reader.readAsDataURL(e.target.files[0])

  //   };

  return !editedTutor ? (
    <div className="loader"></div>
  ) : (
    <>
      <ToastContainer />
      <Layout>
        <form className="app__container" onSubmit={edittutor}>
          <div className="grid">
            <h2 className="addpost__heading">CẬP NHẬT THÔNG TIN GIA SƯ</h2>
            <div className="addpost__separate" />
            <div className="addpost__content">
              <div className>
                <div className="grid__row">
                  <div className="grid__column-6">
                    <div className="tutor-avatar">
                      <span>Ảnh đại diện ( chụp một mình,nhìn rõ mặt )</span>
                      <div className="tutor-container ">
                        <img
                          src={
                            avatar !== null
                              ? avatar
                              : "../../../../assets/img/avatar.jpg"
                          }
                          // preview="$avatar"
                          alt="Avatar"
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
                            // onChange={imageHandler}
                            onChange={(e) => setAvatar(e.target.files[0])}
                          />
                        </label>
                        
                      </div>
                      <button
                          className="btn notify-item__accept-link "
                          onClick={update_avatar}
                          style={{ marginLeft: "200px" }}
                        >
                          Cập nhật avatar
                        </button>
                    </div>
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
                  <div className="grid__column-6">
                    <div className="form__group">
                      <div className="form__lable">Môn học</div>
                      {/* <select
                        name="subject"
                        id
                        className="form__input"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        required
                      >
                        <option value selected hidden>
                          Môn
                        </option>
                        {optionSubject}
                      </select> */}
                      <MultiSelect
                        options={optionSubject}
                        value={subject}
                        onChange={setSubject}
                        className="form__input-select"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid__column-6">
                    <div className="form__group">
                      <div className="form__lable">Lớp</div>
                      {/* <select
                        name="grade"
                        id
                        className="form__input"
                        value={grade}
                        onChange={(e) => setGrade(e.target.value)}
                        required
                      >
                        <option value selected hidden>
                          Lớp
                        </option>
                        {optionGrade}
                      </select> */}
                      <MultiSelect
                        options={optionGrade}
                        value={grade}
                        onChange={setGrade}
                        className="form__input-select"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid__column-6">
                    <div className="form__group">
                      <div className="form__lable">Địa chỉ</div>
                      <select
                        name="address"
                        id
                        className="form__input"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                      >
                        {optionAddress}
                      </select>
                    </div>
                  </div>
                  <div className="grid__column-6">
                    <div className="form__group">
                      <div className="form__lable">Bạn đang làm nghề gì</div>
                      <input
                        type="qualification"
                        name="price"
                        className="form__input"
                        value={qualification}
                        onChange={(e) => setQualification(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="grid__column-12">
                    <div className="form__group">
                      <div className="form__lable">Mô tả bản thân</div>
                      <textarea
                        name="description"
                        cols={30}
                        rows={6}
                        className="form__input"
                        onChange={(e) => setDescription(e.target.value)}
                        required
                        value={description}
                      >
                        {description}
                      </textarea>
                    </div>
                  </div>
                  <div className="grid__column-12">
                    <div className="form__group">
                      <div className="form__lable">Thời gian có thể dạy</div>
                      <div className="calendar-commment">
                        ( Màu XANH hiển thị những lịch có thể dạy )
                      </div>

                      <div className="calender">
                        <div className="calendar__row">
                          <h3 className="calendar__heading">Thứ 2</h3>
                          <ul className="calendar-list">
                            <li className="calendar-item">
                              <label
                                className={
                                  sang_2
                                    ? "calendar-label calendar-active"
                                    : "calendar-label"
                                }
                              >
                                <input
                                  className="radio-calendar"
                                  type="checkbox"
                                  name="sang_2"
                                  value={sang_2}
                                  onChange={() => setSang_2(!sang_2)}
                                />
                                Sáng
                              </label>
                            </li>
                            <li className="calendar-item">
                              <label
                                className={
                                  chieu_2
                                    ? "calendar-label calendar-active"
                                    : "calendar-label"
                                }
                              >
                                <input
                                  className="radio-calendar"
                                  type="checkbox"
                                  name="chieu_2"
                                  onChange={() => setChieu_2(!chieu_2)}
                                />
                                Chiều
                              </label>
                            </li>
                            <li className="calendar-item">
                              <label
                                className={
                                  toi_2
                                    ? "calendar-label calendar-active"
                                    : "calendar-label"
                                }
                              >
                                <input
                                  className="radio-calendar"
                                  type="checkbox"
                                  name="toi_2"
                                  onChange={() => setToi_2(!toi_2)}
                                />
                                Tối
                              </label>
                            </li>
                          </ul>
                        </div>

                        <div className="calendar__row">
                          <h3 className="calendar__heading">Thứ 3</h3>
                          <ul className="calendar-list">
                            <li className="calendar-item">
                              <label
                                className={
                                  sang_3
                                    ? "calendar-label calendar-active"
                                    : "calendar-label"
                                }
                              >
                                <input
                                  className="radio-calendar"
                                  type="checkbox"
                                  name="sang_3"
                                  onChange={() => setSang_3(!sang_3)}
                                />
                                Sáng
                              </label>
                            </li>
                            <li className="calendar-item">
                              <label
                                className={
                                  chieu_3
                                    ? "calendar-label calendar-active"
                                    : "calendar-label"
                                }
                              >
                                <input
                                  className="radio-calendar"
                                  type="checkbox"
                                  name="chieu_3"
                                  onChange={() => setChieu_3(!chieu_3)}
                                />
                                Chiều
                              </label>
                            </li>
                            <li className="calendar-item">
                              <label
                                className={
                                  toi_3
                                    ? "calendar-label calendar-active"
                                    : "calendar-label"
                                }
                              >
                                <input
                                  className="radio-calendar"
                                  type="checkbox"
                                  name="toi_3"
                                  onChange={() => setToi_3(!toi_3)}
                                />
                                Tối
                              </label>
                            </li>
                          </ul>
                        </div>

                        <div className="calendar__row">
                          <h3 className="calendar__heading">Thứ 4</h3>
                          <ul className="calendar-list">
                            <li className="calendar-item">
                              <label
                                className={
                                  sang_4
                                    ? "calendar-label calendar-active"
                                    : "calendar-label"
                                }
                              >
                                <input
                                  className="radio-calendar"
                                  type="checkbox"
                                  name="sang_4"
                                  onChange={() => setSang_4(!sang_4)}
                                  defaultValue="sang_4"
                                />
                                Sáng
                              </label>
                            </li>
                            <li className="calendar-item">
                              <label
                                className={
                                  chieu_4
                                    ? "calendar-label calendar-active"
                                    : "calendar-label"
                                }
                              >
                                <input
                                  className="radio-calendar"
                                  type="checkbox"
                                  name="chieu_4"
                                  defaultValue="chieu_4"
                                  onChange={() => setChieu_4(!chieu_4)}
                                />
                                Chiều
                              </label>
                            </li>
                            <li className="calendar-item">
                              <label
                                className={
                                  toi_4
                                    ? "calendar-label calendar-active"
                                    : "calendar-label"
                                }
                              >
                                <input
                                  className="radio-calendar"
                                  type="checkbox"
                                  name="toi_4"
                                  defaultValue="toi_4"
                                  onChange={() => setToi_4(!toi_4)}
                                />
                                Tối
                              </label>
                            </li>
                          </ul>
                        </div>

                        <div className="calendar__row">
                          <h3 className="calendar__heading">Thứ 5</h3>
                          <ul className="calendar-list">
                            <li className="calendar-item">
                              <label
                                className={
                                  sang_5
                                    ? "calendar-label calendar-active"
                                    : "calendar-label"
                                }
                              >
                                <input
                                  className="radio-calendar"
                                  type="checkbox"
                                  name="sang_5"
                                  defaultValue="sang_5"
                                  onChange={() => setSang_5(!sang_5)}
                                />
                                Sáng
                              </label>
                            </li>
                            <li className="calendar-item">
                              <label
                                className={
                                  chieu_5
                                    ? "calendar-label calendar-active"
                                    : "calendar-label"
                                }
                              >
                                <input
                                  className="radio-calendar"
                                  type="checkbox"
                                  name="chieu_5"
                                  defaultValue="chieu_5"
                                  onChange={() => setChieu_5(!chieu_5)}
                                />
                                Chiều
                              </label>
                            </li>
                            <li className="calendar-item">
                              <label
                                className={
                                  toi_5
                                    ? "calendar-label calendar-active"
                                    : "calendar-label"
                                }
                              >
                                <input
                                  className="radio-calendar"
                                  type="checkbox"
                                  name="toi_5"
                                  defaultValue="toi_5"
                                  onChange={() => setToi_5(!toi_5)}
                                />
                                Tối
                              </label>
                            </li>
                          </ul>
                        </div>

                        <div className="calendar__row">
                          <h3 className="calendar__heading">Thứ 6</h3>
                          <ul className="calendar-list">
                            <li className="calendar-item">
                              <label
                                className={
                                  sang_6
                                    ? "calendar-label calendar-active"
                                    : "calendar-label"
                                }
                              >
                                <input
                                  className="radio-calendar"
                                  type="checkbox"
                                  name="sang_6"
                                  defaultValue="sang_6"
                                  onChange={() => setSang_6(!sang_6)}
                                />
                                Sáng
                              </label>
                            </li>
                            <li className="calendar-item">
                              <label
                                className={
                                  chieu_6
                                    ? "calendar-label calendar-active"
                                    : "calendar-label"
                                }
                              >
                                <input
                                  className="radio-calendar"
                                  type="checkbox"
                                  name="chieu_6"
                                  defaultValue="chieu_6"
                                  onChange={() => setChieu_6(!chieu_6)}
                                />
                                Chiều
                              </label>
                            </li>
                            <li className="calendar-item">
                              <label
                                className={
                                  toi_6
                                    ? "calendar-label calendar-active"
                                    : "calendar-label"
                                }
                              >
                                <input
                                  className="radio-calendar"
                                  type="checkbox"
                                  name="toi_6"
                                  defaultValue="toi_6"
                                  onChange={() => setToi_6(!toi_6)}
                                />
                                Tối
                              </label>
                            </li>
                          </ul>
                        </div>

                        <div className="calendar__row">
                          <h3 className="calendar__heading">Thứ 7</h3>
                          <ul className="calendar-list">
                            <li className="calendar-item">
                              <label
                                className={
                                  sang_7
                                    ? "calendar-label calendar-active"
                                    : "calendar-label"
                                }
                              >
                                <input
                                  className="radio-calendar"
                                  type="checkbox"
                                  name="sang_7"
                                  defaultValue="sang_7"
                                  onChange={() => setSang_7(!sang_7)}
                                />
                                Sáng
                              </label>
                            </li>
                            <li className="calendar-item">
                              <label
                                className={
                                  chieu_7
                                    ? "calendar-label calendar-active"
                                    : "calendar-label"
                                }
                              >
                                <input
                                  className="radio-calendar"
                                  type="checkbox"
                                  name="chieu_7"
                                  defaultValue="chieu_7"
                                  onChange={() => setChieu_7(!chieu_7)}
                                />
                                Chiều
                              </label>
                            </li>
                            <li className="calendar-item">
                              <label
                                className={
                                  toi_7
                                    ? "calendar-label calendar-active"
                                    : "calendar-label"
                                }
                              >
                                <input
                                  className="radio-calendar"
                                  type="checkbox"
                                  name="toi_7"
                                  defaultValue="toi_7"
                                  onChange={() => setToi_7(!toi_7)}
                                />
                                Tối
                              </label>
                            </li>
                          </ul>
                        </div>

                        <div className="calendar__row">
                          <h3 className="calendar__heading">Chủ nhật</h3>
                          <ul className="calendar-list">
                            <li className="calendar-item">
                              <label
                                className={
                                  sang_8
                                    ? "calendar-label calendar-active"
                                    : "calendar-label"
                                }
                              >
                                <input
                                  className="radio-calendar"
                                  type="checkbox"
                                  name="sang_8"
                                  defaultValue="sang_8"
                                  onChange={() => setSang_8(!sang_8)}
                                />
                                Sáng
                              </label>
                            </li>
                            <li className="calendar-item">
                              <label
                                className={
                                  chieu_8
                                    ? "calendar-label calendar-active"
                                    : "calendar-label"
                                }
                              >
                                <input
                                  className="radio-calendar"
                                  type="checkbox"
                                  name="chieu_8"
                                  defaultValue="chieu_8"
                                  onChange={() => setChieu_8(!chieu_8)}
                                />
                                Chiều
                              </label>
                            </li>
                            <li className="calendar-item">
                              <label
                                className={
                                  toi_8
                                    ? "calendar-label calendar-active"
                                    : "calendar-label"
                                }
                              >
                                <input
                                  className="radio-calendar"
                                  type="checkbox"
                                  name="toi_8"
                                  defaultValue="toi_8"
                                  onChange={() => setToi_8(!toi_8)}
                                />
                                Tối
                              </label>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
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
      </Layout>
    </>
  );
}

export default UpdateTutor;
