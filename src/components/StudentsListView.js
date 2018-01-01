import React, { Component } from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { ActivityIndicator, FlatList, View, Text } from "react-native";
import { List, ListItem, SearchBar } from "react-native-elements";
import {
	studentsFetch,
	appointmentsFetch,
	filterStudents,
	selectStudent
} from "../actions";
import { makeArray } from "../utils/helpers";
import styles from "../utils/styles";
import { blueMagenta, lightPurp, white } from "../utils/colors";
import { IconButton } from "./common";

class StudentsListView extends Component {
	static navigationOptions = ({ navigation }) => {
		return {
			headerRight: (
				<IconButton
					onPress={() => navigation.state.params.toggleSearchBar()}
					ionicon="md-search"
					size={30}
					color={white}
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
	}

	componentWillReceiveProps(nextProps) {
		//this.createDataSource(nextProps);
	}

	toggleSearchBar = () => {
		this.setState({
			visible: !this.state.visible
		});
	};

	filter({ students, filter }) {
		if (students.length > 0 && filter) {
			students = students.filter(student => {
				const name = `${student.firstName} ${
					student.lastName
				}`.toLowerCase();
				return name.indexOf(filter.toLowerCase()) != -1;
			});
			a;
		}
	}

	onChangeText = text => {
		this.props.filterStudents(text);
		this.setState({
			hasText: text.length > 0
		});
	};

	showStudent(student) {
		this.props.selectStudent(student);
		this.props.navigation.navigate("StudentView");
	}

	renderItem = ({ index, item }) => {
		const { lastName, firstName, image } = item;
		return (
			<ListItem
				roundAvatar
				keyExtractor={item => item.uid}
				title={lastName}
				subtitle={firstName}
				avatar={{
					uri: image || "http://via.placeholder.com/100x150"
				}}
				onPress={() => this.showStudent(item)}
			/>
		);
	};

	render() {
		const { loading, navigation, students } = this.props;

		return (
			<View style={{ flex: 1 }}>
				{this.state.visible && (
					<SearchBar
						value={this.props.filter}
						containerStyle={{ backgroundColor: blueMagenta }}
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
						<ActivityIndicator size="large" color={blueMagenta} />
					</View>
				) : (
					<View style={{ flex: 1 }}>
						{students.length > 0 ? (
							<List containerStyle={{ marginTop: 0 }}>
								<FlatList
									data={students}
									renderItem={this.renderItem}
									keyExtractor={item => item.uid}
								/>
							</List>
						) : (
							<Text>no data</Text>
						)}
						<View style={styles.overlay}>
							<IconButton
								ionicon="md-add-circle"
								size={50}
								color={blueMagenta}
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
	filterStudents,
	selectStudent
})(StudentsListView);
