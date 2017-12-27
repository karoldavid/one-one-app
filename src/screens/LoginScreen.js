import React, { Component } from "react";
import { View, Text, KeyboardAvoiding, StyleSheet } from "react-native";
import styles from "../utils/styles";
import LoginForm from "../components/login/LoginForm";

class LoginScreen extends Component {
	render() {
		const { navigation } = this.props;
		return (
			<View style={[styles.container, { justifyContent: "flex-start" }]}>
				<Text style={styles.header}>1:1 Appointments</Text>
				<LoginForm navigation={navigation} />
			</View>
		);
	}
}

export default LoginScreen;
