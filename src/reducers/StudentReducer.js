import { STUDENT_SELECT, STUDENT_CHANGE } from "../actions/types";

const INITIAL_STATE = {
	firstName: "",
	lastName: "",
	email: "@",
	program: "",
	image: ""
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case STUDENT_SELECT:
			return action.payload;
		case STUDENT_CHANGE:
			return { ...state, [action.payload.prop]: action.payload.value };
		default:
			return state;
	}
};
