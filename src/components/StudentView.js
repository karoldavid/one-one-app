import React, { Component } from "react";
import { connect } from "react-redux";
import {
	Dimensions,
	Image,
	Text,
	View,
	Animated,
	PanResponder
} from "react-native";
import {
	deleteStudent,
	deselectStudent,
	selectStudent,
	studentAppointmentsNumber
} from "../actions";
import styles from "../utils/styles";
import { Button, IconButton, ModalConfirm } from "./common";
import Communications from "react-native-communications";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SWIPE_THRESHOLD = 0.25 * SCREEN_WIDTH;
const SWIPE_OUT_DURATION = 250;

class StudentView extends Component {
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

	constructor(props) {
		super(props);

		const position = new Animated.ValueXY();

		const panResponder = PanResponder.create({
			onStartShouldSetPanResponder: () => true,
			onPanResponderMove: (event, gesture) => {
				position.setValue({ x: gesture.dx });
			},
			onPanResponderRelease: (event, gesture) => {
				if (gesture.dx > SWIPE_THRESHOLD) {
					this.forceSwipe("right");
				} else if (gesture.dx < -SWIPE_THRESHOLD)
					this.forceSwipe("left");
				else {
					this.resetPosition();
				}
			}
		});

		this.state = {
			modalVisible: false,
			panResponder,
			position
		};
	}

	componentWillMount() {
		const { deselectStudent, navigation } = this.props;
		navigation.setParams({
			deselectStudent
		});
		this.props.numberOfAppointments(this.props.student.uid)
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
		deleteStudent(student.uid, () => navigation.navigate("DrawerView"));
	}

	sendEmail() {
		const { email, firstName, lastName } = this.props.student;
		const { userEmail } = this.props.userEmail;
		const subject = "1:1 Appointment";
		const body = `Dear ${firstName} ${lastName},`;
		Communications.email([userEmail, email], null, null, subject, body);
	}

	forceSwipe(direction) {
		const x = direction === "right" ? SCREEN_WIDTH : -SCREEN_WIDTH;
		Animated.timing(this.state.position, {
			toValue: { x, y: 0 },
			duration: SWIPE_OUT_DURATION
		}).start(() => this.onSwipeComplete(direction));
	}

	onSwipeComplete(direction) {
		const { selectStudent, students, student } = this.props;
		let index = students.findIndex(stud => stud.uid === student.uid);

		if (direction === "right" && index + 1 <= students.length - 1) {
			index++;
		} else if (direction === "left" && index - 1 >= 0) {
			index--;
		}

		selectStudent(students[index]);

		this.state.position.setValue({ x: 0, y: 0 });
	}

	resetPosition() {
		Animated.spring(this.state.position, {
			toValue: { x: 0, y: 0 }
		}).start();
	}

	getCardStyle() {
		return {
			...this.state.position.getLayout()
		};
	}

	getNumberOfAppointments() {
		const { appointments } = this.props;
		const { uid } = this.props.student;

		const number = appointments.reduce(function(accumulator, appointment) {
			return appointment.studentUid === uid
				? accumulator + 1
				: accumulator;
		}, 0);

		return number;
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
				<Animated.View
					style={[this.getCardStyle(), { flexDirection: "row" }]}
					{...this.state.panResponder.panHandlers}
				>
					<Image
						source={{
							uri: image || "http://via.placeholder.com/100x150"
						}}
						style={styles.photo}
					/>
					<View style={{ flexDirection: "column" }}>
						<Text style={styles.viewText}>
							Name: {`${firstName} ${lastName}`}
						</Text>
						<Text style={styles.viewText}>Email: {email}</Text>
						<Text style={styles.viewText}>
							Program: {program || "-"}
						</Text>
						<Text style={styles.viewText}>
							Appointments: { this.props.currentStudentAppointments }
						</Text>
					</View>
				</Animated.View>
				<View
					style={{
						alignSelf: "center",
						width: Dimensions.get("window").width
					}}
				>
					<Button
						title={"New Appointment"}
						onPress={() =>
							this.props.navigation.navigate(
								"CreateAppointmentView"
							)
						}
					/>
					<Button
						title={"Send Email"}
						onPress={() => this.sendEmail()}
					/>
					<Button
						title={"Edit"}
						onPress={() =>
							this.props.navigation.navigate("EditStudentView")
						}
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

const mapStateToProps = ({ student, auth, studentList, appointmentList }) => {
	return {
		student,
		userEmail: auth.user.email,
		students: studentList.students,
		currentStudentAppointments: appointmentList.currentStudentAppointments
	};
};

const mapDispatchToProps = dispatch => {
	return {
		deleteStudent,
		deselectStudent,
		selectStudent,
		numberOfAppointments: uid => dispatch(studentAppointmentsNumber(uid))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentView);
