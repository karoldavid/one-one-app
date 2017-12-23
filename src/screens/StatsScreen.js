import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, View } from "react-native";
import styles from "../utils/styles";
import {
	getNumberOfAppointments,
	getProjectTypes,
	getAttendance,
	getStudentsPerDay,
	getStudentsPerMonth,
	getStudentsPerProject
} from "../actions";
import { PieChart } from "../components/charts/PieChart";
import { BarChart } from "../components/charts/BarChart";
import { SmoothLineChart } from "../components/charts/SmoothLineChart";
import Slides from "../components/Slides";

class StatsScreen extends Component {
	static navigationOptions = ({ navigation }) => {
		return {
			title: "Stats",
			visible: true
		};
	};

	componentWillMount() {
		const { appointments } = this.props;
		//this.props.getProjectTypes(appointments);
		//this.props.getNumberOfAppointments(appointments);
		this.props.getAttendance(appointments);
		this.props.getStudentsPerMonth(appointments);
		this.props.getStudentsPerProject(appointments);
	}

	makePieData() {
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
		const { studentsPerProject } = this.props.statistics;
		let data = [];

		if (studentsPerProject) {
			Object.keys(studentsPerProject).map(key => {
				let bar = [];
				bar.push({
					name: key,
					students: studentsPerProject[key]
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

		let slideData = [
			{
				text: "Appointments/ Month",
				color: "#03A9F4",
				data: this.makeSmoothLineData(),
				makeChart: smoothLineData => {
					return (
						<SmoothLineChart
							data={smoothLineData}
							xKey="x"
							yKey="y"
						/>
					);
				}
			},
			{
				text: "Student Attendance",
				color: "#009688",
				data: this.makePieData(),
				makeChart: pieData => {
					return <PieChart data={pieData} accessorKey="times" />;
				}
			},
			{
				text: "Students/ Project",
				color: "#03A9F4",
				data: this.makeBarData(),
				makeChart: barData => {
					return <BarChart data={barData} accessorKey="students" />;
				}
			}
		];

		return (
			<View style={[styles.container, { justifyContent: "center" }]}>
				<Slides data={slideData} />
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
	getAttendance,
	getStudentsPerDay,
	getStudentsPerMonth,
	getStudentsPerProject
})(StatsScreen);