import moment from "moment";
import { CALENDAR_ITEMS, ACTIVE_MONTH } from "../actions/types";

const INITIAL_CALENDAR_STATE = {
	items: {},
	month: new Date("2017-11-25T07:30:00+01:00").getMonth() + 1,
	selected: "2017-11-25T07:30:00+01:00"
};

export default (state = INITIAL_CALENDAR_STATE, action) => {
	switch (action.type) {
		case CALENDAR_ITEMS:
			return {
				...state,
				items: action.payload.reduce((items, appointment) => {
					const { timeDateUtc, description, project } = appointment;
					const strDate = timeDateUtc.split("T")[0];
					const strTime = moment(timeDateUtc)
						.local()
						.format("HH:mm");

					if (!items[strDate]) {
						items[strDate] = [];
					}

					items[strDate].push({
						time: strTime,
						project: project,
						description: description
					});
					return items;
				}, {})
			};
		case ACTIVE_MONTH:
			return { ...state, month: action.payload };
		default:
			return state;
	}
};
