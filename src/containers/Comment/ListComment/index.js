import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import CommentItem from "./CommentItem";




ListComment.propTypes = {};

function ListComment(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { IDTUTOR } = props;

  const { listcomment } = props;

  return (
    <>
      <ul className="comment-list">
        {listcomment.map((comment) => (
          <li className="comment-item " key={comment.id}>
            <CommentItem comment={comment} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListComment;
