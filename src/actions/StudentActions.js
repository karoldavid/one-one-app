import { STUDENT_SELECT, STUDENT_CHANGE } from "./types";

export const selectStudent = student => {
	return {
		type: STUDENT_SELECT,
		payload: student
	};
};

export const updateStudent = ({ prop, value }) => {
	return {
		type: STUDENT_CHANGE,
		payload: { prop, value }
	};
};
