import React, { Component } from "react";
import { Dimensions, View } from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;

class Deck extends Component {
	renderCards() {
		return this.props.data.map(item => {
			return (
				<View key={item.uid} style={styles.cardStyle}>
					{this.props.renderCard(item)}
				</View>
			);
		});
	}

	render() {
		return <View style={{ flex: 1 }}>{this.renderCards()}</View>;
	}
}

const styles = {
	cardStyle: {
		width: SCREEN_WIDTH
	}
};

export { Deck };
