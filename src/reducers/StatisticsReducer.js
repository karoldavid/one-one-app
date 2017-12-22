import {
	PROJECT_TYPES,
	NUMBER_OF_APPOINTMENTS,
	ATTENDANCE,
	STUDENTS_PER_DAY,
	STUDENTS_PER_MONTH
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
			return {
				...state,
				attendance: action.payload.reduce(function(
					attendance,
					appointment
				) {
					attendance[appointment.meeting] =
						(attendance[appointment.meeting] || 0) + 1;
					return attendance;
				},
				{})
			};
		case STUDENTS_PER_DAY:
			return {
				...state,
				studentsPerDay: action.payload.reduce(function(
					studentsPerDay,
					appointment
				) {
					const strDay = appointment.timeDateUtc.split("T")[0];
					studentsPerDay[strDay] =
						(studentsPerDay[strDay] || 0) + 1;
					return studentsPerDay;
				},
				{})
			};
		case STUDENTS_PER_MONTH:
			return {
				...state,
				studentsPerMonth: action.payload.reduce(function(
					studentsPerMonth,
					appointment
				) {
					const strMonth = appointment.timeDateUtc.slice(0,7)
					studentsPerMonth[strMonth] =
						(studentsPerMonth[strMonth] || 0) + 1;
					return studentsPerMonth;
				},
				{})
			};
		default:
			return state;
	}
}
