import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, View, TextInput, Button } from "react-native";
import styles from "../utils/styles";
import InputWithLabel from "./InputWithLabel";
import { updateStudent } from "../actions"

class CreateStudentForm extends Component {

	render() {
		return (
			<View style={styles.container}>
				<InputWithLabel label={"First Name"}>
					<TextInput
						style={styles.formInput}
						placeholder="first name"
						value={this.props.firstName}
						onChangeText={value => this.props.updateStudent({ prop: "firstName", value })}
					/>
				</InputWithLabel>
				<InputWithLabel label={"Last Name"}>
					<TextInput
						style={styles.formInput}
						value={this.props.lastName}
						placeholder="last name"
						onChangeText={value => this.props.updateStudent({ prop: "lastName", value })}
					/>
				</InputWithLabel>
				<InputWithLabel label={"Email"}>
					<TextInput
						style={styles.formInput}
						placeholder="email"
						value={this.props.email}
						onChangeText={value => this.props.updateStudent({ prop: "email", value })}
					/>
				</InputWithLabel>
				<InputWithLabel label={"Program"}>
					<TextInput
						style={styles.formInput}
						placeholder="program"
						value={this.props.program}
						onChangeText={value => this.props.updateStudent({ prop: "program", value })}
					/>
				</InputWithLabel>
				<Button title={"Submit"} onPress={() => alert("submit")} />
			</View>
		);
	}
}

const mapStateToProps = state => {
	const { firstName, lastName, email, program, image } = state.student;
	return {
		firstName,
		lastName,
		email,
		program,
		image
	};
};

export default connect(mapStateToProps, { updateStudent })(CreateStudentForm);
