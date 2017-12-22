import React, { Component } from "react";
import { Dimensions, StyleSheet, View, ScrollView, Text } from "react-native";
import { Button } from "react-native-elements";

const SCREEN_WIDTH = Dimensions.get("window").width;

class Slides extends Component {
	renderSlides() {
		const { data } = this.props;

		return data.map((slide, index) => {
			return (
				<View
					key={index}
					style={[
						styles.slideStyle,
						{ backgroundColor: slide.color }
					]}
				>
					<Text style={styles.textStyle}>{slide.text}</Text>
					{slide.data.length > 0 && slide.makeChart(slide.data)}
				</View>
			);
		});
	}

	render() {
		const { data } = this.props;
		return (
			<ScrollView horizontal pagingEnabled style={styles.container}>
				{this.renderSlides()}
			</ScrollView>
		);
	}
}

export default Slides;

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	slideStyle: {
		justifyContent: "center",
		alignItems: "center",
		width: SCREEN_WIDTH
	},
	textStyle: {
		fontSize: 30,
		textAlign: "center",
		color: "white"
	},
	buttonStyle: {
		backgroundColor: "#0288D1",
		marginTop: 15
	}
});
