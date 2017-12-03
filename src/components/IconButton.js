import React, { Component } from "react";
import { View, TouchableOpacity } from "react-native";
import styles from "../utils/styles";
import { white } from "../utils/colors";
import { Ionicons } from "@expo/vector-icons";

const IconButton = ({ onPress, ionicon, size, color }) => {
   return (
      <View style={styles.arrowStyles}>
         <TouchableOpacity onPress={onPress}>
            <Ionicons name={ionicon} size={size} color={color} />
         </TouchableOpacity>
      </View>
   );
};

export default IconButton;
