import React, { Component } from "react";
import { Text, View } from "react-native";
import styles from "../utils/styles";

const VIEWS = [
  { StudentsListView: "All Students" },
  { UserView: "User" },
  { AboutView: "About" },
  { LogoutView: "Log Out" }
];

class Drawer extends Component {
  makeMenuItem(item) {
    const { navigation } = this.props;
    const key = Object.keys(item)[0];
    return (
      <Text
        key={key}
        onPress={() => navigation.navigate(key)}
        style={styles.drawerItem}
      >
        {item[key]}
      </Text>
    );
  }

  render() {
    return (
      <View style={styles.drawerContainer}>
        {VIEWS.map(view => this.makeMenuItem(view))}
      </View>
    );
  }
}

export default Drawer;
