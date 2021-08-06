import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { getListTutor } from "../../../actions";
import Layout from "../../../components/Layout";
import Pagination from "../../../components/Pagination";
import TutorItem from "./TutorItem";

ListTutor.propTypes = {};

function ListTutor(props) {
  const history = useHistory();
  const dispatch = useDispatch();

  const [subject, setSubject] = useState("All");
  const [grade, setGrade] = useState("All");
  const [address, setAddress] = useState("All");
  const [listtutor, setListtutor] = useState([]);
  const [searchField, setSearchField] = useState("");

  // const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);

  useEffect(() => {
    dispatch(getListTutor());
  }, []);

  let tutors = useSelector((state) => state.tutors.listTutor);

  useEffect(() => {
    setListtutor(tutors);
  }, [tutors]);

  // Get current tutors
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentTutors = listtutor.slice(indexOfFirstPost, indexOfLastPost);
  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const checkfilter = (subject, grade, address, tutor) => {
    let checka = false;
    let checkb = false;
    let checkc = false;
    if (subject == "All") checka = true;
    else checka = tutor.subject.includes(subject);
    if (grade == "All") checkb = true;
    else checkb = tutor.grade.includes(grade);
    if (address == "All") checkc = true;
    else checkc = tutor.address.toLowerCase().includes(address.toLowerCase());
    return checka && checkb && checkc;
  };

  const handlefillter = (e) => {
    console.log(subject, grade, address);

    const listfillter = tutors.filter((tutor) =>
      checkfilter(subject, grade, address, tutor)
    );
    console.log(listfillter);
    setListtutor(listfillter);
  };

 
  const handleSearch = (e) => {
    e.preventDefault();
    const listHandleSearch = tutors.filter((tutor) => {
      return (
        tutor.name.toLowerCase().includes(searchField.toLowerCase()) ||
        tutor.address.toLowerCase().includes(searchField.toLowerCase())
      );
    });
    setListtutor(listHandleSearch);
  };

  const handleViewClick = (tutor) => {
    // console.log("xem: ", tutor);
    const ViewUrl = `/tutorview/${tutor.id}`;
    history.push(ViewUrl);
  };

  const optionAddress = (
    <>
      <option value={"Liên Chiểu"}>Liên Chiểu</option>
      <option value={"Ngũ Hành Sơn"}>Ngũ Hành Sơn</option>
      <option value={"Sơn Trà"}>Sơn Trà</option>
      <option value={"Thanh Khê"}>Thanh Khê</option>
      <option value={"Hoà Vang"}>Hoà Vang</option>
      <option value={"Hải Châu"}>Hải Châu</option>
    </>
  );

  const optionSubject = (
    <>
      <option value={"Toán"}>Toán</option>
      <option value={"Lý"}>Lý</option>
      <option value={"Hóa"}>Hóa</option>
      <option value={"Tiếng Anh"}>Tiếng Anh</option>
      <option value={"Ngữ Văn"}>Văn</option>
      <option value={"Tiếng Việt"}>Tiếng Việt</option>
      <option value={"Lịch sử"}>Lịch sử</option>
      <option value={"Địa lý"}>Địa lý</option>
      <option value={"Sinh"}>Sinh</option>
    </>
  );

  const optionGrade = (
    <>
      <option value={"Lớp 1"}>lớp 1</option>
      <option value={"Lớp 2"}>lớp 2</option>
      <option value={"Lớp 3"}>lớp 3</option>
      <option value={"Lớp 4"}>lớp 4</option>
      <option value={"Lớp 5"}>lớp 5</option>
      <option value={"Lớp 6"}>lớp 6</option>
      <option value={"Lớp 7"}>lớp 7</option>
      <option value={"Lớp 8"}>lớp 8</option>
      <option value={"Lớp 9"}>lớp 9</option>
      <option value={"Lớp 10"}>lớp 10</option>
      <option value={"Lớp 11"}>lớp 11</option>
      <option value={"Lớp 12"}>lớp 12</option>
    </>
  );
  return (
    <>
      <Layout>
        <ToastContainer />
        <div className="app__container">
          <div className="grid">
            <div className="grid__row app__content">
              <div className="grid__column-12">
                <div className="home-filter">
                  <span className="home-filter__lable">Lọc theo:</span>
                  <select
                    name="address"
                    id
                    className="select-filter"
                    onChange={(e) => setAddress(e.target.value)}
                  >
                    <option value="All" selected="selected" defaultValue="All">
                      - Chọn địa điểm -
                    </option>
                    {optionAddress}
                  </select>
                  <select
                    name="subject"
                    id
                    className="select-filter"
                    onChange={(e) => setSubject(e.target.value)}
                  >
                    <option value="All" selected="selected">
                      - Chọn môn học -
                    </option>
                    {optionSubject}
                  </select>
                  <select
                    name="grade"
                    id
                    className="select-filter"
                    onChange={(e) => setGrade(e.target.value)}
                  >
                    <option value="All" selected="selected">
                      -Chọn Lớp-
                    </option>
                    {optionGrade}
                  </select>
                  <button
                    className="home-filter__btn btn btn--primary"
                    onClick={handlefillter}
                  >
                    Áp dụng
                  </button>
                  <div className="home-filter__page">
                    {/* <div className="home-filter__page-num">
                      <span className="home-filter__page-current">1</span>/ 14
                    </div>
                    <div className="home-filter__page-control">
                      <a href=" " className="home-filter__page-btn">
                        <i className="fas fa-angle-left" />
                      </a>
                      <div className="home-filter__page-control-seperate" />
                      <a href className="home-filter__page-btn">
                        <i className="fas fa-angle-right" />
                      </a>
                    </div> */}
                    <form className="header__search1" onSubmit={handleSearch}>
                      <input
                        type="text"
                        className="header__search-input"
                        placeholder="Tìm kiếm gia sư"
                        value={searchField}
                        onChange={(e) => setSearchField(e.target.value)}
                      />
                      <button type="submit" className="header__search-btn">
                        <i className="header__search-btn-icon fas fa-search" />
                      </button>
                    </form>
                  </div>
                </div>

                <div className="tutor">
                  <div className="grid__row">
                    {currentTutors.map((tutor) => (
                      <div className="grid__column-3" key={tutor.id}>
                        <TutorItem
                          tutor={tutor}
                          onViewClick={handleViewClick}
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <Pagination
                  postsPerPage={postsPerPage}
                  totalPosts={listtutor.length}
                  paginate={paginate}
                  currentPage={currentPage}
                />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default ListTutor;
