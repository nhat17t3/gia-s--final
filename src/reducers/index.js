import { combineReducers } from "redux";
import authReducer from "./AdminReducers/auth.reducers";
import settingAdminReducer from "./AdminReducers/settings.reducers";
import manage_invitationReducers from "./InvitationReducers/manage_invitation.reducers";
import manage_postReducers from "./PostReducers/manage_post.reducers";
import manage_suggestionReducers from "./SuggestionReducers/manage_suggestion.reducers";
import tutorReducers from "./TutorReducers/tutor.reducers";
import manage_commentReducers from "./CommentReducers/manage_comment.reducers";


const rootReducer = combineReducers({
  auth: authReducer,
  setting_admin: settingAdminReducer,
  posts: manage_postReducers,
  tutors : tutorReducers,
  suggestions : manage_suggestionReducers,
  invitations : manage_invitationReducers,
  comments : manage_commentReducers,
});

export default rootReducer;