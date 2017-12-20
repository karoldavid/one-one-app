import { PROJECT_TYPES, NUMBER_OF_APPOINTMENTS } from "../actions/types";

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
		default:
			return state;
	}
}
