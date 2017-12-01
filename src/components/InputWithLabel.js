import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { blueMagenta } from "../utils/colors";

class InputWithLabel extends Component {
  render() {
    return (
      <View style={[styles.labelContainer, this.props.style]}>
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
    marginVertical: 2
  },
  label: {
    width: 115,
    marginLeft: 15,
    marginBottom: 5
  },
  labelText: {
    color: blueMagenta
  }
});

export default InputWithLabel;
