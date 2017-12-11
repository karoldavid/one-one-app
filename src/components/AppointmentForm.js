import React, { Component } from "react";
import { connect } from "react-redux";
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	Dimensions,
	TimePickerAndroid
} from "react-native";
import { DatePickerDialog } from "react-native-datepicker-dialog";
import moment from "moment";
import { updateAppointment } from "../actions";
import { InputWithLabel } from "./common";
import styles from "../utils/styles";
import { Button } from "./common";

const DATE = new Date();

class AppointmentForm extends Component {
	async openTimePickerAndroud() {
		let { time } = this.props.appointment;
		try {
			const { action, hour, minute } = await TimePickerAndroid.open({
				hour: DATE.getHours(),
				minute: DATE.getMinutes(),
				is24Hour: true
			});
			if (action !== TimePickerAndroid.dismissedAction) {
				time = `${hour}:${minute}`;
				this.props.updateAppointment({ prop: "time", value: time });
			}
		} catch ({ code, message }) {
			console.warn("Cannot open time picker", message);
		}
	}

	openDatePickerDialog() {
		let { date } = this.props.appointment;

		if (!date || date == null) {
			date = new Date();
			this.props.updateAppointment({
				prop: "date",
				value: date.toLocaleDateString()
			});
		} else {
			date = new Date(date);
		}

		this.refs.DatePickerDialog.open({
			date
		});
	}

	makeDatePicker() {
		const { date } = this.props.appointment;

		return (
			<View>
				<Button
					title={date != null ? date : "Choose A Date"}
					onPress={() => this.openDatePickerDialog()}
				/>

				<DatePickerDialog
					ref="DatePickerDialog"
					onDatePicked={date =>
						this.props.updateAppointment({
							prop: "date",
							value: date.toLocaleDateString()
						})
					}
				/>
			</View>
		);
	}

	render() {
		const { time } = this.props.appointment;
		return (
			<View style={{ flex: 1, width: Dimensions.get("window").width }}>
				{this.makeDatePicker()}
				<Button
					title={time != null ? time : "Choose A Time"}
					onPress={() => this.openTimePickerAndroud()}
				/>
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
