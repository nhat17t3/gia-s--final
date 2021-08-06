import axios from "../../helpers/axios";
import { invitationConstants } from "../constants";
import { toast } from "react-toastify";


export const getListInvitation = () => {
  return async (dispatch) => {
    dispatch({ type: invitationConstants.GET_ALL_INVITATION_REQUEST });
    const res = await axios.get(`/invitation`);
    
    if (res.status === 200) {
      const { invitations } = res.data;
      dispatch({
        type: invitationConstants.GET_ALL_INVITATION_SUCCESS,
        payload: {
          listInvitation: invitations,
        },
      });
      
    } else {
      dispatch({
        type: invitationConstants.GET_ALL_INVITATION_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};

export const getListInvitationByTutor = () => {
    return async (dispatch) => {
      dispatch({ type: invitationConstants.GET_ALL_INVITATION_REQUEST_BY_TUTOR });
      const res = await axios.get(`/api/invitation`);
      
      if (res.status === 200) {
        const { invitations } = res.data;
        dispatch({
          type: invitationConstants.GET_ALL_INVITATION_SUCCESS_BY_TUTOR,
          payload: {
            listInvitationByTutor: invitations,
          },
        });
      } else {
        dispatch({
          type: invitationConstants.GET_ALL_INVITATION_FAILURE_BY_TUTOR,
          payload: { error: res.data.error },
        });
      }
    };
  };

export const addInvitation = (invitation) => {
  return async (dispatch) => {
    dispatch({
      type: invitationConstants.ADD_INVITATION_REQUEST,
    });
    const res = await axios.post(`/api/invitation?idTutor=${invitation.idTutor}`);

    if (res.status === 200) {
      const { message } = res.data;
      dispatch({
        type: invitationConstants.ADD_INVITATION_SUCCESS,
        payload: { message },
      });
      toast.success("Lời mời dạy đã được gửi tới gia sư");

      dispatch(getListInvitation());

    } else {
      if (res.status === 400) {
        dispatch({
          type: invitationConstants.ADD_INVITATION_FAILURE,
          payload: { error: res.data.error },
        });
        toast.error("Lời mời dạy đã xảy ra lỗi");
      }
    }
  };
};


export const acceptInvitation = (form) => {
  return async (dispatch) => {
    // const id = form.get("id");
    dispatch({ type: invitationConstants.ACCEPT_INVITATION_REQUEST });
    const res = await axios.put(`/api/invitation/acceptance?idStudent=${form.idStudent}`);

    if (res.status === 200) {
      const { message } = res.data;
      dispatch({
        type: invitationConstants.ACCEPT_INVITATION_SUCCESS,
        payload: { message: message, error: "" },
      });
      dispatch(getListInvitation());
    } else {
      const { error } = res.data;
      dispatch({
        type: invitationConstants.ACCEPT_INVITATION_FAILURE,
        payload: { message: "", error: error },
      });
    }
  };
};

export const refuseInvitation = (form) => {
    return async (dispatch) => {
      // const id = form.get("id");
      dispatch({ type: invitationConstants.REFUSE_INVITATION_REQUEST });
      const res = await axios.put(`/api/invitation/denial?idStudent=${form.idStudent}`);
  
      if (res.status === 200) {
        const { message } = res.data;
        dispatch({
          type: invitationConstants.REFUSE_INVITATION_SUCCESS,
          payload: { message: message, error: "" },
        });
        dispatch(getListInvitation());
      } else {
        const { error } = res.data;
        dispatch({
          type: invitationConstants.REFUSE_INVITATION_FAILURE,
          payload: { message: "", error: error },
        });
      }
    };
  };