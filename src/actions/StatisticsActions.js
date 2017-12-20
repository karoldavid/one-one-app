import { PROJECT_TYPES, NUMBER_OF_APPOINTMENTS } from "./types";

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
