import { suggestionConstants } from "../../actions/constants";

const initState = {
  listSuggestion: [],
  listSuggestionByStudent: [],
  loading: false,
  error: "",
  messages: "",
};

export default (state = initState, action) => {
  switch (action.type) {
    case suggestionConstants.GET_ALL_SUGGESTION_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case suggestionConstants.GET_ALL_SUGGESTION_SUCCESS:
      state = {
        ...state,
        loading: false,
        listSuggestion: action.payload.listSuggestion,
      };
      break;
    case suggestionConstants.GET_ALL_SUGGESTION_FAILURE:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      break;
      case suggestionConstants.GET_ALL_SUGGESTION_REQUEST_BY_STUDENT:
        state = {
          ...state,
          loading: true,
        };
        break;
      case suggestionConstants.GET_ALL_SUGGESTION_SUCCESS_BY_STUDENT:
        state = {
          ...state,
          loading: false,
          listSuggestionByStudent: action.payload.listSuggestionByStudent,
        };
        break;
      case suggestionConstants.GET_ALL_SUGGESTION_FAILURE_BY_STUDENT:
        state = {
          ...state,
          loading: false,
          error: action.payload.error,
        };
        break;
    case suggestionConstants.ADD_SUGGESTION_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case suggestionConstants.ADD_SUGGESTION_SUCCESS:
      state = {
        ...state,
        messages: action.payload.message,
        loading: false,
      };
      break;
    case suggestionConstants.ADD_SUGGESTION_FAILURE:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      break;
    case suggestionConstants.ACCEPT_SUGGESTION_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case suggestionConstants.ACCEPT_SUGGESTION_SUCCESS:
      state = {
        ...state,
        loading: false,
        messages: "accept suggestion successfully",
      };
      break;
    case suggestionConstants.ACCEPT_SUGGESTION_FAILURE:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      break;
    case suggestionConstants.REFUSE_SUGGESTION_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case suggestionConstants.REFUSE_SUGGESTION_SUCCESS:
      state = {
        ...state,
        loading: false,
        messages: "refuse suggestion successfully",
      };
      break;
    case suggestionConstants.REFUSE_SUGGESTION_FAILURE:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      break;
  }
  return state;
};