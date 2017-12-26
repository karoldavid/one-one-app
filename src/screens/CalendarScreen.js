import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";
import { StyleSheet, Text, View } from "react-native";
import AgendaView from "../components/calendar/AgendaView";
import { setActiveMonth } from "../actions";
import { monthToString } from "../utils/helpers";

class CalendarScreen extends Component {
	static navigationOptions = ({ navigation }) => {
		const { params } = navigation.state;
		return {
			title: `Calendar - ${params ? monthToString(params.month) : ""}`,
			visible: true
		};
	};

	componentWillMount() {
		this.props.navigation.setParams({ month: this.props.month });
	}

	makeCalendarItems = (data, day) => {
		return data
			.sort(function(a, b) {
				return Date.parse(a.timeDateUtc) - Date.parse(b.timeDateUtc);
			})
			.reduce((items, appointment) => {
				const { timeDateUtc, description, project } = appointment;
				const strDate = timeDateUtc.split("T")[0];
				const strTime = moment(timeDateUtc)
					.local()
					.format("HH:mm");

				if (!items[strDate]) {
					items[strDate] = [];
				}

				items[strDate].push({
					time: strTime,
					project: project,
					description: description
				});
				return items;
			}, {});
	};

	renderItem = item => {
		return (
			<View style={[styles.item, { height: item.height }]}>
				<Text style={{ color: "blue" }}>{item.time}</Text>
				<Text>{item.project}</Text>
				<Text>{item.description}</Text>
			</View>
		);
	};

	renderEmptyDate = () => {
		return (
			<View style={styles.emptyDate}>
				<Text>This is empty date!</Text>
			</View>
		);
	};

	onDayPress = ({ month }) => {
		this.props.navigation.setParams({ month });
	};

	onDayChange = ({ month }) => {
		this.props.navigation.setParams({ month });
	};

	render() {
		return (
			<View style={{ flex: 1 }}>
				<AgendaView
					data={this.props.appointments}
					makeCalendarItems={this.makeCalendarItems}
					renderItem={this.renderItem}
					renderEmptyDate={this.renderEmptyDate}
					selected={this.props.selected}
					onDayPress={this.onDayPress}
					onDayChange={this.onDayChange}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	item: {
		backgroundColor: "white",
		flex: 1,
		borderRadius: 5,
		padding: 10,
		marginRight: 10,
		marginTop: 17
	},
	emptyDate: {
		height: 15,
		flex: 1,
		paddingTop: 30
	}
});

const mapStateToProps = ({ appointmentList, calendar }) => {
	console.log(calendar.month);
	return {
		appointments: appointmentList.appointments,
		month: calendar.month,
		selected: calendar.selected
	};
};

export default connect(mapStateToProps, { setActiveMonth })(CalendarScreen);
