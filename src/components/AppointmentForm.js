import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text, TextInput, DatePickerAndroid } from "react-native";
import { updateAppointment } from "../actions";
import styles from "../utils/styles";
import { InputWithLabel } from "./common";

class AppointmentForm extends Component {
	componentDidMount() {
		this.showAndroidDatePicker();
	}

	setDate(value) {
		this.props.updateAppointment({
			prop: "date",
			value: value.toLocaleDateString()
		});
	}

	showAndroidDatePicker = async () => {
		try {
			const { action, year, month, day } = await DatePickerAndroid.open({
				date: new Date()
			});
			if (action !== DatePickerAndroid.dismissedAction) {
				var date = new Date(year, month, day);

				this.setDate(date);
			}
		} catch ({ code, message }) {
			console.warn("Cannot open date picker", message);
		}
	};

	render() {
		const { date } = this.props.appointment;

		return (
			<View>
				<Text>Date: {date}</Text>
			</View>
		);
	}
}

const mapStateToProps = ({ appointment }) => {
	return {
		appointment
	};
};

export default connect(mapStateToProps, { updateAppointment })(AppointmentForm);
