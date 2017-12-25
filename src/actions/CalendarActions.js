import { CALENDAR_ITEMS } from "./types";

export const getCalendarItems = appointments => {
	return {
		type: CALENDAR_ITEMS,
		payload: appointments
	};
};
