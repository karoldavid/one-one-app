import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, View } from "react-native";
import styles from "../utils/styles";
import { logOut } from "../actions";

const VIEWS = [
  { StudentsListView: "All Students" },
  { UserView: "User" },
  { AboutView: "About" }
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
    const { logOut, navigation } = this.props;
    return (
      <View style={styles.drawerContainer}>
        {VIEWS.map(view => this.makeMenuItem(view))}
        <Text
          key={"logOut"}
          onPress={() => {
            logOut();
            navigation.navigate("LoginView");
          }}
          style={styles.drawerItem}
        >
          Log Out
        </Text>
      </View>
    );
  }
}

export default connect(null, { logOut })(Drawer);
