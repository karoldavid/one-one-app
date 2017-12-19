import {
	APPOINTMENTS_FETCH,
	APPOINTMENTS_FETCH_SUCCESS,
	APPOINTMENTS_STUDENT_NUMBER,
	APPOINTMENTS_STUDENT
} from "../actions/types";
import { makeArray } from "../utils/helpers";

const INITIAL_APPOINTMENTS_STATE = {
	appointments: [],
	loading: false,
	currentStudentAppointments: 0,
	studentAppointments: []
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
		case APPOINTMENTS_STUDENT:
			return {
				...state,
				studentAppointments: state.appointments.filter(appointment => {
					return appointment.studentUid === action.payload;
				})
			};
		default:
			return state;
	}
};
