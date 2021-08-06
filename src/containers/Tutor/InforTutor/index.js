import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import {
  addInvitation,
  getListInvitation,
  getListTutor,
} from "../../../actions";
import { getListComment } from "../../../actions/Comment/comment.actions";
import Layout from "../../../components/Layout";
import AddComment from "../../Comment/AddComment";
import ListComment from "../../Comment/ListComment";

InforTutor.propTypes = {};

function InforTutor(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { tutorId } = useParams();
  const userID = useSelector((state) => state.auth.user.id);
  const role = localStorage.getItem("role");

  const [listcomment, setListcomment] = useState([]);
  const [a, setA] = useState(false);
  const [disablebtn, setDisablebtn] = useState(false);

  useEffect(() => {
    dispatch(getListTutor());
  }, []);

  useEffect(() => {
    dispatch(getListComment());
  }, [a]);

  useEffect(() => {
    dispatch(getListInvitation());
  }, [a]);

  const tutor = useSelector((state) => {
    const foundTutor = state.tutors.listTutor.find((x) => x.id === +tutorId);
    return foundTutor;
  });

  let comments = useSelector((state) => state.comments.listComment);
  useEffect(() => {
    let k = comments.filter((x) => x.idTutor === +tutorId);
    setListcomment(k);
  }, [comments]);

  let invitations = useSelector((state) => state.invitations.listInvitation);
  useEffect(() => {
    if (
      invitations.find((x) => x.idTutor === +tutorId && x.idStudent === +userID)
    )
      setDisablebtn(true);
  }, [invitations]);

  const reloadclick = () => {
    setA(!a);
  };
  const v = useSelector((state) => state.tutors.listTutor);
  if (v.length == 0) return null;

  return (
    <>
      <Layout>
        <div className="grid">
          <div className=" tutor-infor">
            <div className="tutor-infor__img" />
            <div className="grid__row">
              <div className="grid__column-2 tutor-infor__left">
                {tutor.avatar !== null ? (
                  <div
                    className="tutor-infor__avatar"
                    style={{
                      backgroundImage: `url(${tutor.avatar} )`,
                    }}
                  />
                ) : (
                  <div
                    className="tutor-infor__avatar"
                    style={{
                      backgroundImage: "url(../../../../assets/img/avatar.jpg)",
                    }}
                  />
                )}
                <div className="tutor-infor__id">ID gia sư: {tutor.id}</div>
              </div>
              <div className="grid__column-10 tutor-infor__right">
                <div className="tutor-infor__name">{tutor.name}</div>
                <div className="headblockSecond">
                  <span className="tutor-infor__item">
                    <i class="fas fa-pager"></i>
                    Tuổi: {tutor.age}
                  </span>
                  <span className="tutor-infor__item">
                    <i class="fas fa-transgender-alt"></i>
                    Giới tính:{" "}
                    {tutor.gender == 0
                      ? "Nam"
                      : tutor.gender == 1
                      ? "Nữ"
                      : "Khác"}
                  </span>
                </div>
                <div className="headblockSecond">
                  <span className="tutor-infor__item" href="#map">
                    <i className="fa fa-map-marker" />
                    {tutor.address}
                  </span>
                  {/* <div className="tutor-infor__item">
                    <i className="fa fa-tag" />
                    {tutor.price} vnđ/buổi
                  </div> */}
                  {role == "ROLE_STUDENT" ? (
                    <div className="tutor-infor__item">
                      {disablebtn === false ? (
                        <button
                          className="btn btn--primary"
                          onClick={async (tutor) => {
                            const invite = {
                              idTutor: Number(tutorId),
                            };
                            // alert(JSON.stringify(invite));
                            dispatch(addInvitation(invite));
                            // setA(!a);
                          }}
                        >
                          Mời dạy
                        </button>
                      ) : (
                        <button className="btn btn--primary btn--disable ">
                          Đã mời
                        </button>
                      )}
                    </div>
                  ) : null}
                </div>
                {/* <div className="headblockThird">
                  <div className="wrapBlockCount">
                    <div className="blockCount">
                      <span className="firstLine ">5</span>
                      <span className="secondtLine">Lớp đã dạy</span>
                    </div>
                    <div className="blockCount">
                      <span className="firstLine ">0</span>
                      <span className="secondtLine">Lớp dạy tại HTcon</span>
                    </div>
                    <div className="blockCount">
                      <span className="firstLine ">0</span>
                      <span className="secondtLine">Lượt thích</span>
                    </div>
                    <div className="blockCount">
                      <span className="firstLine ">0</span>
                      <span className="secondtLine">Lượt đánh giá</span>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="tutor-infor__content">
              <div className="header-block">
                <h2>THÔNG TIN GIA SƯ</h2>
              </div>
              <div className="tutor-infor__qualificartion">
                <h4>Gia sư dạy môn</h4>
                {tutor.subject.map((subject_item) => (
                  <span> {subject_item}</span>
                ))}
              </div>
              <div className="tutor-infor__qualificartion">
                <h4>Gia sư dạy lớp</h4>
                {tutor.grade.map((grade_item) => (
                  <span>{grade_item}</span>
                ))}
              </div>
              <div className="tutor-infor__qualificartion">
                <h4>Gia sư đang là</h4>
                <span>{tutor.qualification}</span>
              </div>
              <div className="tutor-infor__description">
                <h4>Mô tả chi tiết gia sư</h4>
                {tutor.description}
              </div>
              <div className="tutor-infor__schedule">
                <h4>
                  Lịch dạy gia sư ( Màu XANH hiển thị những lịch có thể học ):
                </h4>

                <div className="calender">
                  <div className="calendar__row">
                    <h3 className="calendar__heading">Thứ 2</h3>
                    <ul className="calendar-list">
                      <li className="calendar-item">
                        <label
                          className={
                            tutor.schedules.sang_2
                              ? "calendar-label calendar-active"
                              : "calendar-label"
                          }
                        >
                          Sáng
                        </label>
                      </li>
                      <li className="calendar-item">
                        <label
                          className={
                            tutor.schedules.chieu_2
                              ? "calendar-label calendar-active"
                              : "calendar-label"
                          }
                        >
                          Chiều
                        </label>
                      </li>
                      <li className="calendar-item">
                        <label
                          className={
                            tutor.schedules.toi_2
                              ? "calendar-label calendar-active"
                              : "calendar-label"
                          }
                        >
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
                            tutor.schedules.sang_3
                              ? "calendar-label calendar-active"
                              : "calendar-label"
                          }
                        >
                          Sáng
                        </label>
                      </li>
                      <li className="calendar-item">
                        <label
                          className={
                            tutor.schedules.chieu_3
                              ? "calendar-label calendar-active"
                              : "calendar-label"
                          }
                        >
                          Chiều
                        </label>
                      </li>
                      <li className="calendar-item">
                        <label
                          className={
                            tutor.schedules.toi_3
                              ? "calendar-label calendar-active"
                              : "calendar-label"
                          }
                        >
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
                            tutor.schedules.sang_4
                              ? "calendar-label calendar-active"
                              : "calendar-label"
                          }
                        >
                          Sáng
                        </label>
                      </li>
                      <li className="calendar-item">
                        <label
                          className={
                            tutor.schedules.chieu_4
                              ? "calendar-label calendar-active"
                              : "calendar-label"
                          }
                        >
                          Chiều
                        </label>
                      </li>
                      <li className="calendar-item">
                        <label
                          className={
                            tutor.schedules.toi_4
                              ? "calendar-label calendar-active"
                              : "calendar-label"
                          }
                        >
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
                            tutor.schedules.sang_5
                              ? "calendar-label calendar-active"
                              : "calendar-label"
                          }
                        >
                          Sáng
                        </label>
                      </li>
                      <li className="calendar-item">
                        <label
                          className={
                            tutor.schedules.chieu_5
                              ? "calendar-label calendar-active"
                              : "calendar-label"
                          }
                        >
                          Chiều
                        </label>
                      </li>
                      <li className="calendar-item">
                        <label
                          className={
                            tutor.schedules.toi_5
                              ? "calendar-label calendar-active"
                              : "calendar-label"
                          }
                        >
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
                            tutor.schedules.sang_6
                              ? "calendar-label calendar-active"
                              : "calendar-label"
                          }
                        >
                          Sáng
                        </label>
                      </li>
                      <li className="calendar-item">
                        <label
                          className={
                            tutor.schedules.chieu_6
                              ? "calendar-label calendar-active"
                              : "calendar-label"
                          }
                        >
                          Chiều
                        </label>
                      </li>
                      <li className="calendar-item">
                        <label
                          className={
                            tutor.schedules.toi_6
                              ? "calendar-label calendar-active"
                              : "calendar-label"
                          }
                        >
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
                            tutor.schedules.sang_7
                              ? "calendar-label calendar-active"
                              : "calendar-label"
                          }
                        >
                          Sáng
                        </label>
                      </li>
                      <li className="calendar-item">
                        <label
                          className={
                            tutor.schedules.chieu_7
                              ? "calendar-label calendar-active"
                              : "calendar-label"
                          }
                        >
                          Chiều
                        </label>
                      </li>
                      <li className="calendar-item">
                        <label
                          className={
                            tutor.schedules.toi_7
                              ? "calendar-label calendar-active"
                              : "calendar-label"
                          }
                        >
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
                            tutor.schedules.sang_8
                              ? "calendar-label calendar-active"
                              : "calendar-label"
                          }
                        >
                          Sáng
                        </label>
                      </li>
                      <li className="calendar-item">
                        <label
                          className={
                            tutor.schedules.chieu_8
                              ? "calendar-label calendar-active"
                              : "calendar-label"
                          }
                        >
                          Chiều
                        </label>
                      </li>
                      <li className="calendar-item">
                        <label
                          className={
                            tutor.schedules.toi_8
                              ? "calendar-label calendar-active"
                              : "calendar-label"
                          }
                        >
                          Tối
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="header-block">
                <h2>Bình luận</h2>
              </div>

              <div className="tutor-infor__comment">
                {role == "ROLE_STUDENT" ? (
                  <AddComment IDTUTOR={tutorId} reloadclick={reloadclick} />
                ) : null}
                <ListComment listcomment={listcomment} />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default InforTutor;
