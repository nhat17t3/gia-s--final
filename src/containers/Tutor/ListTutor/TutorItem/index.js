import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

TutorItem.propTypes = {
  tutor: PropTypes.object,
  onViewClick: PropTypes.func,
};

TutorItem.defaultProps = {
  tutor: {},
  onViewClick: null,
};

function TutorItem(props) {
  const { tutor, onViewClick } = props;

  const handleVewClick = () => {
    if (onViewClick) onViewClick(tutor);
  };

  const img_avatar = "./assets/img/avatar.jpg";

  return (
    <>
      {/* Item tutor */}

      <div className="tutor-item" >
        {tutor.avatar !== null ? (
          <div
            className="tutor-item__img" onClick={handleVewClick}
            style={{
              backgroundImage: `url(${tutor.avatar} )`,
            }}
          />
        ) : (
          <div
            className="tutor-item__img" onClick={handleVewClick}
            style={{
              backgroundImage: `url( ${img_avatar})`,
            }}
          />
        )}
        <h3 className="tutor-item__name" onClick={handleVewClick}>{tutor.name}</h3>
        <div className="tutor-item__group-infor">
          {tutor.grade.map((grade_item) => (
            <span className="tutor-item__grade">{grade_item}</span>
          ))}

          {tutor.subject.map((subject_item) => (
            <span className="tutor-item__subject">{subject_item}</span>
          ))}
        </div>
        <div className="tutor-item__group-infor">
          <span className="tutor-item__address">{tutor.address}</span>
        </div>
        {/* <div className="tutor-item__price">
          {tutor.price}
          <span className="tutor-item__price-unit">VNĐ/buổi</span>
        </div> */}
        <div className="tutor-item__description">{tutor.description}</div>
        {/* <button className="btn btn--primary btn--small tutor-item__invite">Mời dạy</button> */}
      </div>

      {/* end item */}
    </>
  );
}

export default TutorItem;
