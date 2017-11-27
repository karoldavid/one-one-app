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
	return students
};
