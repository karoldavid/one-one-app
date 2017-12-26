import _ from "lodash";
import React from "react";
import { NavigationActions } from "react-navigation";

export const resetNavigation = (navigation, targetRoute) => {
	const resetAction = NavigationActions.reset({
		index: 0,
		actions: [NavigationActions.navigate({ routeName: targetRoute })]
	});
	navigation.dispatch(resetAction);
};

export const makeArray = object => {
	const students = _.map(object, (val, uid) => {
		return {
			...val,
			uid
		};
	});
	return students;
};

export const monthToString = month => {

	switch (month - 1) {
		case 0:
			return "Jan";
		case 1:
			return "Feb";
		case 2:
			return "Mar";
		case 3:
			return "Apr";
		case 4:
			return "May";
		case 5:
			return "Jun";
		case 6:
			return "Jul";
		case 7:
			return "Aug";
			break;
		case 8:
			return "Sep";
		case 9:
			return "Oct";
		case 10:
			return "Nov";
		case 11:
			return "Dec";
		default:
			return "";
	}
};
