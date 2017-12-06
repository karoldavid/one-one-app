import { STUDENTS_FETCH, STUDENTS_FETCH_SUCCESS } from "../actions/types";

const INITIAL_STUDENTS_STATE = {
	students: {},
	orderBy: "firstName",
	sortDirection: "asc",
	loading: false
};

export default (state = INITIAL_STUDENTS_STATE, action) => {
	switch (action.type) {
		case STUDENTS_FETCH:
			return {
				...state,
				loading: true
			}
		case STUDENTS_FETCH_SUCCESS:
			return {
				...state,
				students: action.payload,
				loading: false
			};
		default:
			return state;
	}
};
