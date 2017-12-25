import { CALENDAR_ITEMS, ACTIVE_MONTH } from "./types";

export const getCalendarItems = appointments => {
	return {
		type: CALENDAR_ITEMS,
		payload: appointments
	};
};

export const setActiveMonth = month => {
	return {
		type: ACTIVE_MONTH,
		payload: month
	};
};
