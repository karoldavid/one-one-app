import {
	APPOINTMENT_CHANGE,
	APPOINTMENT_CREATE,
	APPOINTMENT_SAVE_SUCCESS
} from "../actions/types";

const INITIAL_APPOINTMENT_STATE = {
	date: null,
	time: null,
	studentUID: null
};

export default (state = INITIAL_APPOINTMENT_STATE, action) => {
	switch (action.type) {
		case APPOINTMENT_CHANGE:
			return { ...state, [action.payload.prop]: action.payload.value };
		case APPOINTMENT_CREATE:
			return INITIAL_APPOINTMENT_STATE;
		case APPOINTMENT_SAVE_SUCCESS:
			return INITIAL_APPOINTMENT_STATE;
		default:
			return state;
	}
};
