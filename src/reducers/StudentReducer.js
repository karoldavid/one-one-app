import {
	STUDENT_SELECT,
	STUDENT_CHANGE,
	STUDENT_CREATE,
	STUDENT_SAVE_SUCCESS,
	STUDENT_DELETE_SUCCESS
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
		case STUDENT_SAVE_SUCCESS:
			return INITIAL_STUDENT_STATE;
		case STUDENT_DELETE_SUCCESS:
			return INITIAL_STUDENT_STATE;
		default:
			return state;
	}
};
