import { STUDENT_SELECTED } from "./types";

export const selectStudent = student => {
	return {
		type: STUDENT_SELECTED,
		payload: student
	};
};