import {
	EMAIL_CHANGED,
	PASSWORD_CHANGED,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_FAIL,
	LOGIN_USER
} from "./types";
import firebase from "firebase";
import { NavigationActions } from "react-navigation";

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
	console.log(callback);
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
