import {
	EMAIL_CHANGED,
	PASSWORD_CHANGED,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_FAIL,
	LOGIN_USER,
	LOGGED_IN,
	RESET_STUDENTS
} from "./types";
import { getUser, saveUser, removeUser } from "../utils/api";
import firebase from "firebase";
import { NavigationActions } from "react-navigation";

export const removeFromStorage = () => {
	return dispatch => {
		removeUser();
	};
};

export const loggedIn = () => {
	return dispatch => {
		getUser()
			.then(data => {
				if (data !== null) {
					const { email, password } = data;
					dispatch(emailChanged(email));
					dispatch(passwordChanged(password));
				}
			})
			.catch(err => console.log("err:", err));
	};
};

export const logOut = () => {
	return dispatch => {
		firebase
			.auth()
			.signOut()
			.then(
				() => {
					dispatch({ type: RESET_STUDENTS });
					console.log("signed out");
				},
				err => console.log("err:", err)
			);
	};
};

export const emailChanged = text => {
	return {
		type: EMAIL_CHANGED,
		payload: text
	};
};

export const passwordChanged = text => {
	return {
		type: PASSWORD_CHANGED,
		payload: text
	};
};

export const loginFail = () => {
	return {
		type: LOGIN_USER_FAIL
	};
};

export const loginSuccess = user => {
	return {
		type: LOGIN_USER_SUCCESS,
		payload: user
	};
};

export const loginUser = ({ email, password }, callback) => {
	return dispatch => {
		dispatch({ type: LOGIN_USER });
		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then(user =>
				loginUserSuccess(dispatch, { email, password }, user, callback)
			)
			.catch(error => {
				console.log(error);
				firebase
					.auth()
					.createUserWithEmailAndPassword(email, password)
					.then(user =>
						loginUserSuccess(
							dispatch,
							{ email, password },
							user,
							callback
						)
					)
					.catch(() => loginUserFail(dispatch));
			});
	};
};

const loginUserFail = dispatch => {
	dispatch(loginFail());
};

const loginUserSuccess = (dispatch, { email, password }, user, callback) => {
	saveUser({ email, password });
	dispatch(loginSuccess(user));
	callback();
};
