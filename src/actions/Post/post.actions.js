import axios from "../../helpers/axios";
import { postConstants } from "../constants";
import { toast } from "react-toastify";


export const getListPost = () => {
  return async (dispatch) => {
    dispatch({ type: postConstants.GET_ALL_POST_REQUEST });
    const res = await axios.get(`/post`);
    
    if (res.status === 200) {
      const { post } = res.data;
      dispatch({
        type: postConstants.GET_ALL_POST_SUCCESS,
        payload: {
          listPost: post,
        },
      });
    } else {
      dispatch({
        type: postConstants.GET_ALL_POST_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};

export const getListPostRecommend = () => {
  return async (dispatch) => {
    dispatch({ type: postConstants.GET_ALL_POST_RECOMMEND_REQUEST });
    const res = await axios.get(`/post/recommendation`);
    
    if (res.status === 200) {
      const { post } = res.data;
      dispatch({
        type: postConstants.GET_ALL_POST_RECOMMEND_SUCCESS,
        payload: {
          listPost: post,
        },
      });
    } else {
      dispatch({
        type: postConstants.GET_ALL_POST_RECOMMEND_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};

export const getListPostByToken = () => {
    return async (dispatch) => {
      dispatch({ type: postConstants.GET_ALL_POST_REQUEST_BY_TOKEN });
      const res = await axios.get(`/api/post`);
      
      if (res.status === 200) {
        const { post } = res.data;
        dispatch({
          type: postConstants.GET_ALL_POST_SUCCESS_BY_TOKEN,
          payload: {
            listPostByToken: post,
          },
        });
      } else {
        dispatch({
          type: postConstants.GET_ALL_POST_FAILURE_BY_TOKEN,
          payload: { error: res.data.error },
        });
      }
    };
  };

export const addPost = (form) => {
  return async (dispatch) => {
    dispatch({
      type: postConstants.ADD_POST_REQUEST,
    });
    const res = await axios.post(`/api/post`, form);

    if (res.status === 200) {
      const { message } = res.data;
      dispatch({
        type: postConstants.ADD_POST_SUCCESS,
        payload: { message },
      });
      toast.success("Thêm bài đăng thành công");
      dispatch(getListPostByToken());

    } else {
      if (res.status === 400) {
        dispatch({
          type: postConstants.ADD_POST_FAILURE,
          payload: { error: res.data.error },
        });
      toast.error("Thêm bài đăng thất bại");

      }
    }
  };
};
export const deletePost = (form) => {
  return async (dispatch) => {
    dispatch({ type: postConstants.DELETE_POST_REQUEST });
    const res = await axios.delete(`/api/post/${form.id}`);
    if (res.status === 200) {
      const { message } = res.data;
      dispatch({
        type: postConstants.DELETE_POST_SUCCESS,
        payload: { message: message, error: "" },
      });
      toast.success("Xóa bài đăng thành công");

      dispatch(getListPostByToken());

    } else {
      const { error } = res.data;
      dispatch({
        type: postConstants.DELETE_POST_FAILURE,
        payload: { message: "", error: error },
      });
      toast.error("Xóa bài đăng thất bại");

    }
  };
};

export const updatePost = (form) => {
  return async (dispatch) => {
    // const id = form.get("id");
    dispatch({ type: postConstants.UPDATE_POST_REQUEST });
    const res = await axios.put(`/api/post/${form.id}`, form);

    if (res.status === 200) {
      const { message } = res.data;
      dispatch({
        type: postConstants.UPDATE_POST_SUCCESS,
        payload: { message: message, error: "" },
      });
      toast.success("Cập nhật bài đăng thành công");

      dispatch(getListPostByToken());
    } else {
      const { error } = res.data;
      dispatch({
        type: postConstants.UPDATE_POST_FAILURE,
        payload: { message: "", error: error },
      });
      toast.error("Cập nhật bài đăng thất bại");

    }
  };
};