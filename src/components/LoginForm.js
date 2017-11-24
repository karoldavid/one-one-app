import React, { Component } from "react";
import { connect } from "react-redux";
import { emailChanged, passwordChanged, loginUser } from "../actions";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView
} from "react-native";

class LoginForm extends Component {
  render() {
    const {
      email,
      password,
      error,
      emailChanged,
      passwordChanged,
      loginUser
    } = this.props;

    return (
      <KeyboardAvoidingView style={styles.container}>
        <Text>1:1 Appointment Management App</Text>

        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Email"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          value={email}
          onChangeText={emailChanged}
        />

        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Password"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          secureTextEntry
          value={password}
          onChangeText={passwordChanged}
        />

        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => loginUser({ email, password })}
        >
          <Text style={styles.submitButtonText}> Submit </Text>
        </TouchableOpacity>
        <Text>{error}</Text>
      </KeyboardAvoidingView>
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
    alignSelf: "stretch"
  },
  submitButton: {
    backgroundColor: "#7a42f4",
    padding: 10,
    margin: 15,
    height: 40,
    alignSelf: "stretch"
  },
  submitButtonText: {
    color: "white",
    alignSelf: "center"
  }
});

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;
  console.log(auth);
  return {
    email,
    password,
    error,
    loading
  };
};

export default connect(mapStateToProps, {
  emailChanged,
  passwordChanged,
  loginUser
})(LoginForm);
