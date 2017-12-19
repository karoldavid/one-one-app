import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, View, StyleSheet } from "react-native";
import { Agenda } from "react-native-calendars";
import moment from "moment";

// @TODO: use redux to update calendar
// @TODO:

class AgendaScreen extends Component {
  state = {
    items: {}
  };

  render() {

    return (
      <Agenda
        items={this.state.items}
        loadItemsForMonth={this.loadItems.bind(this)}
        selected={"2016-12-10T07:30:00+01:00"}
        renderItem={this.renderItem.bind(this)}
        renderEmptyDate={this.renderEmptyDate.bind(this)}
        rowHasChanged={this.rowHasChanged.bind(this)}
        // markingType={'period'}
        // markedDates={{
        //    '2017-05-08': {textColor: '#666'},
        //    '2017-05-09': {textColor: '#666'},
        //    '2017-05-14': {startingDay: true, endingDay: true, color: 'blue'},
        //    '2017-05-21': {startingDay: true, color: 'blue'},
        //    '2017-05-22': {endingDay: true, color: 'gray'},
        //    '2017-05-24': {startingDay: true, color: 'gray'},
        //    '2017-05-25': {color: 'gray'},
        //    '2017-05-26': {endingDay: true, color: 'gray'}}}
        // monthFormat={'yyyy'}
        // theme={{calendarBackground: 'red', agendaKnobColor: 'green'}}
        //renderDay={(day, item) => (<Text>{day ? day.day: 'item'}</Text>)}
      />
    );
  }

  loadItems(day) {
    const newItems = {};

    this.props.appointments.map(appointment => {
      const { timeDateUtc, description, project } = appointment;
      const strDate = timeDateUtc.split("T")[0];
      const strTime = moment(timeDateUtc).local().format('HH:mm')

      if (!this.state.items[strDate]) {
        this.state.items[strDate] = [];
      }

      this.state.items[strDate].push({
        time: strTime,
        project: project,
        description: description
      });
    });
    
    Object.keys(this.state.items).forEach(key => {
      newItems[key] = this.state.items[key];
    });

    this.setState({
      items: newItems
    });
  }

  renderItem(item) {
    return (
      <View style={[styles.item, { height: item.height }]}>
        <Text style={{ color: "blue"}}>{item.time}</Text>
        <Text>{item.project}</Text>
        <Text>{item.description}</Text>
      </View>
    );
  }

  renderEmptyDate() {
    return (
      <View style={styles.emptyDate}>
        <Text>This is empty date!</Text>
      </View>
    );
  }

  rowHasChanged(r1, r2) {
    return r1.name !== r2.name;
  }

  timeToString(time) {
    const date = new Date(time);
    return date.toISOString().split("T")[0];
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "white",
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30
  }
});

const mapStateToProps = ({ appointmentList }) => {
  return {
    appointments: appointmentList.appointments
  };
};

export default connect(mapStateToProps, {})(AgendaScreen);
