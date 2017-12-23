import React from "react";
import { View } from "react-native";
import { SmoothLine } from "react-native-pathjs-charts";

export const SmoothLineChart = ({ data, xKey, yKey }) => {
 
  let options = {
    width: 280,
    height: 280,
    color: "#2980B9",
    margin: {
      top: 20,
      left: 45,
      bottom: 25,
      right: 20
    },
    animate: {
      type: "delayed",
      duration: 200
    },
    axisX: {
      showAxis: true,
      showLines: true,
      showLabels: true,
      showTicks: true,
      zeroAxis: false,
      orient: "bottom",
      label: {
        fontFamily: "Arial",
        fontSize: 14,
        fontWeight: true,
        fill: "#34495E"
      }
    },
    axisY: {
      showAxis: true,
      showLines: true,
      showLabels: true,
      showTicks: true,
      zeroAxis: false,
      orient: "left",
      label: {
        fontFamily: "Arial",
        fontSize: 14,
        fontWeight: true,
        fill: "#34495E"
      }
    }
  };

  return (
    <View>
      <SmoothLine data={data} options={options} xKey={xKey} yKey={yKey} />
    </View>
  );
};