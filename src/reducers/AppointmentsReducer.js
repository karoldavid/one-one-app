import {
	APPOINTMENTS_FETCH,
	APPOINTMENTS_FETCH_SUCCESS
} from "../actions/types";
import { makeArray } from "../utils/helpers";

const INITIAL_APPOINTMENTS_STATE = {
	appointments: [],
	loading: false
};

export default (state = INITIAL_APPOINTMENTS_STATE, action) => {
	switch (action.type) {
		case APPOINTMENTS_FETCH:
			return {
				...state,
				loading: true
			};
		case APPOINTMENTS_FETCH_SUCCESS:
			return {
				...state,
				appointments: makeArray(action.payload),
				loading: false
			};
		default:
			return state;
	}
};