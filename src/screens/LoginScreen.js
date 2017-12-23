import React, { Component } from "react";
import { View } from "react-native";
import styles from "../utils/styles";
import LoginForm from "../components/login/LoginForm";

class LoginScreen extends Component {
  render() {
  	const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <LoginForm navigation={navigation} />
      </View>
    );
  }
}

export default LoginScreen;