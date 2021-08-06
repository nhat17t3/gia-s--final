import axios from "../../helpers/axios";
import { commentConstants } from "../constants";
import { toast } from "react-toastify";


export const getListComment = () => {
  return async (dispatch) => {
    dispatch({ type: commentConstants.GET_ALL_COMMENT_REQUEST });
    const res = await axios.get(`/comment`);
    
    if (res.status === 200) {
      const { comments } = res.data;
      dispatch({
        type: commentConstants.GET_ALL_COMMENT_SUCCESS,
        payload: {
          listComment: comments,
        },
      });
      
    } else {
      dispatch({
        type: commentConstants.GET_ALL_COMMENT_FAILURE,
        payload: { error: res.data.error },
      });
      

    }
  };
};



export const addComment = (form) => {
  return async (dispatch) => {
    dispatch({
      type: commentConstants.ADD_COMMENT_REQUEST,
    });
    const res = await axios.post(`/api/comment`, form);

    if (res.status === 200) {
      const { message } = res.data;
      dispatch({
        type: commentConstants.ADD_COMMENT_SUCCESS,
        payload: { message },
      });
      toast.success("Thêm bình luận thành công");
      dispatch(getListComment());

    } else {
      if (res.status === 400) {
        dispatch({
          type: commentConstants.ADD_COMMENT_FAILURE,
          payload: { error: res.data.error },
        });
        toast.error("Thêm bình luận thất bại");
      }
    }
  };
};
// export const deleteComment = (form) => {
//   return async (dispatch) => {
//     dispatch({ type: commentConstants.DELETE_COMMENT_REQUEST });
//     const res = await axios.delete(`/api/comment/${form.id}`);
//     if (res.status === 200) {
//       const { message } = res.data;
//       dispatch({
//         type: commentConstants.DELETE_COMMENT_SUCCESS,
//         payload: { message: message, error: "" },
//       });
//       dispatch(getListComment());

//     } else {
//       const { error } = res.data;
//       dispatch({
//         type: commentConstants.DELETE_COMMENT_FAILURE,
//         payload: { message: "", error: error },
//       });
//     }
//   };
// };

// export const updateComment = (form) => {
//   return async (dispatch) => {
//     // const id = form.get("id");
//     dispatch({ type: commentConstants.UPDATE_COMMENT_REQUEST });
//     const res = await axios.put(`/api/comment/${form.id}`, form);

//     if (res.status === 200) {
//       const { message } = res.data;
//       dispatch({
//         type: commentConstants.UPDATE_COMMENT_SUCCESS,
//         payload: { message: message, error: "" },
//       });
//       dispatch(getListComment());
//     } else {
//       const { error } = res.data;
//       dispatch({
//         type: commentConstants.UPDATE_COMMENT_FAILURE,
//         payload: { message: "", error: error },
//       });
//     }
//   };
// };