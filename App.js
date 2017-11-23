import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import store from "./src/reducers/store";

export default class App extends Component {

  
  state = { loggedIn: null };

  componentWillMount() {
    console.ignoredYellowBox = ["Setting a timer"];
    firebase.initializeApp({
      apiKey: "AIzaSyBOxbSD_kd9y0wAbrLXOmuqNl93rA5WA6M",
      authDomain: "auth-ccf04.firebaseapp.com",
      databaseURL: "https://auth-ccf04.firebaseio.com",
      projectId: "auth-ccf04",
      storageBucket: "",
      messagingSenderId: "735579149305"
    });

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Text>1:1 Appointment Management App</Text>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
