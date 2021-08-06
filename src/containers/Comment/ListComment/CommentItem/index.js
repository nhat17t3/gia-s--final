import React from "react";
import { useHistory } from "react-router-dom";

function CommentItem(props) {
  const { comment } = props;
  const history = useHistory();
  const link_img = "/assets/img/avatar.jpg"

  return (
    <>
      <div href className="comment-group">
        <img
          src={link_img}
          alt=""
          className="comment-img"
        />
        <div className="comment-info">
          <span className="comment-name">
          {comment.nameStudent}
          </span>
          <span className="comment-description">{comment.content}</span>
        </div>
      </div>
    </>
  );
}

export default CommentItem;
