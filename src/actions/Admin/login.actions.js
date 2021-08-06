import axios from "../../helpers/axios";
import { authConstants } from "../constants";
import { getInformation } from "./settings.actions";
import { toast } from "react-toastify";

export const login = (user) => {
  return async (dispatch) => {
    dispatch({
      type: authConstants.LOGIN_REQUEST,
    });
    const res = await axios.post(`/api/auth/signin`, {
      ...user,
    });
    
    try {
      if (res.status === 200) {
        const { accessToken, roles } = res.data;
        localStorage.setItem("token", accessToken);
        localStorage.setItem("role", roles);
        // localStorage.setItem("user", JSON.stringify(user));

        dispatch({
          type: authConstants.LOGIN_SUCCESS,
          payload: {
            token:accessToken,
            // user:user,
          },
        });
        toast.success("Đăng nhập thành công");
        dispatch(getInformation());

      } else {
        if (res.status === 401) {
          dispatch({
            type: authConstants.LOGIN_FAILURE,
            payload: {
              error: res.data.error,
            },
          });
          toast.error("Đăng Nhập thất bại");
        }
      }
    } catch (error) {
      dispatch({
        type: authConstants.LOGIN_FAILURE,
        payload: {
          error: "Error Server",
        },
      });
      toast.error("Máy chủ bận");
    }

  };
};

export const isAdminLoggedIn = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    if (token) {
      // const user = JSON.parse(localStorage.getItem("user"));
      dispatch({
        type: authConstants.LOGIN_SUCCESS,
        payload: {
          token,
          // user,
        },
      });
      dispatch(getInformation());
    } else {
        dispatch({
            type: authConstants.LOGIN_FAILURE,
            payload: {
                error:' Please login first'
            }
        })
    }
  };
};