import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, View } from "react-native";
import styles from "../utils/styles";
import {
	getNumberOfAppointments,
	getProjectTypes,
	getAttendance,
	getStudentsPerDay,
	getStudentsPerMonth
} from "../actions";
import { PieChart } from "./PieChart";
import { BarChart } from "./BarChart";
import { SmoothLineChart } from "./SmoothLineChart";

import { data } from "../utils/data";

class StatsView extends Component {
	componentWillMount() {
		const { appointments } = this.props;
		this.props.getProjectTypes(appointments);
		this.props.getNumberOfAppointments(appointments);
		this.props.getAttendance(appointments);
		//this.props.getStudentsPerDay(appointments)
		this.props.getStudentsPerMonth(appointments);
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

	makeSmoothLineData() {
		const { studentsPerMonth } = this.props.statistics;
		let data = [];
		let years = [];

		if (studentsPerMonth) {
			Object.keys(studentsPerMonth).map(key => {
				const year = key.slice(0, 4);
				if (!years.includes(year)) {
					years.push(year);
				}
			});
			years.forEach(function(year) {
				let months = [];
				Object.keys(studentsPerMonth).map(key => {
					if (key.indexOf(year) > -1) {
						console.log(key);
						const month = parseInt(
							key.slice(key.length - 2, key.length)
						);
						months.push({
							x: month,
							y: studentsPerMonth[key]
						});
					}
				});
				data.push(months);
			});
		}

		return data;
	}

	render() {
		const { statistics } = this.props;

		const show = false;

		const chartData = this.makeChartData();
		const barData = this.makeBarData();
		const smoothLineData = this.makeSmoothLineData();

		//	console.log(this.makeSmoothLineData())

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
				{smoothLineData.length > 0 && (
					<SmoothLineChart data={smoothLineData} xKey="x" yKey="y" />
				)}

				{show && <PieChart data={chartData} accessorKey="times" />}

				{show && <BarChart data={barData} accessorKey="times" />}
			</View>
		);
	}
}

const mapStateToProps = ({ appointmentList, statistics }) => {
	//console.log(statistics.studentsPerDay)
	//console.log(statistics.studentsPerMonth)
	return {
		appointments: appointmentList.appointments,
		statistics
	};
};

export default connect(mapStateToProps, {
	getNumberOfAppointments,
	getProjectTypes,
	getAttendance,
	getStudentsPerDay,
	getStudentsPerMonth
})(StatsView);
