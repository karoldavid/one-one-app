import React, { Component } from "react";
import { Provider } from "react-redux";
import firebase from "firebase";
import store from "./src/reducers/store";
import { View } from "react-native";
import { MainNavigator } from "./src/utils/navigation";

export default class App extends Component {
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
  }

  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}
