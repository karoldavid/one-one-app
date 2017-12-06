import React, { Component } from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { ListView, View } from "react-native";
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
		const { orderBy, sortDirection } = this.props;
		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		});

		this.dataSource = ds.cloneWithRows(
			_.orderBy(
				students,
				[student => student[orderBy].toLowerCase()],
				[sortDirection]
			)
		);
	}

	render() {
		const { navigation } = this.props;

		return (
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
				<View style={styles.overlay}>
					<IconButton
						ionicon="md-add-circle"
						size={50}
						color="blue"
						onPress={() => navigation.navigate("CreateStudentView")}
					/>
				</View>
			</View>
		);
	}
}

const mapStateToProps = ({
	studentList: { students, orderBy, sortDirection }
}) => {
	return {
		students: makeArray(students),
		orderBy,
		sortDirection
	};
};

export default connect(mapStateToProps, { studentsFetch })(StudentsListView);
