import { STUDENTS_FETCH_SUCCESS } from "../actions/types"

const INITIAL_STUDENTS_STATE = {};

export default (state = INITIAL_STUDENTS_STATE, action) => {
	switch (action.type) {
		case STUDENTS_FETCH_SUCCESS:
			return action.payload;
		default:
			return state;
	}
};
