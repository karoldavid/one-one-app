import React, { Component } from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { StyleSheet, ListView, View, Text, Button } from "react-native";
import { studentsFetch } from "../actions";
import { makeArray } from "../utils/helpers";
import { blue, white } from "../utils/colors";
import ListItem from "./ListItem";
import IconButton from "./IconButton"

class StudentsListView extends Component {
	static navigationOptions = ({ navigation }) => ({
		headerRight: (
			<View style={{marginRight: 16}}>
				<IconButton
					ionicon="md-add-circle"
					size={30}
					color="white"
					onPress={() => navigation.navigate("CreateStudentView")}
				/>
			</View>
		)
	});

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

		this.dataSource = ds.cloneWithRows(_.orderBy(students, [student => student[orderBy].toLowerCase()], [sortDirection]));
	}

	render() {
		return (
			<View style={styles.container}>
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
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 12,
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: white
	}
});

const mapStateToProps = ({ studentList: {students, orderBy, sortDirection} }) => {
	return {
		students: makeArray(students),
		orderBy,
		sortDirection
	};
};

export default connect(mapStateToProps, { studentsFetch })(StudentsListView);
