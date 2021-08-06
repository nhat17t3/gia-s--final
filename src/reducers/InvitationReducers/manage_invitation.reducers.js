import { invitationConstants } from "../../actions/constants";

const initState = {
  listInvitation: [],
  listInvitationByTutor: [],
  loading: false,
  error: "",
  messages: "",
};

export default (state = initState, action) => {
  switch (action.type) {
    case invitationConstants.GET_ALL_INVITATION_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case invitationConstants.GET_ALL_INVITATION_SUCCESS:
      state = {
        ...state,
        loading: false,
        listInvitation: action.payload.listInvitation,
      };
      break;
    case invitationConstants.GET_ALL_INVITATION_FAILURE:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      break;
      case invitationConstants.GET_ALL_INVITATION_REQUEST_BY_TUTOR:
        state = {
          ...state,
          loading: true,
        };
        break;
      case invitationConstants.GET_ALL_INVITATION_SUCCESS_BY_TUTOR:
        state = {
          ...state,
          loading: false,
          listInvitationByTutor: action.payload.listInvitationByTutor,
        };
        break;
      case invitationConstants.GET_ALL_INVITATION_FAILURE_BY_TUTOR:
        state = {
          ...state,
          loading: false,
          error: action.payload.error,
        };
        break;
    case invitationConstants.ADD_INVITATION_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case invitationConstants.ADD_INVITATION_SUCCESS:
      state = {
        ...state,
        messages: action.payload.message,
        loading: false,
      };
      break;
    case invitationConstants.ADD_INVITATION_FAILURE:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      break;
    case invitationConstants.ACCEPT_INVITATION_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case invitationConstants.ACCEPT_INVITATION_SUCCESS:
      state = {
        ...state,
        loading: false,
        messages: "accept invitation successfully",
      };
      break;
    case invitationConstants.ACCEPT_INVITATION_FAILURE:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      break;
    case invitationConstants.REFUSE_INVITATION_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case invitationConstants.REFUSE_INVITATION_SUCCESS:
      state = {
        ...state,
        loading: false,
        messages: "refuse invitation successfully",
      };
      break;
    case invitationConstants.REFUSE_INVITATION_FAILURE:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      break;
  }
  return state;
};