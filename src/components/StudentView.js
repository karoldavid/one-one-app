import React, { Component } from "react";
import { connect } from "react-redux";
import { Dimensions, Image, Text, View } from "react-native";
import styles from "../utils/styles";
import Button from "./Button";
import { deleteStudent } from "../actions";

class StudentView extends Component {
	render() {
		const {
			firstName,
			lastName,
			email,
			program,
			image,
			uid
		} = this.props.student;
		const { deleteStudent, navigation } = this.props;
		return (
			<View
				style={[
					styles.container,
					{
						padding: 12,
						alignItems: "flex-start",
						justifyContent: "flex-start"
					}
				]}
			>
				<View style={{ flexDirection: "row" }}>
					<Image source={{ uri: image }} style={styles.photo} />
					<View style={{ flexDirection: "column" }}>
						<Text style={styles.viewText}>{`${firstName} ${
							lastName
						}`}</Text>
						<Text style={styles.viewText}>{email}</Text>
						<Text style={styles.viewText}>{program}</Text>
					</View>
				</View>
				<View
					style={{
						alignSelf: "center",
						width: Dimensions.get("window").width
					}}
				>
					<Button
						title={"Edit"}
						onPress={() => {
							this.props.navigation.navigate("EditStudentView");
						}}
					/>
					<Button
						title={"Delete"}
						onPress={() =>
							deleteStudent(uid, () =>
								navigation.navigate("StudentsListView")
							)
						}
					/>
				</View>
			</View>
		);
	}
}

const mapStateToProps = ({ student }) => {
	return {
		student
	};
};

export default connect(mapStateToProps, { deleteStudent })(StudentView);
