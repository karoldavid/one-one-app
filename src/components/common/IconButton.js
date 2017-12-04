import React, { Component } from "react";
import { View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../../utils/styles";
import { white } from "../../utils/colors";

const IconButton = ({ onPress, ionicon, size, color }) => {
	return (
		<View style={styles.arrowStyles}>
			<TouchableOpacity onPress={onPress}>
				<Ionicons name={ionicon} size={size} color={color} />
			</TouchableOpacity>
		</View>
	);
};

export { IconButton };
