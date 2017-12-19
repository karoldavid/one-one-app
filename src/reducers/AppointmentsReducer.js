import {
	APPOINTMENTS_FETCH,
	APPOINTMENTS_FETCH_SUCCESS,
	APPOINTMENTS_STUDENT_NUMBER
} from "../actions/types";
import { makeArray } from "../utils/helpers";

const INITIAL_APPOINTMENTS_STATE = {
	appointments: [],
	loading: false,
	currentStudentAppointments: 0
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
		case APPOINTMENTS_STUDENT_NUMBER:
			return {
				...state,
				currentStudentAppointments: state.appointments.reduce(function(
					accumulator,
					appointment
				) {
					return appointment.studentUid === action.payload
						? accumulator + 1
						: accumulator;
				},
				0)
			};
		default:
			return state;
	}
};
