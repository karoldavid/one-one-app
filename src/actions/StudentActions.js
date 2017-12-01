import { STUDENT_SELECT, STUDENT_CHANGE, STUDENT_CREATE } from "./types";
import firebase from "firebase";

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

export const createStudent = (student, callback) => {
	const { currentUser } = firebase.auth();

	return dispatch => {
		firebase
			.database()
			.ref(`/users/${currentUser.uid}/students`)
			.push(student)
			.then(() => {
				dispatch({ type: STUDENT_CREATE });
				callback();
			});
	};
};
