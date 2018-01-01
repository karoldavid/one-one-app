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
import { blueMagenta, paleRose, white } from "../utils/colors";
import { IconButton, ModalConfirm } from "./common";
import Communications from "react-native-communications";
import { IconBar } from "./common";

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
					navigation.navigate("DrawerView");
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
		const { deselectStudent, navigation, student } = this.props;
		navigation.setParams({
			deselectStudent
		});
		this.props.studentAppointmentsNumber(student.uid);
	}

	showModal = () => {
		this.setState({ modalVisible: true });
	};

	hideModal = () => {
		this.setState({ modalVisible: false });
	};

	removeStudent = () => {
		const { deleteStudent, navigation, student } = this.props;
		this.setState({ modalVisible: false });
		deleteStudent(student.uid, () => navigation.navigate("DrawerView"));
	};

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

		const ICONS = [
			{
				name: "list",
				type: "material-icons",
				onPress: () => {
					this.props.navigation.navigate("StudentAppointmentsView");
				}
			},
			{
				name: "add-to-list",
				type: "entypo",
				onPress: () => {
					this.props.navigation.navigate("CreateAppointmentView");
				}
			},
			{
				name: "email",
				type: "material-icons",
				onPress: () => {
					this.sendEmail();
				}
			},
			{
				name: "edit",
				type: "material-icons",
				onPress: () => {
					this.props.navigation.navigate("EditStudentView");
				}
			},
			{
				name: "delete",
				type: "material-icons",
				onPress: () => {
					this.showModal();
				}
			}
		];

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
							Appointments:{" "}
							{this.props.currentStudentAppointments}
						</Text>
					</View>
				</Animated.View>
				<View style={styles.iconBarHorizontal}>
					<IconBar icons={ICONS} />
				</View>
				<View
					style={{
						backgroundColor: paleRose
					}}
				>
					<ModalConfirm
						modalVisible={this.state.modalVisible}
						onConfirm={this.removeStudent}
						onDecline={this.hideModal}
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

export default connect(mapStateToProps, {
	studentAppointmentsNumber,
	deleteStudent,
	deselectStudent,
	selectStudent
})(StudentView);
