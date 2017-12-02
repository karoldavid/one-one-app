import React, { Component } from "react";
import { View, TouchableOpacity } from "react-native";
import styles from "../utils/styles";
import { white } from "../utils/colors";
import { Ionicons } from "@expo/vector-icons";

const ArrowBack = ({ onPress }) => {
   return (
      <View style={styles.arrowStyles}>
         <TouchableOpacity onPress={onPress}>
            <Ionicons name="ios-arrow-back" size={30} color={white} />
         </TouchableOpacity>
      </View>
   );
};

export default ArrowBack;
