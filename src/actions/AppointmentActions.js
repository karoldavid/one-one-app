import {
	APPOINTMENT_CHANGE,
	APPOINTMENT_CREATE,
	APPOINTMENT_SAVE_SUCCESS,
} from "./types";
import firebase from "firebase";

export const updateAppointment = ({ prop, value }) => {
	return {
		type: APPOINTMENT_CHANGE,
		payload: { prop, value }
	};
};

export const createAppointment = (appointment, callback) => {
	const { currentUser } = firebase.auth();

	return dispatch => {
		firebase
			.database()
			.ref(`/users/${currentUser.uid}/appointments`)
			.push(appointment)
			.then(() => {
				dispatch({ type: APPOINTMENT_CREATE });
				callback();
			});
	};
};

export const saveAppointment = ({ uid, ...appointment }, callback) => {
	const { currentUser } = firebase.auth();
	return dispatch => {
		firebase
			.database()
			.ref(`/users/${currentUser.uid}/appointments/${uid}`)
			.set(appointment)
			.then(() => {
				dispatch({ type: APPOINTMENT_SAVE_SUCCESS });
				callback();
			});
	};
};