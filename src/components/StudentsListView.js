import React, { Component } from "react";
import { connect } from "react-redux";
import { ListView, View, Text } from "react-native";
import { studentsFetch } from "../actions";
import { makeArray } from "../utils/helpers";
import styles from "../utils/styles";

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

	renderRow(student) {
		const { name } = student;
		return (
			<Text>{name}</Text>
		)
	}

	render() {
		return (
			<View style={styles.container}>
				<ListView
					enableEmptySections
					dataSource={this.dataSource}
					renderRow={this.renderRow}
				/>
			</View>
		);
	}
}

const mapStateToProps = state => {
	return {
		students: makeArray(state.students)
	};
};

export default connect(mapStateToProps, { studentsFetch })(StudentsListView);
