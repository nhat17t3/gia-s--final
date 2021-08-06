import axios from "../../helpers/axios";
import { suggestionConstants } from "../constants";
import { toast } from "react-toastify";


export const getListSuggestion = () => {
  return async (dispatch) => {
    dispatch({ type: suggestionConstants.GET_ALL_SUGGESTION_REQUEST });
    const res = await axios.get(`/suggestion`);
    
    if (res.status === 200) {
      const { suggestions } = res.data;
      dispatch({
        type: suggestionConstants.GET_ALL_SUGGESTION_SUCCESS,
        payload: {
          listSuggestion: suggestions,
        },
      });
    } else {
      dispatch({
        type: suggestionConstants.GET_ALL_SUGGESTION_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};

export const getListSuggestionBySudent = () => {
    return async (dispatch) => {
      dispatch({ type: suggestionConstants.GET_ALL_SUGGESTION_REQUEST_BY_STUDENT });
      const res = await axios.get(`/api/suggestion`);
      
      if (res.status === 200) {
        const { suggestions } = res.data;
        dispatch({
          type: suggestionConstants.GET_ALL_SUGGESTION_SUCCESS_BY_STUDENT,
          payload: {
            listSuggestionByStudent: suggestions,
          },
        });
      } else {
        dispatch({
          type: suggestionConstants.GET_ALL_SUGGESTION_FAILURE_BY_STUDENT,
          payload: { error: res.data.error },
        });
      }
    };
  };

export const addSuggestion = (suggestion) => {
  return async (dispatch) => {
    dispatch({
      type: suggestionConstants.ADD_SUGGESTION_REQUEST,
    });
    const res = await axios.post(`/api/suggestion?idStudent=${suggestion.idStudent}&idPost=${suggestion.idPost}`);

    if (res.status === 200) {
      const { message } = res.data;
      dispatch({
        type: suggestionConstants.ADD_SUGGESTION_SUCCESS,
        payload: { message },
      });
      toast.success("Lời đề nghị dạy đã được gửi tới lớp của học sinh");

      dispatch(getListSuggestion());

    } else {
      if (res.status === 400) {
        dispatch({
          type: suggestionConstants.ADD_SUGGESTION_FAILURE,
          payload: { error: res.data.error },
        });
      toast.error("Lời đề nghị dạy đã xảy ra lỗi");

      }
    }
  };
};


export const acceptSuggestion = (form) => {
  return async (dispatch) => {
    // const id = form.get("id");
    dispatch({ type: suggestionConstants.ACCEPT_SUGGESTION_REQUEST });
    const res = await axios.put(`/api/suggestion/acceptance?idPost=${form.idPost}&idTutor=${form.idTutor}`);

    if (res.status === 200) {
      const { message } = res.data;
      dispatch({
        type: suggestionConstants.ACCEPT_SUGGESTION_SUCCESS,
        payload: { message: message, error: "" },
      });
      dispatch(getListSuggestion());
    } else {
      const { error } = res.data;
      dispatch({
        type: suggestionConstants.ACCEPT_SUGGESTION_FAILURE,
        payload: { message: "", error: error },
      });
    }
  };
};

export const refuseSuggestion = (form) => {
    return async (dispatch) => {
      // const id = form.get("id");
      dispatch({ type: suggestionConstants.REFUSE_SUGGESTION_REQUEST });
      const res = await axios.put(`/api/suggestion/denial?idPost=${form.idPost}&idTutor=${form.idTutor}`);
  
      if (res.status === 200) {
        const { message } = res.data;
        dispatch({
          type: suggestionConstants.REFUSE_SUGGESTION_SUCCESS,
          payload: { message: message, error: "" },
        });
        dispatch(getListSuggestion());
      } else {
        const { error } = res.data;
        dispatch({
          type: suggestionConstants.REFUSE_SUGGESTION_FAILURE,
          payload: { message: "", error: error },
        });
      }
    };
  };