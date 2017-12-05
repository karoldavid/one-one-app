import React, { Component } from "react";
import { Text, View } from "react-native";
import styles from "../utils/styles";

class LogoutView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Logout</Text>
      </View>
    );
  }
}

export default LogoutView;