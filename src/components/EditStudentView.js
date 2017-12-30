import React, { Component } from "react";
import { connect } from "react-redux";
import { KeyboardAvoidingView, View } from "react-native";
import styles from "../utils/styles";
import { Button } from "./common";
import { saveStudent, updateStudent } from "../actions";
import { resetNavigation } from "../utils/helpers";
import StudentForm from "./StudentForm";

class EditStudentView extends Component {
	onChange = (propName, value) => {
		this.props.updateStudent({
			prop: propName,
			value
		});
	};

	render() {
		const { navigation, student } = this.props;

		const FORM_INPUTS = [
			{
				label: "FIRST NAME",
				placeholder: "first name",
				propName: "firstName"
			},
			{
				label: "LAST NAME",
				placeholder: "last name",
				propName: "lastName"
			},
			{
				label: "EMAIL",
				placeholder: "email",
				propName: "email"
			},
			{
				label: "GITHUB ACCOUNT",
				placeholder: "github account url",
				propName: "github"
			},
			{
				label: "SLACK HANDLE",
				placeholder: "slack handle",
				propName: "slack"
			},
			{
				label: "IMAGE",
				placeholder: "image url",
				propName: "image"
			}
		];

		return (
			<View style={styles.container}>
				<KeyboardAvoidingView behavior="padding">
					<StudentForm
						data={this.props.student}
						inputs={FORM_INPUTS}
						onChange={this.onChange}
					/>
					<Button
						title={"Update"}
						onPress={() =>
							this.props.saveStudent(student, () =>
								resetNavigation(navigation, "DrawerView")
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

export default connect(mapStateToProps, { saveStudent, updateStudent })(
	EditStudentView
);
