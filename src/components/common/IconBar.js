import React from "react";
import { TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import { blue, blueMagenta, white } from "../../utils/colors";

const IconBar = ({ icons }) => {
	return icons.map((icon, index) => {
		const { name, type, onPress } = icon;
		return (
			<TouchableOpacity key={index} onPress={onPress}>
				<Icon
					raised
					name={name}
					type={type}
					containerStyle={{ backgroundColor: blueMagenta }}
					color={white}
				/>
			</TouchableOpacity>
		);
	});
};

export { IconBar };
