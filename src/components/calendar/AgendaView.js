import React, { Component } from "react";
import { Agenda } from "react-native-calendars";

class AgendaView extends Component {
  state = {
    items: {}
  };

  loadItems = day => {
    this.setState({
      items: { ...this.props.makeCalendarItems(this.props.data) }
    });
  };

  rowHasChanged = (r1, r2) => {
    return r1.name !== r2.name;
  };

  render() {
    return (
      <Agenda
        items={this.state.items}
        loadItemsForMonth={this.loadItems}
        selected={"2016-12-10T07:30:00+01:00"}
        renderItem={this.props.renderItem}
        renderEmptyDate={this.props.renderEmptyDate}
        rowHasChanged={this.rowHasChanged}
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
     //   monthFormat={'yyyy'}
        // theme={{calendarBackground: 'red', agendaKnobColor: 'green'}}
       // renderDay={(day, item) => (<Text>{day ? day.day: 'item'}</Text>)}
      />
    );
  }
}

export default AgendaView;