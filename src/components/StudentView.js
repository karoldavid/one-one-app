import React, { Component } from "react";
import { connect } from "react-redux";
import { Dimensions, Image, Text, View } from "react-native";
import { deleteStudent, deselectStudent } from "../actions";
import styles from "../utils/styles";
import Button from "./Button";
import IconButton from "./IconButton";
import ModalConfirm from "./ModalConfirm";

class StudentView extends Component {
	state = {
		modalVisible: false
	};

	static navigationOptions = ({ navigation }) => ({
		headerLeft: (
			<IconButton
				ionicon="md-arrow-round-back"
				size={30}
				color="white"
				onPress={() => {
					navigation.goBack();
					navigation.state.params.deselectStudent();
				}}
			/>
		)
	});

	componentWillMount() {
		const { deselectStudent, navigation } = this.props;
		navigation.setParams({
			deselectStudent
		});
	}

	showModal() {
		this.setState({ modalVisible: true });
	}

	hideModal() {
		this.setState({ modalVisible: false });
	}

	deleteStudent() {
		const { deleteStudent, navigation, student } = this.props;
		this.setState({ modalVisible: false });
		deleteStudent(student.uid, () => navigation.navigate("StudentsListView"));
	}

	render() {
		const {
			firstName,
			lastName,
			email,
			program,
			image,
			uid
		} = this.props.student;
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
					<Button title={"Delete"} onPress={() => this.showModal()} />
					<ModalConfirm
						modalVisible={this.state.modalVisible}
						onConfirm={this.deleteStudent.bind(this)}
						onDecline={this.hideModal.bind(this)}
					>
						Do you really want to delete this student?
					</ModalConfirm>
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

export default connect(mapStateToProps, { deleteStudent, deselectStudent })(
	StudentView
);
