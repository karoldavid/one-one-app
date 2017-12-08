import React, { Component } from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { ActivityIndicator, ListView, View, Text } from "react-native";
import { studentsFetch } from "../actions";
import { makeArray } from "../utils/helpers";
import styles from "../utils/styles";
import ListItem from "./ListItem";
import { IconButton } from "./common";

class StudentsListView extends Component {
	componentWillMount() {
		this.props.studentsFetch();
		this.createDataSource(this.props);
	}

	componentWillReceiveProps(nextProps) {
		this.createDataSource(nextProps);
	}

	createDataSource({ students }) {
		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		});

		this.dataSource = ds.cloneWithRows(students);
	}

	render() {
		const { loading, navigation, students } = this.props;

		return (
			<View style={{ flex: 1 }}>
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
						<ActivityIndicator />
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
	studentList: { students, orderBy, sortDirection, loading }
}) => {
	return {
		students: students,
		orderBy,
		sortDirection,
		loading
	};
};

export default connect(mapStateToProps, { studentsFetch })(StudentsListView);
