import React, { Component } from "react";
import { Text, View } from "react-native";
import AgendaView from "../components/calendar/AgendaView";

class CalendarScreen extends Component {
	static navigationOptions = ({ navigation }) => {
		return {
			title: "Calendar",
			visible: true
		};
	};
	render() {
		return (
			<View style={{ flex: 1 }}>
				<AgendaView />
			</View>
		);
	}
}

export default CalendarScreen;
