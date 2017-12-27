import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  ActivityIndicator
} from "react-native";
import {
  Button,
  FormLabel,
  FormInput,
  FormValidationMessage
} from "react-native-elements";
import {
  loggedIn,
  removeFromStorage,
  emailChanged,
  passwordChanged,
  loginUser
} from "../../actions";
import { resetNavigation } from "../../utils/helpers";
import styles from "../../utils/styles";
//import { Button } from "../common";

class LoginForm extends Component {
  componentWillMount() {
    //this.props.removeFromStorage()
    this.props.loggedIn();
  }

  renderLoginButton() {
    const { email, password, loading, loginUser, navigation } = this.props;

    if (loading) {
      return <ActivityIndicator size="large" color="#0000ff" />;
    }
    return (
      <Button
        title={"LOGIN"}
        large
        onPress={() =>
          loginUser({ email, password }, () => {
            resetNavigation(navigation, "DrawerView");
          })
        }
      />
    );
  }

  render() {
    const {
      email,
      password,
      error,
      emailChanged,
      passwordChanged
    } = this.props;

    return (
      <KeyboardAvoidingView>
        <FormValidationMessage labelStyle={styles.loginError}>
          {error}
        </FormValidationMessage>
        <FormLabel
          labelStyle={{
            fontSize: 20,
            fontWeight: "bold",
            marginBottom: 10,
            color: "#595856"
          }}
        >
          EMAIL
        </FormLabel>
        <FormInput
          inputStyle={{
            fontSize: 18
          }}
          value={email}
          placeholder="Please enter your email address..."
          underlineColorAndroid="#3B5699"
          placeholderTextColor="#9a73ef"
          onChangeText={emailChanged}
        />

        <FormLabel
          labelStyle={{
            fontSize: 20,
            fontWeight: "bold",
            marginBottom: 10,
            color: "#595856"
          }}
        >
          PASSWORD
        </FormLabel>
        <FormInput
        inputStyle={{
            fontSize: 18
          }}
          value={password}
          secureTextEntry
          placeholder="Please enter your password..."
          underlineColorAndroid="#3B5699"
          placeholderTextColor="#9a73ef"
          onChangeText={passwordChanged}
        />

        <View style={{ marginTop: 40 }}>{this.renderLoginButton()}</View>
      </KeyboardAvoidingView>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading, user } = auth;

  return {
    email,
    password,
    error,
    loading
  };
};

export default connect(mapStateToProps, {
  removeFromStorage,
  loggedIn,
  emailChanged,
  passwordChanged,
  loginUser
})(LoginForm);
