import React from "react";
import { View, Dimensions } from "react-native";
import { Pie } from "react-native-pathjs-charts";

const WIDTH = Dimensions.get("window").width

export const PieChart = ({ data, accessorKey }) => {
  let options = {
    width: 350,
    height: 350,
    color: "#03A9F4",
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
      fontSize: 12,
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
