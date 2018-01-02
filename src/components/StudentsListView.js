import React, { Component } from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { ActivityIndicator, FlatList, View, Text } from "react-native";
import { List, SearchBar } from "react-native-elements";
import { filterStudents, selectStudent } from "../actions";
import styles from "../utils/styles";
import { blueMagenta, lightPurp, white } from "../utils/colors";
import { IconButton } from "./common";
import Item from "./Item";

const ITEM_HEIGHT = 100;

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
	}

	componentWillReceiveProps(nextProps) {
		//console.log(nextProps.students.length);
	}

	toggleSearchBar = () => {
		this.setState({
			visible: !this.state.visible
		});
	};

	filter(students, filter) {
		return students.filter(student => {
			const name = `${student.firstName} ${
				student.lastName
			}`.toLowerCase();
			return name.indexOf(filter.toLowerCase()) != -1;
		});
	}

	onChangeText = text => {
		this.props.filterStudents(text);
		this.setState({
			hasText: text.length > 0
		});
	};

	showStudent(student) {
		g;
		this.props.selectStudent(student);
		this.props.navigation.navigate("StudentView");
	}

	renderItem = ({ item }) => {
		return <Item item={item} onPress={() => this.showStudent(item)} />;
	};

	getItemLayout = (data, index) => ({
		length: ITEM_HEIGHT,
		offset: ITEM_HEIGHT * index,
		index
	});

	renderSeparator()  {
		return (
			<View
				style={{
					height: 1,
					width: "86%",
					backgroundColor: "#CED0CE",
					marginLeft: "14%"
				}}
			/>
		);
	};

	renderHeader = () => {
		if (!this.state.visible) return null;
		return (
			<SearchBar
				value={this.props.filter}
				containerStyle={{ backgroundColor: blueMagenta }}
				lightTheme
				onChangeText={this.onChangeText}
				placeholder="Type Here..."
				clearIcon={this.state.hasText}
			/>
		);
	};

	renderFooter = () => {
		return (
			<View
				style={{
					paddingVertical: 20,
					borderTopWidth: 1,
					borderTopColor: "#CED0CE"
				}}
			>
				<ActivityIndicator animating size="large" color={blueMagenta} />
			</View>
		);
	};

	render() {
		const { loading, navigation, students, filter } = this.props;

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
						<ActivityIndicator size="large" color={blueMagenta} />
					</View>
				) : (
					<View style={{ flex: 1 }}>
						<List containerStyle={{ marginTop: 0 }}>
							<FlatList
								data={this.filter(students, filter)}
								initialNumToRender={10}
								getItemLayout={this.getItemLayout}
								renderItem={this.renderItem}
								keyExtractor={item => item.uid}
								ItemSeparatorComponent={this.renderSeparator}
								ListHeaderComponent={this.renderHeader}
								//ListFooterComponent={this.renderFooter}
							/>
						</List>
						{students.length === 0 && <Text>no data</Text>}
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
	filterStudents,
	selectStudent
})(StudentsListView);
