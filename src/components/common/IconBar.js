import React from "react";
import { blueMagenta, white } from "../../utils/colors";
import { Icon } from "react-native-elements";

const IconBar = ({ icons }) => {
	return icons.map((icon, index) => {
		const { name, type, onPress } = icon;
		return (
			<Icon
				key={index}
				raised
				name={name}
				type={type}
				containerStyle={{ backgroundColor: blueMagenta }}
				color={white}
				onPress={onPress}
			/>
		);
	});
};

export { IconBar };
