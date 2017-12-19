import firebase from "firebase";
import {
	APPOINTMENTS_FETCH,
	APPOINTMENTS_FETCH_SUCCESS,
	APPOINTMENTS_STUDENT_NUMBER,
	APPOINTMENTS_STUDENT
} from "./types";

export const appointmentsFetch = () => {
	const { currentUser } = firebase.auth();
	return dispatch => {
		dispatch({ type: APPOINTMENTS_FETCH });
		firebase
			.database()
			.ref(`/users/${currentUser.uid}/appointments`)
			.on("value", snapshot => {
				dispatch({
					type: APPOINTMENTS_FETCH_SUCCESS,
					payload: snapshot.val()
				});
			});
	};
};

export const studentAppointmentsNumber = uid => {
	return {
		type: APPOINTMENTS_STUDENT_NUMBER,
		payload: uid
	};
};

export const getStudentAppointments = uid => {
	return {
		type: APPOINTMENTS_STUDENT,
		payload: uid
	};
};