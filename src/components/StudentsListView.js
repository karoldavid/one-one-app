import React, { Component } from "react";
import { connect } from "react-redux";
import { StyleSheet, ListView, View, Text } from "react-native";
import { studentsFetch } from "../actions";
import { makeArray } from "../utils/helpers";
import { blue, white } from "../utils/colors";
import ListItem from "./ListItem";

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
		return (
			<View style={styles.container}>
				<ListView
					enableEmptySections
					dataSource={this.dataSource}
					renderRow={student => <ListItem student={student} navigation={this.props.navigation} />}
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

const mapStateToProps = state => {
	return {
		students: makeArray(state.students)
	};
};

export default connect(mapStateToProps, { studentsFetch })(StudentsListView);
