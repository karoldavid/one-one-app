import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import StudentsReducer from "./StudentsReducer";
import StudentReducer from "./StudentReducer";

export default combineReducers({
	auth: AuthReducer,
	studentList: StudentsReducer,
	student: StudentReducer
});
