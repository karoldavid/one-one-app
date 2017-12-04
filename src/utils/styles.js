import { Dimensions, StyleSheet } from "react-native";
import { blueMagenta, red, white } from "./colors";

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

const arrowStyles = {
	paddingLeft: 20,
	paddingRight: 20
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

const picker = {
	width: Dimensions.get("window").width * 0.5,
	backgroundColor: blueMagenta,
	color: white
};

const pickerItem = {
	fontSize: 15,
	height: 75,
	textAlign: "center",
	fontWeight: "bold"
};

const viewText = {
	marginLeft: 12,
	paddingBottom: 10,
	fontSize: 16,
	color: blueMagenta
};

const photo = {
	height: 150,
	width: 100
};

const overlay = {
	position: "absolute",
	bottom: 0,
	right: 0
};

const modal = {
	flex: 1,
	justifyContent: "center",
	backgroundColor: white,
	padding: 15,
	width: Dimensions.get("window").width
};

const modalText = {
	textAlign: "center",
	fontSize: 18,
	lineHeight: 40,
	paddingBottom: 20,
	color: blueMagenta
};

const styles = StyleSheet.create({
	container,
	header,
	input,
	submitButton,
	submitButtonText,
	arrowStyles,
	loginError,
	item,
	text,
	separator,
	formInput,
	picker,
	pickerItem,
	viewText,
	photo,
	overlay,
	modal,
	modalText
});

export default styles;