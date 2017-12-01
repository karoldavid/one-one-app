import React, { Component } from "react";
import { connect } from "react-redux";
import {
	View,
	TextInput,
	Picker,
	KeyboardAvoidingView
} from "react-native";
import styles from "../utils/styles";
import InputWithLabel from "./InputWithLabel";
import Button from "./Button";
import { updateStudent, createStudent } from "../actions";
import { resetNavigation } from "../utils/helpers";

class CreateStudentForm extends Component {
	selectProgram() {
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

	render() {
		const {
			firstName,
			lastName,
			email,
			program,
			image
		} = this.props.student;

		const { navigation } = this.props;

		return (
			<View style={styles.container}>
				<KeyboardAvoidingView style={{ flex: 0.8 }}>
					<InputWithLabel label={"First Name"}>
						<TextInput
							style={styles.formInput}
							placeholder="first name"
							value={firstName}
							onChangeText={value =>
								this.props.updateStudent({
									prop: "firstName",
									value
								})
							}
						/>
					</InputWithLabel>
					<InputWithLabel label={"Last Name"}>
						<TextInput
							style={styles.formInput}
							value={lastName}
							placeholder="last name"
							onChangeText={value =>
								this.props.updateStudent({
									prop: "lastName",
									value
								})
							}
						/>
					</InputWithLabel>
					<InputWithLabel label={"Email"}>
						<TextInput
							style={styles.formInput}
							placeholder="email"
							value={email}
							onChangeText={value =>
								this.props.updateStudent({
									prop: "email",
									value
								})
							}
						/>
					</InputWithLabel>
					<InputWithLabel
						style={{ flexDirection: "row" }}
						label={"Program"}
					>
						{this.selectProgram()}
					</InputWithLabel>
					<InputWithLabel label={"Image"}>
						<TextInput
							style={styles.formInput}
							placeholder="image url"
							value={image}
							onChangeText={value =>
								this.props.updateStudent({
									prop: "image",
									value
								})
							}
						/>
					</InputWithLabel>
					<Button
						title={"Submit"}
						onPress={() =>
							this.props.createStudent(this.props.student, () => {
								resetNavigation(navigation, "StudentsListView");
							})
						}
					/>
				</KeyboardAvoidingView>
			</View>
		);
	}
}

const mapStateToProps = state => {
	const { student } = state;
	return {
		student
	};
};

export default connect(mapStateToProps, { updateStudent, createStudent })(
	CreateStudentForm
);
