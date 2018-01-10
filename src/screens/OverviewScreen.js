import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";
import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	ActivityIndicator
} from "react-native";
//import styles from "../utils/styles";
import { Card, Button } from "react-native-elements";
import { blueMagenta } from "../utils/colors";
import { Deck } from "../components/common";

const TODAY = "2017-11-27";

class OverviewScreen extends Component {
	filterAppointments(day) {
		return this.props.appointments
			.filter(appointment => {
				return appointment.timeDateUtc.indexOf(day) !== -1;
			})
			.sort(function(a, b) {
				return Date.parse(a.timeDateUtc) - Date.parse(b.timeDateUtc);
			});
	}

	renderCard(item) {
		const { timeDateUtc, project } = item;
		return (
			<Card title={project}>
				<Text style={styles.text}>
					{moment(timeDateUtc).format("LLLL")}
				</Text>
				<Button
					icon={{ name: "code" }}
					backgroundColor="#03A9F4"
					title="Show More"
					onPress={() => console.log("pressed")}
				/>
			</Card>
		);
	}

	render() {
		const today = this.filterAppointments(TODAY);

		return (
			<View style={{ flex: 1 }}>
				{this.props.loading ? (
					<View
						style={{
							flex: 1,
							alignItems: "center",
							justifyContent: "center"
						}}
					>
						<ActivityIndicator size="large" color={blueMagenta} />
					</View>
				) : (
					<ScrollView style={styles.container}>
						<Text style={styles.text}>All Appointments Today</Text>

						<Deck
							data={today}
							renderCard={this.renderCard}
							keyProp="uid"
						/>
					</ScrollView>
				)}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		marginTop: 20,
		flex: 1,
		backgroundColor: "#fff"
	},
	text: {
		textAlign: "center"
	}
});

const mapStateToProps = ({ appointmentList: { appointments, loading } }) => {
	return {
		appointments,
		loading
	};
};

export default connect(mapStateToProps)(OverviewScreen);
