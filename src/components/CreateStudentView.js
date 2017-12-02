import React, { Component } from "react";
import { connect } from "react-redux";
import { KeyboardAvoidingView, View } from "react-native";
import styles from "../utils/styles";
import Button from "./Button";
import StudentForm from "./StudentForm";
import { createStudent } from "../actions";
import { resetNavigation } from "../utils/helpers";

class CreateStudentForm extends Component {
	render() {
		const { navigation, student } = this.props;

		return (
			<View style={styles.container}>
				<KeyboardAvoidingView style={{ flex: 0.8 }}>
					<StudentForm />
					<Button
						title={"Submit"}
						onPress={() =>
							this.props.createStudent(student, () =>
								resetNavigation(navigation, "StudentsListView")
							)
						}
					/>
				</KeyboardAvoidingView>
			</View>
		);
	}
}

const mapStateToProps = ({ student }) => {
	return {
		student
	};
};

export default connect(mapStateToProps, { createStudent })(CreateStudentForm);
