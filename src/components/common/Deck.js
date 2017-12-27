import React, { Component } from "react";
import { Dimensions, View, StyleSheet } from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;

class Deck extends Component {
	static defaultProps = {
		keyProp: "id"
	};

	renderCards() {

		return this.props.data.map(item => {
			return (
				<View key={item[this.props.keyProp]} style={styles.cardStyle}>
					{this.props.renderCard(item)}
				</View>
			);
		});
	}

	render() {
		return <View style={{ flex: 1 }}>{this.renderCards()}</View>;
	}
}

const styles = StyleSheet.create({
	cardStyle: {
		width: SCREEN_WIDTH
	}
});

export { Deck };