import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import StudentsReducer from "./StudentsReducer";
import StudentReducer from "./StudentReducer";
import AppointmentReducer from "./AppointmentReducer";

export default combineReducers({
	auth: AuthReducer,
	studentList: StudentsReducer,
	student: StudentReducer,
	appointment: AppointmentReducer
});
