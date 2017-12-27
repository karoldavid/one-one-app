import React, { Component } from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { ActivityIndicator, ListView, View, Text } from "react-native";
import { studentsFetch, appointmentsFetch, filterStudents } from "../actions";
import { makeArray } from "../utils/helpers";
import styles from "../utils/styles";
import { lightPurp } from "../utils/colors";
import ListItem from "./ListItem";
import { IconButton } from "./common";
import { SearchBar } from "react-native-elements";

class StudentsListView extends Component {
	static navigationOptions = ({ navigation }) => {
		return {
			headerRight: (
				<IconButton
					onPress={() => navigation.state.params.toggleSearchBar()}
					ionicon="md-search"
					size={30}
					color="white"
				/>
			)
		};
	};

	state = {
		hasText: false,
		visible: false
	};

	componentWillMount() {
		const { toggleSearchBar } = this;
		this.props.navigation.setParams({
			toggleSearchBar
		});
		this.props.studentsFetch();
		this.props.appointmentsFetch();
		this.createDataSource(this.props);
	}

	componentWillReceiveProps(nextProps) {
		this.createDataSource(nextProps);
	}

	toggleSearchBar = () => {
		this.setState({
			visible: !this.state.visible
		});
	};

	createDataSource({ students, filter }) {
		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		});

		if (students.length > 0) {
			students = students.filter(student => {
				const name = `${student.firstName} ${
					student.lastName
				}`.toLowerCase();
				return name.indexOf(filter.toLowerCase()) != -1;
			});
		}

		this.dataSource = ds.cloneWithRows(students);
	}

	onChangeText = text => {
		this.props.filterStudents(text);
		this.setState({
			hasText: text.length > 0
		});
	};

	render() {
		const { loading, navigation, students } = this.props;

		return (
			<View style={{ flex: 1 }}>
				{this.state.visible && (
					<SearchBar
						value={this.props.filter}
						containerStyle={{ backgroundColor: lightPurp }}
						lightTheme
						onChangeText={this.onChangeText}
						placeholder="Type Here..."
						clearIcon={this.state.hasText}
					/>
				)}

				{loading ? (
					<View
						style={[
							styles.container,
							{
								flexDirection: "row",
								padding: 12
							}
						]}
					>
						<ActivityIndicator size="large" color="#0000ff" />
					</View>
				) : (
					<View
						style={[
							styles.container,
							{
								flexDirection: "row",
								alignItems: "flex-start",
								padding: 12
							}
						]}
					>
						{students.length > 0 ? (
							<ListView
								enableEmptySections
								dataSource={this.dataSource}
								renderRow={student => (
									<ListItem
										student={student}
										navigation={this.props.navigation}
									/>
								)}
							/>
						) : (
							<Text>no data</Text>
						)}
						<View style={styles.overlay}>
							<IconButton
								ionicon="md-add-circle"
								size={50}
								color="blue"
								onPress={() =>
									navigation.navigate("CreateStudentView")
								}
							/>
						</View>
					</View>
				)}
			</View>
		);
	}
}

const mapStateToProps = ({
	studentList: { students, orderBy, sortDirection, loading, filter }
}) => {
	return {
		students,
		orderBy,
		sortDirection,
		loading,
		filter
	};
};

export default connect(mapStateToProps, {
	studentsFetch,
	appointmentsFetch,
	filterStudents
})(StudentsListView);
