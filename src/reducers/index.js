import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import StudentReducer from "./StudentReducer";

export default combineReducers({
	auth: AuthReducer,
	students: StudentReducer
});
