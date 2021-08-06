import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { addComment } from "../../../actions/Comment/comment.actions";

AddComment.propTypes = {};

AddComment.defaultProps = {};

function AddComment(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  // const userID = useSelector((state) => state.user.user.id);
  const { IDTUTOR ,reloadclick} = props;

  const [content, setContent] = useState("");
  
  const addcomment = async (e) => {
    e.preventDefault();
    const values = {
      idTutor: Number(IDTUTOR),
      content: content,
    };
    console.log(values)
    await dispatch(addComment(values));
    setContent("")
    if(reloadclick) reloadclick();
    // window.location.reload();
    // history.push(`/tutorview/${IDTUTOR}`);
  };

  return (
    <>
      <form className="grid__row" onSubmit={addcomment}>
        <div className="grid__column-10">
          <textarea
            placeholder="Thêm bình luận ..."
            name="content"
            id
            cols={30}
            rows={6}
            className="form__input"
            value={content}
            onChange={(e)=>setContent(e.target.value)}
          >
            {content}
          </textarea>
        </div>
        <div className="grid__column-2 btn-comment">
          <button className="btn btn--primary" type="submit">
            Bình luận
          </button>
        </div>
      </form>
    </>
  );
}

export default AddComment;
