import React, { Component } from "react";
import { Text, View } from "react-native";
import AgendaScreen from "./AgendaScreen";
import styles from "../utils/styles";

class AppointmentsView extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <AgendaScreen />
      </View>
    );
  }
}

export default AppointmentsView;