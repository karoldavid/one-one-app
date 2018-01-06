import { CALENDAR_ITEMS, ACTIVE_MONTH, ITEMS_DAY } from "./types";

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

export const getSpecificDayCalendarItems = ({ appointments, date }) => {
	return {
		type: ITEMS_DAY,
		payload: { appointments, date }
	};
};
