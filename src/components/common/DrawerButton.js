import React, { Component } from "react";
import { Text, View, Animated } from "react-native";
import styles from "../../utils/styles";
import { IconButton } from "../common";

class DrawerButton extends Component {
	state = { spinValue: new Animated.Value(0) };

	makeIcon() {
		const { navigation } = this.props;
		return (
			<IconButton
				ionicon="md-menu"
				size={30}
				color="white"
				onPress={() => {
					Animated.timing(this.state.spinValue, {
						toValue: 1,
						duration: 500
					}).start(() =>
						this.setState({ spinValue: new Animated.Value(0) })
					);

					if (navigation.state.index === 0) {
						navigation.navigate("DrawerOpen");
					} else {
						navigation.navigate("DrawerClose");
					}
				}}
			/>
		);
	}

	render() {
		// Second interpolate beginning and end values (in this case 0 and 1)
		const spin = this.state.spinValue.interpolate({
			inputRange: [0, 1],
			outputRange: ["0deg", "360deg"]
		});

		return (
			<Animated.View style={{ transform: [{ rotate: spin }] }}>
				{this.makeIcon()}
			</Animated.View>
		);
	}
}

export { DrawerButton };
