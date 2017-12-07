import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, View } from "react-native";
import styles from "../utils/styles";
import { logOut } from "../actions";
import { DrawerIcon } from "./common";

const VIEWS = [
  { StudentsListView: "All Students", icon: "md-list" },
  { AppointmentsView: "1:1 Appointments", icon: "md-people" },
  { UserView: "User", icon: "md-body" },
  { AboutView: "About", icon: "md-information" }
];

class Drawer extends Component {
  makeMenuItem(item) {
    const { navigation } = this.props;
    const key = Object.keys(item)[0];
    return (
      <DrawerIcon
        key={key}
        onPress={() => navigation.navigate(key)}
        ionicon={item.icon}
        size={30}
        color={"white"}
        title={item[key]}
      />
    );
  }

  render() {
    const { logOut, navigation } = this.props;
    return (
      <View style={styles.drawerContainer}>
        {VIEWS.map(view => this.makeMenuItem(view))}
        <DrawerIcon
          onPress={() => {
            logOut();
            navigation.navigate("LoginView");
          }}
          ionicon={"ios-log-out"}
          size={30}
          color={"white"}
          title={"Log Out"}
        />
      </View>
    );
  }
}

export default connect(null, { logOut })(Drawer);
