import React, { Component } from "react";
import { View } from "react-native";
import { Pie } from "react-native-pathjs-charts";

export const PieChart = ({ data, accessorKey }) => {
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
      <Pie data={data} options={options} accessorKey={accessorKey} />
    </View>
  );
};
