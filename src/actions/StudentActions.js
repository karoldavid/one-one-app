import {
	STUDENT_SELECT,
	STUDENT_CHANGE,
	STUDENT_CREATE,
	STUDENT_SAVE_SUCCESS,
	STUDENT_DELETE_SUCCESS,
	STUDENT_DESELECT
} from "./types";
import firebase from "firebase";

export const selectStudent = student => {
	return {
		type: STUDENT_SELECT,
		payload: student
	};
};

export const deselectStudent = () => {
	return {
		type: STUDENT_DESELECT
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

export const saveStudent = ({ uid, ...student}, callback) => {
	const { currentUser } = firebase.auth();
	return dispatch => {
		firebase
			.database()
			.ref(`/users/${currentUser.uid}/students/${uid}`)
			.set(student)
			.then(() => {
				dispatch({ type: STUDENT_SAVE_SUCCESS });
				callback();
			});
	};
};

export const deleteStudent = (uid, callback) => {
	const { currentUser } = firebase.auth();
	return dispatch => {
		firebase
			.database()
			.ref(`/users/${currentUser.uid}/students/${uid}`)
			.remove()
			.then(() => {
				dispatch({ type: STUDENT_DELETE_SUCCESS });
				callback();
			});
	};
};
