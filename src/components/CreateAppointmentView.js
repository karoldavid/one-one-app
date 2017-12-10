import React, { Component } from "react";
import { connect } from "react-redux";
import { KeyboardAvoidingView, View } from "react-native";
import styles from "../utils/styles";
import { Button } from "./common";
import AppointmentForm from "./AppointmentForm";
import { createAppointment } from "../actions";
import { resetNavigation } from "../utils/helpers";

class CreateAppointmentForm extends Component {
	render() {
		const { navigation, appointment } = this.props;
		return (
			<View style={styles.container}>
				<KeyboardAvoidingView style={{ flex: 0.8 }}>
					<AppointmentForm />
					<Button
						title={"Submit"}
						onPress={() => {
							this.props.createAppointment(appointment, () =>
								resetNavigation(navigation, "DrawerView")
							)}
						}
					/>
				</KeyboardAvoidingView>
			</View>
		);
	}
}

const mapStateToProps = ({ appointment, student }) => {
	return {
		appointment: { ...appointment, studentUID: student.uid }
	};
};

export default connect(mapStateToProps, { createAppointment })(
	CreateAppointmentForm
);
