import axios from "../../helpers/axios";
import { authConstants } from "../constants";
import { toast } from "react-toastify";


export const changeInformation = (data) => {
  return async (dispatch) => {
    dispatch({ type: authConstants.CHANGE_INFORMATION_REQUEST });

    const role = localStorage.getItem("role");
    const res =
      role == "ROLE_TUTOR"
        ? await axios.put(`/api/tutor`, data)
        : await axios.put(`/api/student`, data);
    // const res = await axios.put(`admin/${data.id}/change-information`, {
    //   data,
    // });
    if (res.status === 200) {
      const { message } = res.data;
      dispatch({
        type: authConstants.CHANGE_INFORMATION_SUCCESS,
        payload: {
          message: message,
        },
      });
      toast.success("Cập nhật thông tin thành công");
      // dispatch({
      //   type: authConstants.UPDATE_INFORMATION_SUCCESS,
      //   payload: {
      //     user: user,
      //   },
      // });
      dispatch(getInformation());
      toast.success("Cập nhật thông tin thành công");
    } else {
      const { error } = res.data;
      dispatch({
        type: authConstants.CHANGE_INFORMATION_FAILURE,
        payload: {
          error: error,
        },
      });
      toast.error("Cập nhật thông tin thất bại");
    }
  };
};

export const getInformation = () => {
  return async (dispatch) => {
    dispatch({ type: authConstants.GET_INFORMATION_REQUEST });

    const role = localStorage.getItem("role");
    const res =
      role == "ROLE_STUDENT"
        ? await axios.get("/api/student/profile")
        : await axios.get("/api/tutor/profile");
    if (res.status === 200) {
      const user  = res.data;
      dispatch({
        type: authConstants.GET_INFORMATION_SUCCESS,
        payload: {
          user: user,
        },
      });
    } else {
      const { error } = res.data;
      dispatch({
        type: authConstants.GET_INFORMATION_FAILURE,
        payload: {
          error: error,
        },
      });
    }
  };
};


export const changePassword = (pass) => {
  return async (dispatch) => {
    dispatch({ type: authConstants.CHANGE_PASSWORD_REQUEST });
    
    const res = await axios.put(`/api/user/password`, pass);
    // const res = await axios.put(`admin/${data.id}/change-password`, { pass });
    if (res.status === 201) {
      const { message } = res.data;
      dispatch({
        type: authConstants.CHANGE_PASSWORD_SUCCESS,
        payload: {
          message: message,
        },
      });
      toast.success("Cập nhật mật khẩu thành công");
    } else {
      const { error,message } = res.data;
      dispatch({
        type: authConstants.CHANGE_PASSWORD_FAILURE,
        payload: {
          error: error,
          message: message,
        },
      });
      toast.error("Cập nhật mật khẩu thất bại");

    }
  };
};

export const changeAvatar = (avatar) => {
  return async (dispatch) => {
    dispatch({ type: authConstants.CHANGE_AVATAR_REQUEST });
    
    const res = await axios.post(`/api/uploadImage`, avatar);
    // const res = await axios.put(`admin/${data.id}/change-password`, { pass });
    if (res.status === 200) {
      const { message } = res.data;
      dispatch({
        type: authConstants.CHANGE_AVATAR_SUCCESS,
        payload: {
          message: message,
        },
      });
      toast.success("Cập nhật Avatar thành công");
      dispatch(getInformation());

    } else {
      const { error } = res.data;
      dispatch({
        type: authConstants.CHANGE_AVATAR_FAILURE,
        payload: {
          error: error,
        },
      });
      toast.error("Cập nhật Avatar thất bại");

    }
  };
};


