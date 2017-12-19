import firebase from "firebase";
import { APPOINTMENTS_FETCH, APPOINTMENTS_FETCH_SUCCESS } from "./types";

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