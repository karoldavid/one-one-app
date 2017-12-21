import {
	PROJECT_TYPES,
	NUMBER_OF_APPOINTMENTS,
	ATTENDANCE
} from "../actions/types";

export default function(state = {}, action) {
	switch (action.type) {
		case NUMBER_OF_APPOINTMENTS:
			return { ...state, length: action.payload.length };
		case PROJECT_TYPES:
			return {
				...state,
				types: action.payload.reduce(function(
					allProjects,
					appointment
				) {
					if (!allProjects.includes(appointment.project)) {
						allProjects.push(appointment.project);
					}
					return allProjects;
				},
				[])
			};
		case ATTENDANCE:
			return { ...state, attendance: result = action.payload.reduce(function(attendance, appointment) {
				 attendance[appointment.meeting] = (attendance[appointment.meeting] || 0) + 1 ;
				 return attendance;
			}, {})};
		default:
			return state;
	}
}
