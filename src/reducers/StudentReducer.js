import {
	STUDENT_SELECTED
} from "../actions/types";

const INITIAL_STATE = {
	name: {
		first: "",
		last: ""
	},
	email: "",
	program: "",
	image: ""
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case STUDENT_SELECTED:
			return action.payload;
		default:
			return state;
	}
};
