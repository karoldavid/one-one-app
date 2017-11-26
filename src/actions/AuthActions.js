import {
	EMAIL_CHANGED,
	PASSWORD_CHANGED,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_FAIL,
	LOGIN_USER,
	LOGGED_IN
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
					const key = Object.keys(data)[0];
					const { email, password } = data[key];
					dispatch(emailChanged(email));
					dispatch(passwordChanged(password));
				}
			})
			.catch(err => console.log("err:", err));
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
	saveUser({ email, password });
	return dispatch => {
		dispatch({ type: LOGIN_USER });
		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then(user => loginUserSuccess(dispatch, user, callback))
			.catch(error => {
				console.log(error);
				firebase
					.auth()
					.createUserWithEmailAndPassword(email, password)
					.then(user => loginUserSuccess(dispatch, user, callback))
					.catch(() => loginUserFail(dispatch));
			});
	};
};

const loginUserFail = dispatch => {
	dispatch(loginFail());
};

const loginUserSuccess = (dispatch, user, callback) => {
	dispatch(loginSuccess(user));
	callback();
};
