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
  loggedIn,
  removeFromStorage,
  emailChanged,
  passwordChanged,
  loginUser
} from "../../actions";
import { resetNavigation } from "../../utils/helpers";
import styles from "../../utils/styles";
import { Button } from "../common";

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
        title={"Submit"}
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
      <View style={styles.container}>
        <Text style={styles.header}>1:1 Appointments</Text>
        <KeyboardAvoidingView style={{ flex: 0.8 }}>
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

          <View>{this.renderLoginButton()}</View>
          <Text style={styles.loginError}>{error}</Text>
        </KeyboardAvoidingView>
      </View>
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
