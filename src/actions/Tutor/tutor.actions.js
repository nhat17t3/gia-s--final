import axios from "../../helpers/axios";
import { tutorConstants } from "../constants";

export const getListTutor = () => {
  return async (dispatch) => {
    dispatch({ type: tutorConstants.GET_ALL_TUTOR_REQUEST });
    const res = await axios.get(`/tutor`);
    
    if (res.status === 200) {
      const { tutors } = res.data;
      dispatch({
        type: tutorConstants.GET_ALL_TUTOR_SUCCESS,
        payload: {
          listTutor: tutors,
        },
      });
    } else {
      dispatch({
        type: tutorConstants.GET_ALL_TUTOR_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};


// export const updateTutor = (form) => {
//   return async (dispatch) => {
//     // const id = form.get("id");
//     dispatch({ type: tutorConstants.UPDATE_TUTOR_REQUEST });
//     const res = await axios.put(`/api/tutor/${form.id}`, form);

//     if (res.status === 200) {
//       const { message } = res.data;
//       dispatch({
//         type: tutorConstants.UPDATE_TUTOR_SUCCESS,
//         payload: { message: message, error: "" },
//       });
//       dispatch(getListTutor());
//     } else {
//       const { error } = res.data;
//       dispatch({
//         type: tutorConstants.UPDATE_TUTOR_FAILURE,
//         payload: { message: "", error: error },
//       });
//     }
//   };
// };