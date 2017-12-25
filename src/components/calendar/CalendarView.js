import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Calendar from 'react-native-calendar';
import moment from 'moment';

const customDayHeadings = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const customMonthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May',
  'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#f7f7f7',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

// use to test customStyles
const customStyles = StyleSheet.create({
  dayButton: {
    padding: 10,
  },
  dayButtonFiller: {
    padding: 10,
  },
  calendarContainer: {
   backgroundColor: 'blue',
  }
});

export default class CalendarView extends Component {
  state = {
      selectedDate: moment().format('YYYY-MM-DD'),
    }

  render() {
    let eventDates = [moment().format('YYYY-MM-DD'), moment().add(1, "day").format('YYYY-MM-DD'),
      moment().add(14, "day").format('YYYY-MM-DD'), moment().add(1, "month").format('YYYY-MM-DD')];

    return (
      <View style={styles.container}>
        <Calendar
          customStyle={customStyles}
          ref="calendar"
          eventDates={eventDates}
          scrollEnabled
          showControls
          dayHeadings={customDayHeadings}
          monthNames={customMonthNames}
          titleFormat={'MMMM YYYY'}
          prevButtonText={'Prev'}
          nextButtonText={'Next'}
          onDateSelect={(date) => this.setState({ selectedDate: date })}
          onDateLongPress={(date) => this.setState({ selectedDate: date })}
          onTouchPrev={(e) => console.log('onTouchPrev: ', e)}
          onTouchNext={(e) => console.log('onTouchNext: ', e)}
          onSwipePrev={(e) => console.log('onSwipePrev: ', e)}
          onSwipeNext={(e) => console.log('onSwipeNext', e)}
          selectedDate={this.state.selectedDate}
          showEventIndicators={true}
        />
        <Text>Selected Date: {moment(this.state.selectedDate).format('MMMM DD YYYY')}</Text>
      </View>

    );
  }
}