import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

class StudentsListView extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text>StudentsListView</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	}
});

export default StudentsListView;
