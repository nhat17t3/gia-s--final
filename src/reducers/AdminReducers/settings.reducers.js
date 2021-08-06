import { authConstants } from "../../actions/constants";

const initState = {
  error: "",
  messageInfor: "",
  messagePass: "",
  loading: false,
};



export default (state = initState, action) => {
  console.log(action.type);
  switch (action.type) {
    case authConstants.CHANGE_INFORMATION_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case authConstants.CHANGE_INFORMATION_SUCCESS:
      state = {
        ...initState,
        loading: false,
        messageInfor: action.payload.message,
      };
      break;
    case authConstants.CHANGE_INFORMATION_FAILURE:
      state = {
        ...state,
        loading: false,
        messageInfor: "",
        error: action.payload.error,
      };
      break;
    case authConstants.CHANGE_PASSWORD_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case authConstants.CHANGE_PASSWORD_SUCCESS:
      state = {
        ...initState,
        loading: false,
        messagePass: action.payload.message,
        // error: "",
        // messageInfor: "",
      };
      break;
    case authConstants.CHANGE_PASSWORD_FAILURE:
      state = {
        ...state,
        loading: false,
        messagePass: action.payload.message,
        error: action.payload.error,
      };
      break;
      case authConstants.CHANGE_AVATAR_REQUEST:
        state = {
          ...state,
          loading: true,
        };
        break;
      case authConstants.CHANGE_AVATAR_SUCCESS:
        state = {
          ...initState,
          loading: false,
          messageInfor: action.payload.message,
          // error: "",
          // messageInfor: "",
        };
        break;
      case authConstants.CHANGE_AVATAR_FAILURE:
        state = {
          ...state,
          loading: false,
          messageInfor: "",
          error: action.payload.error,
        };
        break;
  }
  return state;
};