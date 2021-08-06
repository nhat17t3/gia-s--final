import React from "react";
import PropTypes from "prop-types";

PostItem.propTypes = {
  post: PropTypes.object,
  onEditClick: PropTypes.func,
  onRemoveClick: PropTypes.func,
  onViewClick: PropTypes.func,
};

PostItem.defaultProps = {
  post: {},
  onEditClick: null,
  onRemoveClick: null,
  onViewClick: null,
};

function PostItem(props) {
  const { post, onEditClick, onRemoveClick, onViewClick } = props;

  const handleEditClick = () => {
    if (onEditClick) onEditClick(post);
  };

  const handleRemoveClick = () => {
    if (onRemoveClick) onRemoveClick(post);
  };

  const handleViewClick = () => {
    if (onViewClick) onViewClick(post);
  };

  return (
    <>
      <div className="post-item">
        <div className="grid__row">
          <div className="grid__column-2 post-item__one ">
            <div className="post-item__name">ID-STUDENT:{post.idStudent}</div>
            <div className="post-item__time">20/5/2021</div>
          </div>
          <div className="grid__column-6 post-item__content" onClick={handleViewClick}>
            <div className="post-item__title">{post.title}</div>
            <div className="post-item__description">{post.description}</div>
            <div className="post-item__content-group">
              {post.subject.map((subject_item) => (
                <span className="post-item__subject">{subject_item}</span>
              ))}
              <span className="post-item__grade">{post.grade}</span>
              <span className="post-item__address">{post.address}</span>
            </div>
          </div>
          <div className="grid__column-2 post-item__price ">
            {post.price}
            <div className>VND/buổi</div>
          </div>
          <div className="grid__column-2 post-item__action">
          <a href className="btn  notify-item__accept-link"  onClick={handleEditClick}>Chỉnh sữa</a>
          <a href className="btn  notify-item__refuse-link"  onClick={handleRemoveClick}>Xóa</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default PostItem;
