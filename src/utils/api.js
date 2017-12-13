import uuidv1 from "uuid";
import { SecureStore } from "expo";

const key = "ONEONE-user";

export function saveUser({ email, password }) {
	SecureStore.setItemAsync(
		key,
		JSON.stringify({
			email: email,
			password: password,
			timestamp: Date.now()
		})
	)
		.then(() => console.log("saved"))
		.catch(err => console.log(err));
}

export function getUser() {
	return SecureStore.getItemAsync(key)
		.then(result => {
			return JSON.parse(result);
		})
		.catch(err => console.log({ error: err }));
}

export function removeUser() {
	return SecureStore.deleteItemAsync(key).catch(err =>
		console.log({ error: err })
	);
}