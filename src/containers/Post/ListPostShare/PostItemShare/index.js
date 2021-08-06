import React from "react";
import PropTypes from "prop-types";

PostItemShare.propTypes = {
  post: PropTypes.object,
  onViewClick: PropTypes.func,
};

PostItemShare.defaultProps = {
  post: {},
  onViewClick: null,
};

function PostItemShare(props) {
  const { post, onViewClick } = props;

  const handleViewClick = () => {
    if (onViewClick) onViewClick(post);
  };

  return (
    <>
      <div className="post-item">
        <div className="grid__row"    onClick={handleViewClick}>
          <div className="grid__column-2 post-item__one ">
            <div className="post-item__name">ID-STUDENT:{post.idStudent}</div>
            <div className="post-item__time">20/5/2021</div>
          </div>
          <div
            className="grid__column-6 post-item__content"
         
          >
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
            <a href className="btn btn--primary  post-item__suggesstion-link">
              Xem chi tiết
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default PostItemShare;
