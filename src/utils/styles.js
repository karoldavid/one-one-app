import { Dimensions, StyleSheet } from "react-native";
import { black, blueMagenta, paleRose, red, white } from "./colors";

const container = {
	flex: 1,
	backgroundColor: paleRose,
	alignItems: "center",
	justifyContent: "space-around"
};

const header = {
	marginTop: 40,
	marginBottom: 40,
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

const iconButton = {
	paddingLeft: 20,
	paddingRight: 20
};

const iconBarHorizontal = {
	flexDirection: "row",
	marginTop: 20,
	marginBottom: 20
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
	color: black
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

const drawerContainer = {
	flex: 1,
	backgroundColor: blueMagenta,
	justifyContent: "space-around"
};

const drawerItem = {
	flexDirection: "row",
	alignItems: "center"
};

const drawerItemText = {
	fontSize: 18,
	fontWeight: "bold",
	color: white
};

const drawerItemIcon = {
	paddingRight: 10
};

const content = {
	fontSize: 20,
	textAlign: "center",
	margin: 10
};

const datePickerBox = {
	marginTop: 9,
	backgroundColor: blueMagenta,
	padding: 10,
	borderTopLeftRadius: 4,
	borderTopRightRadius: 4,
	borderBottomLeftRadius: 4,
	borderBottomRightRadius: 4,
	height: 38,
	justifyContent: "center"
};

const datePickerText = {
	fontSize: 18,
	borderWidth: 0,
	color: white,
	textAlign: "center"
};

const styles = StyleSheet.create({
	container,
	header,
	input,
	submitButton,
	submitButtonText,
	iconButton,
	iconBarHorizontal,
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
	modalText,
	drawerContainer,
	drawerItem,
	drawerItemText,
	drawerItemIcon,
	content,
	datePickerBox,
	datePickerText
});

export default styles;
