import React, { Component } from "react";
import { connect } from "react-redux";
import { FlatList, View, Text } from "react-native";
import { studentsFetch } from "../actions";
import { makeArray } from "../utils/helpers";
import styles from "../utils/styles";

class StudentsListView extends Component {
	componentWillMount() {
		this.props.studentsFetch();
	}
	render() {
		const { students } = this.props;

		return (
			<View style={styles.container}>
				<FlatList
					data={students}
					renderItem={({ item }) => (
						<Text style={styles.item}>{item.name}</Text>
					)}
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
