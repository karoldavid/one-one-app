import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { blue } from "../utils/colors";

const Row = props => (
  <View style={styles.container}>
    <Text style={styles.text}>{`${props.name.first} ${props.name.last}`}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: blue
  },
  text: {
    marginLeft: 12,
    fontSize: 16,
    color: blue
  },
  photo: {
    height: 40,
    width: 40,
    borderRadius: 20
  }
});

export default Row;
