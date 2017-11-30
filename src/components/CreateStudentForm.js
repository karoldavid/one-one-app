import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, View, TextInput } from "react-native";
import styles from "../utils/styles";
import InputWithLabel from "./InputWithLabel";

class CreateStudentForm extends Component {
	state = {
		text: "student"
	};

	render() {
		return (
			<View style={styles.container}>
				<InputWithLabel label={"name"}>
					<TextInput
						style={styles.input}
						placeholder="Type here to translate!"
						onChangeText={text => this.setState({ text })}
					/>
				</InputWithLabel>
			</View>
		);
	}
}

const mapStateToProps = state => {
	const { name, email, program, image } = state.student;
	return {
		name,
		email,
		program,
		image
	};
};

export default connect(mapStateToProps)(CreateStudentForm);
