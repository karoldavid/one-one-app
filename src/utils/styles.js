import { Dimensions, StyleSheet } from "react-native";
import { blueMagenta, red, white } from "./colors"

const container = {
	flex: 1,
	backgroundColor: white,
	alignItems: "center",
	justifyContent: "space-around"
};

const header = {
	fontWeight: "bold",
	color: blueMagenta,
	fontSize: 24
};

const input = {
	margin: 15,
	height: 40,
	borderColor: blueMagenta,
	borderWidth: 1,
	width: Dimensions.get("window").width * 0.8
};

const submitButton = {
	backgroundColor: blueMagenta,
	padding: 10,
	margin: 15,
	height: 40
};

const submitButtonText = {
	color: white,
	alignSelf: "center"
};

const loginError = {
	alignSelf: "center",
	color: red
};

const item = {
	padding: 10,
	fontSize: 18,
	height: 44
};

const text = {
	marginLeft: 12,
	fontSize: 16
};

const separator = {
	flex: 1,
	height: StyleSheet.hairlineWidth,
	backgroundColor: "#8E8E8E"
};

const formInput = {
	marginLeft: 15,
	marginRight: 15,
	height: 40,
	borderColor: blueMagenta,
	borderWidth: 1,
	width: Dimensions.get("window").width * 0.8
};

const styles = StyleSheet.create({
	container,
	header,
	input,
	submitButton,
	submitButtonText,
	loginError,
	item,
	text,
	separator,
	formInput
});

export default styles;
