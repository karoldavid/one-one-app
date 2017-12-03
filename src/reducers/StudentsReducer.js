import { STUDENTS_FETCH_SUCCESS } from "../actions/types";
import _ from "lodash";

const INITIAL_STUDENTS_STATE = {
	students: {},
	orderBy: "firstName",
	sortDirection: "asc"
};

export default (state = INITIAL_STUDENTS_STATE, action) => {
	const { orderBy, sortDirection } = state;
	switch (action.type) {
		case STUDENTS_FETCH_SUCCESS:
			return {
				...state,
				students: _.orderBy(action.payload, [orderBy], [sortDirection])
			};
		default:
			return state;
	}
};
