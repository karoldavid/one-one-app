import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, View, TextInput, Button } from "react-native";
import styles from "../utils/styles";
import InputWithLabel from "./InputWithLabel";

class CreateStudentForm extends Component {
	state = {
		first: "",
		last: "",
		email: "",
		program: ""
	};

	render() {
		return (
			<View style={styles.container}>
				<InputWithLabel label={"First Name"}>
					<TextInput
						style={styles.formInput}
						placeholder="first name"
						onChangeText={first => this.setState({ first })}
					/>
				</InputWithLabel>
				<InputWithLabel label={"Last Name"}>
					<TextInput
						style={styles.formInput}
						placeholder="last name"
						onChangeText={last => this.setState({ last })}
					/>
				</InputWithLabel>
				<InputWithLabel label={"Email"}>
					<TextInput
						style={styles.formInput}
						placeholder="email"
						onChangeText={email => this.setState({ email })}
					/>
				</InputWithLabel>
				<InputWithLabel label={"Program"}>
					<TextInput
						style={styles.formInput}
						placeholder="program"
						onChangeText={program => this.setState({ program })}
					/>
				</InputWithLabel>
				<Button title={"Submit"} onPress={() => alert("submit")} />
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
