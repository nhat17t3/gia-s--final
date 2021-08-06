import PropTypes from "prop-types";
import React from "react";
import { useHistory } from "react-router-dom";

SuggestionItem.propTypes = {
  suggestion: PropTypes.object,
  onEditAcceptClick: PropTypes.func,
  onEditRefuseClick: PropTypes.func,
  onViewClick: PropTypes.func,
};

SuggestionItem.defaultProps = {
  suggestion: {},
  onEditAcceptClick: null,
  onEditRefuseClick: null,
  onViewClick: null,
};

function SuggestionItem(props) {
  const { suggestion, onViewClick, onEditRefuseClick, onEditAcceptClick } = props;
  const history = useHistory();

  const handleEditAcceptClick = () => {
    if (onEditAcceptClick) onEditAcceptClick(suggestion);
  };

  const handleEditRefuseClick = () => {
    if (onEditRefuseClick) onEditRefuseClick(suggestion);
  };

  const handleViewClick = () => {
    if (onViewClick) onViewClick(suggestion);
  };

  return (
    <>
      <div className="grid__row">
        <div className="grid__column-2 notify-item__one ">
          <div className="notify-item__time">20/5/2021</div>
        </div>
        <div className="grid__column-5 notify-item__content">
          <div className="notify-item__description">
            - Gia sư <span> {suggestion.nameTutor} </span> đã đề nghị dạy lớp
            (id-bài đăng: {suggestion.idPost}) :{" "}
            <span>{suggestion.titlePost}</span> của bạn
          </div>
        </div>
        <div className="grid__column-2 notify-item__one ">
          <div className="notify-item__time"> {suggestion.phoneNumberTutor}</div>
        </div>
        {suggestion.status == 0 ? (
          <div className="grid__column-3 notify-item__action">
            <a
              href
              className="btn  notify-item__accept-link"
              onClick={handleEditAcceptClick}
            >
              Chấp nhận
            </a>
            <a
              href
              className="btn  notify-item__refuse-link"
              onClick={handleEditRefuseClick}
            >
              Từ chối
            </a>
            <a
              href
              className="btn  notify-item__view-link"
              onClick={handleViewClick}
            >
              Xem gia sư
            </a>
          </div>
        ) : suggestion.status == 1 ? (
          <div className="grid__column-3 notify-item__action">
            <a href className="btn  notify-item__accept-link disabled">
              Đã chấp nhận
            </a>
            <a
              href
              className="btn  notify-item__view-link"
              onClick={handleViewClick}
            >
              Xem gia sư
            </a>
          </div>
        ) : (
          <div className="grid__column-3 notify-item__action">
            <a href className="btn  notify-item__refuse-link disabled">
              Đã từ chối
            </a>
          </div>
        )}
      </div>
    </>
  );
}

export default SuggestionItem;
