import { postConstants } from "../../actions/constants";

const initState = {
  listPost: [],
  listPostByToken: [],
  loading: false,
  error: "",
  messages: "",
};

export default (state = initState, action) => {
  switch (action.type) {
    case postConstants.GET_ALL_POST_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case postConstants.GET_ALL_POST_SUCCESS:
      state = {
        ...state,
        loading: false,
        listPost: action.payload.listPost,
      };
      break;
    case postConstants.GET_ALL_POST_FAILURE:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      break;
    
      case postConstants.GET_ALL_POST_RECOMMEND_REQUEST:
        state = {
          ...state,
          loading: true,
        };
        break;
      case postConstants.GET_ALL_POST_RECOMMEND_SUCCESS:
        state = {
          ...state,
          loading: false,
          listPost: action.payload.listPost,
        };
        break;
      case postConstants.GET_ALL_POST_RECOMMEND_FAILURE:
        state = {
          ...state,
          loading: false,
          error: action.payload.error,
        };
        break;


      case postConstants.GET_ALL_POST_REQUEST_BY_TOKEN:
        state = {
          ...state,
          loading: true,
        };
        break;
      case postConstants.GET_ALL_POST_SUCCESS_BY_TOKEN:
        state = {
          ...state,
          loading: false,
          listPostByToken: action.payload.listPostByToken,
        };
        break;
      case postConstants.GET_ALL_POST_FAILURE_BY_TOKEN:
        state = {
          ...state,
          loading: false,
          error: action.payload.error,
        };
        break;
    case postConstants.ADD_POST_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case postConstants.ADD_POST_SUCCESS:
      state = {
        ...state,
        messages: action.payload.message,
        loading: false,
      };
      break;
    case postConstants.ADD_POST_FAILURE:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      break;
    case postConstants.UPDATE_POST_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case postConstants.UPDATE_POST_SUCCESS:
      state = {
        ...state,
        loading: false,
        messages: "Update post successfully",
      };
      break;
    case postConstants.UPDATE_POST_FAILURE:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      break;
    case postConstants.DELETE_POST_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case postConstants.DELETE_POST_SUCCESS:
      state = {
        ...state,
        loading: false,
        messages: "delete post successfully",
      };
      break;
    case postConstants.DELETE_POST_FAILURE:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      break;
  }
  return state;
};