import firebase from "firebase";
import { STUDENTS_FETCH_SUCCESS } from "./types";

export const studentsFetch = () => {
	const { currentUser } = firebase.auth();
	return dispatch => {
		firebase
			.database()
			.ref(`/users/${currentUser.uid}/students`)
			.on("value", snapshot => {
				dispatch({
					type: STUDENTS_FETCH_SUCCESS,
					payload: snapshot.val()
				});
			});
	};
};
