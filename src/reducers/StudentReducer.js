import {
	STUDENT_SELECT,
	STUDENT_CHANGE,
	STUDENT_CREATE
} from "../actions/types";

const INITIAL_STUDENT_STATE = {
	firstName: "",
	lastName: "",
	email: "@",
	program: "",
	image: "http://via.placeholder.com/100x150"
};

export default (state = INITIAL_STUDENT_STATE, action) => {
	switch (action.type) {
		case STUDENT_SELECT:
			return action.payload;
		case STUDENT_CHANGE:
			return { ...state, [action.payload.prop]: action.payload.value };
		case STUDENT_CREATE:
			return INITIAL_STUDENT_STATE;
		default:
			return state;
	}
};
