import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, View } from "react-native";
import styles from "../utils/styles";
import { getNumberOfAppointments, getProjectTypes } from "../actions";

class StatsView extends Component {
	componentWillMount() {
		const { appointments } = this.props;
		this.props.getProjectTypes(appointments);
		this.props.getNumberOfAppointments(appointments);
	}

	render() {
		const { statistics } = this.props;

		return (
			<View style={[styles.container, { justifyContent: "center" }]}>
				<Text>
					Number of Appointments:{" "}
					{statistics.length ? statistics.length : 0}
				</Text>
				<Text>
					Number of Project Types:{" "}
					{statistics.types ? statistics.types.length : 0}
				</Text>
			</View>
		);
	}
}

const mapStateToProps = ({ appointmentList, statistics }) => {
	console.log(statistics);
	return {
		appointments: appointmentList.appointments,
		statistics
	};
};

export default connect(mapStateToProps, {
	getNumberOfAppointments,
	getProjectTypes
})(StatsView);
