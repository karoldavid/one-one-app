import React, { Component } from "react";
import { connect } from "react-redux";
import { Image, Text, View, StyleSheet } from "react-native";
import { blue, white } from "../utils/colors";

class StudentView extends Component {
	render() {
		const { firstName, lastName, email, program, image } = this.props.student;
		return (
			<View style={styles.container}>
				<Image source={{ uri: image }} style={styles.photo} />
				<View style={{ flexDirection: "column" }}>
					<Text style={styles.text}>{`${firstName} ${
						lastName
					}`}</Text>
					<Text style={styles.text}>{email}</Text>
					<Text style={styles.text}>{program}</Text>
				</View>
			</View>
		);
	}
}

const mapStateToProps = state => {
	return {
		student: state.student
	};
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 12,
		flexDirection: "row",
		alignItems: "flex-start",
		backgroundColor: white
	},
	text: {
		marginLeft: 12,
		paddingBottom: 10,
		fontSize: 16,
		color: blue
	},
	photo: {
		height: 150,
		width: 100
	}
});

export default connect(mapStateToProps)(StudentView);
