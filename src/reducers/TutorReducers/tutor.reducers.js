import { tutorConstants } from "../../actions/constants";

const initState = {
  listTutor: [],
  loading: false,
  error: "",
  messages: "",
};

export default (state = initState, action) => {
  switch (action.type) {
    case tutorConstants.GET_ALL_TUTOR_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case tutorConstants.GET_ALL_TUTOR_SUCCESS:
      state = {
        ...state,
        loading: false,
        listTutor: action.payload.listTutor,
      };
      break;
    case tutorConstants.GET_ALL_TUTOR_FAILURE:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      break;
      
  }
  return state;
};