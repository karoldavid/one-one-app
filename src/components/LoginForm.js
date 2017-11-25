import React, { Component } from "react";
import { connect } from "react-redux";
import { emailChanged, passwordChanged, loginUser } from "../actions";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView
} from "react-native";

import styles from "../utils/styles"

class LoginForm extends Component {
  render() {
    const {
      email,
      password,
      error,
      emailChanged,
      passwordChanged,
      loginUser,
      navigation
    } = this.props;

    return (
      <View style={styles.container}>
      <Text style={styles.header}>1:1 Appointments</Text>
      <KeyboardAvoidingView style={{flex:0.8}}>
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
          onPress={() =>
            loginUser({ email, password }, () => {
              navigation.navigate("StudentsListView");
            })
          }
        >
          <Text style={styles.submitButtonText}> Submit </Text>
        </TouchableOpacity>
        <Text>{error}</Text>
      </KeyboardAvoidingView>
      </View>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;
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
