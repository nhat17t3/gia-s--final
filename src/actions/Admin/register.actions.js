
import axios from "../../helpers/axios";
import { authConstants } from "../constants";
import { toast } from "react-toastify";

export const signup = (user) => {
  return async (dispatch) => {
    dispatch({
      type: authConstants.REGISTER_REQUEST,
    });
    const res = await axios.post(`/api/auth/signup`, {
      ...user,
    });

    if (res.status === 200) {
      // dispatch(getListAdmin());
      const { message } = res.data;
      dispatch({
        type: authConstants.REGISTER_SUCCESS,
        payload: { message },
      });
      toast.success("Đăng kí thành công");
      
    } else {
      if (res.status === 400) {
        dispatch({
          type: authConstants.REGISTER_FAILURE,
          payload: { error: res.data.error },
        });
        toast.error("Đăng kí thất bại");
      }
    }
  };
};