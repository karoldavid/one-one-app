import uuidv1 from "uuid";
import { AsyncStorage } from "react-native";

const ONEONE_STORAGE_KEY = "ONEONE:user";

export function getUser() {
	return AsyncStorage.getItem(ONEONE_STORAGE_KEY)
		.then(results => {
			const data = JSON.parse(results);
			return data;
		})
		.catch(() => {
			console.log("error");
		});
}

export function saveUser({ email, password }) {
	return AsyncStorage.mergeItem(
		ONEONE_STORAGE_KEY,
		JSON.stringify({
			email: email,
			password: password,
			timestamp: Date.now()
		})
	).catch(() => {
		console.log("error");
	});
}

export function removeUser() {
	return AsyncStorage.removeItem(ONEONE_STORAGE_KEY, err => {
		console.log("err:", err);
	});
}
