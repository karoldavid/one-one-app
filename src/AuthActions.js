import firebase from "firebase";
import {
	EMAIL_CHANGED,
	PASSWORD_CHANGED,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_FAIL,
	LOGIN_USER
} from "./types";

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

export const loginUser = ({ email, password }) => {
	return dispatch => {
		dispatch({ type: LOGIN_USER });
		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then(user => loginUserSuccess(dispatch, user))
			.catch(error => {
				console.log(error);
				firebase
					.auth()
					.createUserWithEmailAndPassword(email, password)
					.then(user => loginUserSuccess(dispatch, user))
					.catch(() => loginUserFail(dispatch));
			});
	};
};

const loginUserFail = dispatch => {
	dispatch(loginFail());
};

const loginUserSuccess = (dispatch, user) => {
	dispatch(loginSuccess(user));
	Actions.main();
};
