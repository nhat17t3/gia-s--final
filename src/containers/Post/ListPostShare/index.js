import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { getListPost, getListPostRecommend } from "../../../actions";
import Layout from "../../../components/Layout";
import Pagination from "../../../components/Pagination";
import PostItemShare from "./PostItemShare";

ListPostShare.propTypes = {};

function ListPostShare(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const role = localStorage.getItem("role");

  const [subject, setSubject] = useState("All");
  const [grade, setGrade] = useState("All");
  const [address, setAddress] = useState("All");
  const [listpost, setListpost] = useState([]);
  const [searchField, setSearchField] = useState("");

  // const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  useEffect(() => {
    role === "ROLE_TUTOR" ?
    dispatch(getListPostRecommend()):dispatch(getListPost());
  }, []);



  let posts = useSelector((state) => state.posts.listPost);

  useEffect(() => {
    setListpost(posts);
  }, [posts]);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = listpost.slice(indexOfFirstPost, indexOfLastPost);
  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  // filter
  const checkfilter = (subject, grade, address, post) => {
    let checka = false;
    let checkb = false;
    let checkc = false;
    if (subject == "All") checka = true;
    else checka = post.subject.includes(subject);
    if (grade == "All") checkb = true;
    else checkb = post.grade === grade;
    if (address == "All") checkc = true;
    else checkc = post.address.toLowerCase().includes(address.toLowerCase());
    return checka && checkb && checkc;
  };
  const handlefillter = (e) => {
    console.log(subject, grade, address);
    const listfillter = posts.filter((post) =>
      checkfilter(subject, grade, address, post)
    );
    console.log(listfillter);
    setListpost(listfillter);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const listHandleSearch = posts.filter((post) => {
      return (
        post.title.toLowerCase().includes(searchField.toLowerCase())
      );
    });
    setListpost(listHandleSearch);
  };

  const handlePostViewClick = (post) => {
    console.log("View: ", post);
    const viewPostUrl = `/postview/${post.id}`;
    history.push(viewPostUrl);
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
      <option value={"Ngữ Văn"}>Ngữ Văn</option>
      <option value={"Tiếng Việt"}>Tiếng Việt</option>
      <option value={"Lịch Sử"}>Lịch Sử</option>
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
      <ToastContainer />
      <Layout>
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
                        placeholder="Tìm kiếm bài đăng"
                        value={searchField}
                        onChange={(e) => setSearchField(e.target.value)}
                      />
                      <button type="submit" className="header__search-btn">
                        <i className="header__search-btn-icon fas fa-search" />
                      </button>
                    </form>
                  </div>
                </div>
                <div className="post">
                  <div className="grid__row">
                    <div className="grid__column-2 post-header__item ">
                      Người Đăng
                    </div>
                    <div className="grid__column-6 post-header__item">
                      Nội dung lớp tìm gia sư
                    </div>
                    <div className="grid__column-2 post-header__item">
                      Học phí đề nghị
                    </div>
                    <div className="grid__column-2 post-header__item">
                      Nhận lớp ngay
                    </div>
                  </div>
                  {currentPosts.map((post) => (
                    <div key={post.id}>
                      <PostItemShare
                        post={post}
                        onViewClick={handlePostViewClick}
                      />
                    </div>
                  ))}
                </div>
                <Pagination
                  postsPerPage={postsPerPage}
                  totalPosts={listpost.length}
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

export default ListPostShare;
