import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../../utils/styles";
import { white } from "../../utils/colors";

const DrawerIcon = ({ onPress, ionicon, size, color, title }) => {
	return (
		<View style={[styles.drawerIcon, { paddingLeft: 15 }]}>
			<TouchableOpacity style={styles.drawerItem} onPress={onPress}>
				<Ionicons
					style={styles.drawerItemIcon}
					name={ionicon}
					size={size}
					color={color}
				/>
				<Text style={styles.drawerItemText}>{title}</Text>
			</TouchableOpacity>
		</View>
	);
};

export { DrawerIcon };
