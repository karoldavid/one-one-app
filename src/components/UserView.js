import React, { Component } from "react";
import { Text, View } from "react-native";
import styles from "../utils/styles";

class UserView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>User</Text>
      </View>
    );
  }
}

export default UserView;