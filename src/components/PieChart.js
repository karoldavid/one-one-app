import React, { Component } from "react";
import { connect } from "react-redux";
import { getAttendance } from "../actions";
import { View, Text, StyleSheet } from "react-native";
import { Pie } from "react-native-pathjs-charts";

class PieChart extends Component {
  componentWillMount() {
    const { appointments } = this.props;
    this.props.getAttendance(appointments);
  }

  makeData() {
    const { attendance } = this.props.statistics;
    let data = [];

    if (attendance) {
      Object.keys(attendance).map(key => {
        data.push({
          name: key,
          times: attendance[key]
        })
      });
    }

    return data;
  }

  render() {

    let options = {
      margin: {
        top: 20,
        left: 20,
        right: 20,
        bottom: 20
      },
      width: 350,
      height: 350,
      color: "#551a8b",
      r: 50,
      R: 150,
      legendPosition: "topLeft",
      animate: {
        type: "oneByOne",
        duration: 200,
        fillTransition: 3
      },
      label: {
        fontFamily: "Arial",
        fontSize: 8,
        fontWeight: true,
        color: "#ECF0F1"
      }
    };

    return (
      <View>
        <Pie data={this.makeData() || [] } options={options} accessorKey="times" />
      </View>
    );
  }
}

const mapStateToProps = ({ appointmentList, statistics }) => {
  // console.log(statistics)
  return {
    appointments: appointmentList.appointments,
    statistics
  };
};

export default connect(mapStateToProps, { getAttendance })(PieChart);
