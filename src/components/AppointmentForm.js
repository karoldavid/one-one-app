import React, { Component } from "react";
import { connect } from "react-redux";
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	Dimensions
} from "react-native";
import { DatePickerDialog } from "react-native-datepicker-dialog";
import moment from "moment";
import { updateAppointment } from "../actions";
import { InputWithLabel } from "./common";
import styles from "../utils/styles";
import { Button } from "./common";

class AppointmentForm extends Component {
	openDatePickerDialog() {
		let { date } = this.props.appointment;

		if (!date || date == null) {
			date = new Date();
			this.props.updateAppointment({
				prop: "date",
				value: date.toLocaleDateString()
			});
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
		return <View style={{ flex: 1, width: Dimensions.get("window").width }}>{this.makeDatePicker()}</View>;
	}
}

const mapStateToProps = ({ appointment }) => {
	return {
		appointment
	};
};

export default connect(mapStateToProps, { updateAppointment })(AppointmentForm);
