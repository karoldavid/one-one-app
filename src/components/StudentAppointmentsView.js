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
		this.props.getStudentAppointments(uid)
	}

	renderCard(item) {
		const { uid, timeDateUtc, project } = item;
		console.log(item)
		return (
			<Card key={uid} title={project}>
				<Text style={styles.text}>{moment(timeDateUtc).format("LLLL")}</Text>
				<Button
					icon={{ name: "code" }}
					backgroundColor="#03A9F4"
					title="More"
				/>
			</Card>
		);
	}

	render() {
		const { studentAppointments } = this.props;
		return (
			<ScrollView style={styles.container}>
				<Deck data={studentAppointments} renderCard={this.renderCard} />
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

const mapStateToProps = ({ student, appointmentList }) => {
	return {
		student,
		studentAppointments: appointmentList.studentAppointments
	};
};

export default connect(mapStateToProps, { getStudentAppointments })(
	StudentAppointmentsView
);