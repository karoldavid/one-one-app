import React, { PureComponent } from "react";
import { ListItem } from "react-native-elements";

export default class Item extends PureComponent {
	render() {
		const { lastName, firstName, image, uid } = this.props.item;

		return (
			<ListItem
				roundAvatar
				keyExtractor={uid}
				title={lastName}
				subtitle={firstName}
				avatar={{
					uri: image || "http://via.placeholder.com/100x150"
				}}
				onPress={this.props.onPress}
			/>
		);
	}
}
