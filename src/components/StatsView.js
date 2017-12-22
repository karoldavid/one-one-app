import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, View } from "react-native";
import styles from "../utils/styles";
import {
	getNumberOfAppointments,
	getProjectTypes,
	getAttendance
} from "../actions";
import { PieChart } from "./PieChart";
import { BarChart } from "./BarChart";

class StatsView extends Component {
	componentWillMount() {
		const { appointments } = this.props;
		this.props.getProjectTypes(appointments);
		this.props.getNumberOfAppointments(appointments);
		this.props.getAttendance(appointments);
	}

	makeChartData() {
		const { attendance } = this.props.statistics;
		let data = [];

		if (attendance) {
			Object.keys(attendance).map(key => {
				data.push({
					name: key,
					times: attendance[key]
				});
			});
		}

		return data;
	}

	makeBarData() {
		const { attendance } = this.props.statistics;
		let data = [];

		if (attendance) {
			Object.keys(attendance).map(key => {
				let bar = [];
				bar.push({
					name: key,
					times: attendance[key]
				});
				bar.push({
					name: key,
					times: attendance[key]
				});
				data.push(bar);
			});
		}

		return data;
	}

	render() {
		const { statistics } = this.props;

		const chartData = this.makeChartData();
		const barData = this.makeBarData();

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
				<PieChart data={chartData} accessorKey="times" />
				{barData.length > 0 && (
					<BarChart data={barData} accessorKey="times" />
				)}
			</View>
		);
	}
}

const mapStateToProps = ({ appointmentList, statistics }) => {
	return {
		appointments: appointmentList.appointments,
		statistics
	};
};

export default connect(mapStateToProps, {
	getNumberOfAppointments,
	getProjectTypes,
	getAttendance
})(StatsView);
