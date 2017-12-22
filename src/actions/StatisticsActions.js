import {
	PROJECT_TYPES,
	NUMBER_OF_APPOINTMENTS,
	ATTENDANCE,
	STUDENTS_PER_DAY,
	STUDENTS_PER_MONTH,
	STUDENTS_PER_PROJECT
} from "./types";

export const getNumberOfAppointments = appointments => {
	return {
		type: NUMBER_OF_APPOINTMENTS,
		payload: appointments
	};
};

export const getProjectTypes = appointments => {
	return {
		type: PROJECT_TYPES,
		payload: appointments
	};
};

export const getAttendance = appointments => {
	return {
		type: ATTENDANCE,
		payload: appointments
	};
};

export const getStudentsPerDay = appointments => {
	return {
		type: STUDENTS_PER_DAY,
		payload: appointments
	};
};

export const getStudentsPerMonth = appointments => {
	return {
		type: STUDENTS_PER_MONTH,
		payload: appointments
	};
};


export const getStudentsPerProject = appointments => {
	return {
		type: STUDENTS_PER_PROJECT,
		payload: appointments
	}
}