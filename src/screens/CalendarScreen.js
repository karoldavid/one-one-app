import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";
import { Text, View } from "react-native";
import AgendaView from "../components/calendar/AgendaView";

class CalendarScreen extends Component {
	static navigationOptions = ({ navigation }) => {
		return {
			title: "Calendar",
			visible: true
		};
	};

	makeCalendarItems = data => {
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

	render() {
		return (
			<View style={{ flex: 1 }}>
				<AgendaView
					data={this.props.appointments}
					makeCalendarItems={this.makeCalendarItems}
					renderItem={this.renderItem}
				/>
			</View>
		);
	}
}

const mapStateToProps = ({ appointmentList }) => {
	return {
		appointments: appointmentList.appointments
	};
};

export default connect(mapStateToProps)(CalendarScreen);
