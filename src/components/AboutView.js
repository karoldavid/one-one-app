import React, { Component } from "react";
import { Text, View } from "react-native";
import styles from "../utils/styles";

class AboutView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>About</Text>
      </View>
    );
  }
}

export default AboutView;
