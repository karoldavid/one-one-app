import { Dimensions, StyleSheet } from "react-native";

const container = {
	flex: 1,
	backgroundColor: "#fff",
	alignItems: "center",
	justifyContent: "space-around"
};

const header = {
	fontWeight: "bold",
	color: "#7a42f4",
	fontSize: 24
};

const input = {
	margin: 15,
	height: 40,
	borderColor: "#7a42f4",
	borderWidth: 1,
	width: Dimensions.get("window").width * 0.8
};

const submitButton = {
	backgroundColor: "#7a42f4",
	padding: 10,
	margin: 15,
	height: 40
};

const submitButtonText = {
	color: "white",
	alignSelf: "center"
};

const loginError = {
	alignSelf: "center",
	color: "red"
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

const styles = StyleSheet.create({
	container,
	header,
	input,
	submitButton,
	submitButtonText,
	loginError,
	item,
	text,
	separator
});

export default styles;
