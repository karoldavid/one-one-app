import moment from "moment";
import { CALENDAR_ITEMS } from "../actions/types";

export default (state = {}, action) => {
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
		default:
			return state;
	}
};
