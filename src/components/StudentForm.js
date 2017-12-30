import React, { Component } from "react";
import { View } from "react-native";
import { FormLabel, FormInput } from "react-native-elements";
import { darkOrangishGray, lightSlateBlue, suvaGray } from "../utils/colors";

class StudentForm extends Component {
	renderFormInput = (
		{ label, placeholder, propName, func = null },
		index
	) => {
		const value = this.props.data[propName];
		return (
			<View key={index}>
				<FormLabel
					labelStyle={{
						color: darkOrangishGray
					}}
				>
					{label}
				</FormLabel>
				{func ? (
					<View>{func()}</View>
				) : (
					<FormInput
						value={value}
						placeholder={placeholder}
						underlineColorAndroid={suvaGray}
						placeholderTextColor={lightSlateBlue}
						onChangeText={value =>
							this.props.onChange(propName, value)
						}
					/>
				)}
			</View>
		);
	};

	render() {
		return (
			<View>
				{this.props.inputs.map((data, index) =>
					this.renderFormInput(data, index)
				)}
			</View>
		);
	}
}

export default StudentForm;
