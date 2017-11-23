import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView
} from "react-native";
import { Provider } from "react-redux";
import firebase from "firebase";
import store from "./src/reducers/store";

export default class App extends Component {
  state = {
    email: "@",
    password: ""
  };

  componentWillMount() {
    const { email, password } = this.state;

    firebase.initializeApp({
      apiKey: "AIzaSyBOxbSD_kd9y0wAbrLXOmuqNl93rA5WA6M",
      authDomain: "auth-ccf04.firebaseapp.com",
      databaseURL: "https://auth-ccf04.firebaseio.com",
      projectId: "auth-ccf04",
      storageBucket: "",
      messagingSenderId: "735579149305"
    });
  }

  handleEmail = text => {
    this.setState({ email: text });
  };

  handlePassword = text => {
    this.setState({ password: text });
  };

  login = (email, password) => {
    firebase.auth().onAuthStateChanged(user => {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(user => console.log("login user success"))
        .catch(error => {
          console.log(error);
          firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(user => console.log("user created login user success"))
            .catch(() => console.log("login user fail"));
        });
    });
  };

  render() {
    return (
      <Provider store={store}>
        <KeyboardAvoidingView style={styles.container}>
          <Text>1:1 Appointment Management App</Text>

          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Email"
            placeholderTextColor="#9a73ef"
            autoCapitalize="none"
            value={this.state.email}
            onChangeText={this.handleEmail}
          />

          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Password"
            placeholderTextColor="#9a73ef"
            autoCapitalize="none"
            onChangeText={this.handlePassword}
          />

          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => this.login(this.state.email, this.state.password)}
          >
            <Text style={styles.submitButtonText}> Submit </Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
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
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: "#7a42f4",
    borderWidth: 1,
    alignSelf: 'stretch',
  },
  submitButton: {
    backgroundColor: "#7a42f4",
    padding: 10,
    margin: 15,
    height: 40,
    alignSelf: 'stretch',
  },
  submitButtonText: {
    color: "white"
  }
});
