import React, { Component } from "react";
import { Text, View } from "react-native";
import AgendaView from "../components/calendar/AgendaView";

class CalendarScreen extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <AgendaView />
      </View>
    );
  }
}

export default CalendarScreen;