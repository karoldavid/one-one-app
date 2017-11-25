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

const styles = StyleSheet.create({
	container,
	header,
	input,
	submitButton,
	submitButtonText
});

export default styles;