import { commentConstants } from "../../actions/constants";

const initState = {
  listComment: [],
  loading: false,
  error: "",
  messages: "",
};

export default (state = initState, action) => {
  switch (action.type) {
    case commentConstants.GET_ALL_COMMENT_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case commentConstants.GET_ALL_COMMENT_SUCCESS:
      state = {
        ...state,
        loading: false,
        listComment: action.payload.listComment,
      };
      break;
    case commentConstants.GET_ALL_COMMENT_FAILURE:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      break;
    case commentConstants.ADD_COMMENT_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case commentConstants.ADD_COMMENT_SUCCESS:
      state = {
        ...state,
        messages: action.payload.message,
        loading: false,
      };
      break;
    case commentConstants.ADD_COMMENT_FAILURE:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      break;
    case commentConstants.UPDATE_COMMENT_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case commentConstants.UPDATE_COMMENT_SUCCESS:
      state = {
        ...state,
        loading: false,
        messages: "Update comment successfully",
      };
      break;
    case commentConstants.UPDATE_COMMENT_FAILURE:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      break;
    case commentConstants.DELETE_COMMENT_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case commentConstants.DELETE_COMMENT_SUCCESS:
      state = {
        ...state,
        loading: false,
        messages: "delete comment successfully",
      };
      break;
    case commentConstants.DELETE_COMMENT_FAILURE:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      break;
  }
  return state;
};