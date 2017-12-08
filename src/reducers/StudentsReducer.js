import _ from "lodash";
import { STUDENTS_FETCH, STUDENTS_FETCH_SUCCESS } from "../actions/types";
import { makeArray } from "../utils/helpers";

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
			};
		case STUDENTS_FETCH_SUCCESS:
			return {
				...state,
				students: _.orderBy(
					makeArray(action.payload),
					[student => student[state.orderBy].toLowerCase()],
					[state.sortDirection]
				),
				loading: false
			};
		default:
			return state;
	}
};
