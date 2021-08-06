import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getListPost } from "../../../actions";
import { addSuggestion, getListSuggestion } from "../../../actions/Suggestion/suggestion.actions";
import Layout from "../../../components/Layout";

InforPost.propTypes = {};

function InforPost(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { postId } = useParams();
  const userID = useSelector((state) => state.auth.user.id);
  const role = localStorage.getItem("role");

  const [a, setA] = useState(false);
  const [disablebtn, setDisablebtn] = useState(false);

  useEffect(() => {
    dispatch(getListPost());
  }, []);

  useEffect(() => {
    dispatch(getListSuggestion());
  }, []);

  const postView = useSelector((state) => {
    const foundPost = state.posts.listPost.find((x) => x.id === +postId);
    return foundPost;
  });

  let listSuggestion = useSelector((state) => state.suggestions.listSuggestion);
  useEffect(() => {
    if (listSuggestion.find((x) => x.idPost === +postId && x.idTutor === +userID)) setDisablebtn(true);
  }, [listSuggestion]);

  const v = useSelector((state) => state.posts.listPost);
  if (v.length == 0) return null;

  return (
    <>
      <Layout>
        <div className="post-infor">
          <div className="grid">
            <div className="grid__row app__content">
              <div className="grid__column-3 post-infor__left ">
                <div className="post-infor__heading">
                  THÔNG TIN LỚP HỌC CHI TIẾT
                </div>
                <ul className="post-infor__list">
                  <li className="post-infor__item">
                    <i className="fa fa-book post-infor__icon" />
                    Môn học :
                    {postView.subject.map((subject_item) => (
                      <span>{subject_item} ,</span>
                    ))}
                  </li>
                  <li className="post-infor__item">
                    <i className="fa fa-briefcase post-infor__icon" />
                    {postView.grade}
                  </li>
                  <li className="post-infor__item">
                    <i className="fas fa-map-marker-alt post-infor__icon" />
                    Địa chỉ: {postView.address}
                  </li>
                  <li className="post-infor__item">
                    <i className="fas fa-phone post-infor__icon" />
                    Số điện thoại: {postView.phonenumber}
                  </li>
                  <li className="post-infor__item">
                    <i className="fas fa-dollar-sign post-infor__icon" />
                    Học phí: {postView.price} VND/buổi
                  </li>
                  {role == "ROLE_TUTOR" ? (
                    <li className="post-infor__item">
                      {disablebtn === false ? (
                        <button
                          className="btn btn--primary"
                          onClick={async() => {
                            const suggestion = {
                              idPost: Number(postId),
                              idStudent: Number( postView.idStudent),
                            };
                            // alert(JSON.stringify(suggestion));
                            dispatch(addSuggestion(suggestion));
                          }}
                        >
                          Đề nghị dạy
                        </button>
                      ) : (
                        <button
                          className="btn btn--primary btn--disable "
                        >
                          Đã đề nghị
                        </button>
                      )}
                    </li>
                  ) : null}
                </ul>
              </div>
              <div className="grid__column-9">
                <div className="post-infor__right">
                  <div className="post-infor__right-top">
                    <div className="post-infor__title">{postView.title}</div>
                    <div className="post-infor__user-time">
                      <i className="fas fa-user  post-infor__icon" />
                      <span className="post-infor__name">
                        ID STUDENT:{postView.idStudent}
                      </span>
                      <i className="fas fa-clock  post-infor__icon" />
                      <span className="post-infor__time ">
                        Ngày tạo lớp: 21/05/2021 09:05
                      </span>
                      <span className="post-infor__id"> Mã số lớp: 5336</span>
                    </div>
                  </div>
                  <div className="post-infor__right-bottom">
                    <i className="fas fa-tasks post-infor__icon" />
                    Yêu cầu học :
                    <div className="post-infor__description">
                      {postView.description}
                    </div>
                    <i className="fas fa-calendar-alt post-infor__icon" />
                    Thời gian có thể học ( Màu XANH hiển thị những lịch có thể
                    học ):

                    <div className="calender">
                      <div className="calendar__row">
                        <h3 className="calendar__heading">Thứ 2</h3>
                        <ul className="calendar-list">
                          <li className="calendar-item">
                            <label
                              className={
                                postView.schedules.sang_2
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
                                postView.schedules.chieu_2
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
                                postView.schedules.toi_2
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
                                postView.schedules.sang_3
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
                                postView.schedules.chieu_3
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
                                postView.schedules.toi_3
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
                                postView.schedules.sang_4
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
                                postView.schedules.chieu_4
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
                                postView.schedules.toi_4
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
                                postView.schedules.sang_5
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
                                postView.schedules.chieu_5
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
                                postView.schedules.toi_5
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
                                postView.schedules.sang_6
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
                                postView.schedules.chieu_6
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
                                postView.schedules.toi_6
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
                                postView.schedules.sang_7
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
                                postView.schedules.chieu_7
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
                                postView.schedules.toi_7
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
                                postView.schedules.sang_8
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
                                postView.schedules.chieu_8
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
                                postView.schedules.toi_8
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default InforPost;
