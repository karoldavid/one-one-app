import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Card, Button } from "react-native-elements";
import { Deck } from "./common";
import { getStudentAppointments } from "../actions";

class StudentAppointmentsView extends Component {
	componentWillMount() {
		const { uid } = this.props.student;
		this.props.getStudentAppointments(uid);
	}

	renderCard(item) {
		const { timeDateUtc, project } = item;
		return (
			<Card title={project}>
				<Text style={styles.text}>
					{moment(timeDateUtc).format("LLLL")}
				</Text>
				<Button
					icon={{ name: "code" }}
					backgroundColor="#03A9F4"
					title="Show More"
					onPress={() => console.log("pressed")}
				/>
			</Card>
		);
	}

	render() {
		return (
			<ScrollView style={styles.container}>
				<Deck
					data={this.props.studentAppointments}
					renderCard={this.renderCard}
					keyProp="uid"
				/>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		marginTop: 20,
		flex: 1,
		backgroundColor: "#fff"
	},
	text: {
		textAlign: "center"
	}
});

const mapStateToProps = ({ student, appointmentList: { studentAppointments} }) => {
	return {
		student,
		studentAppointments
	};
};

export default connect(mapStateToProps, { getStudentAppointments })(
	StudentAppointmentsView
);
