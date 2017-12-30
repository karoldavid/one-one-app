import React, { Component } from "react";
import { connect } from "react-redux";
import { KeyboardAvoidingView, ScrollView, View, Picker } from "react-native";
import styles from "../utils/styles";
import { Button } from "./common";
import StudentForm from "./StudentForm";
import { createStudent, updateStudent } from "../actions";
import { resetNavigation } from "../utils/helpers";

class CreateStudentForm extends Component {
	selectProgram = () => {
		const programs = ["FEND", "FSND", "IPND"];
		const { program } = this.props.student;
		return (
			<Picker
				style={styles.picker}
				itemStyle={styles.pickerItem}
				selectedValue={program}
				onValueChange={value =>
					this.props.updateStudent({ prop: "program", value })
				}
			>
				{programs.map(program => {
					return (
						<Picker.Item
							key={program}
							label={program}
							value={program}
						/>
					);
				})}
			</Picker>
		);
	}

	onChange = (propName, value) => {
		this.props.updateStudent({
			prop: propName,
			value
		});
	}

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
			},
			{
				label: "PROGRAM",
				placeholder: "program",
				propName: "program",
				func: () => this.selectProgram()
			}
		];

		return (
			<View style={styles.container}>
				<KeyboardAvoidingView behavior="padding">
					<ScrollView>
						<StudentForm data={student} inputs={FORM_INPUTS} onChange={this.onChange} />
						<Button
							title={"Submit"}
							onPress={() =>
								this.props.createStudent(student, () =>
									resetNavigation(navigation, "DrawerView")
								)
							}
						/>
					</ScrollView>
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

export default connect(mapStateToProps, { createStudent, updateStudent })(CreateStudentForm);
