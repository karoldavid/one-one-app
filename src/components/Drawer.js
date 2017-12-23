import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, View } from "react-native";
import styles from "../utils/styles";
import { logOut } from "../actions";
import { DrawerIcon } from "./common";
import { resetNavigation } from "../utils/helpers";

const VIEWS = [
  { StudentsListView: "Students", icon: "md-list" },
  { CalendarScreen: "Calendar", icon: "md-people" },
  { StatsScreen: "Stats", icon: "md-stats"},
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
            navigation.navigate("login");
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
