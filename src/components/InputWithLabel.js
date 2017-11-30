import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { blueMagenta } from "../utils/colors";

class InputWithLabel extends Component {
  render() {
    return (
      <View style={styles.labelContainer}>
        <View style={styles.label}>
          <Text style={styles.labelText}>{this.props.label}</Text>
        </View>
        {this.props.children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  labelContainer: {
    flexDirection: "column",
    marginVertical: 2,
    flex: 1
  },
  label: {
    width: 115,
    alignItems: "flex-start",
    marginLeft: 15
  },
  labelText: {
    color: blueMagenta
  }
});

export default InputWithLabel;
