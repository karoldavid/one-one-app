import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import styles from "../utils/styles";

const Button = ({ onPress, title }) => {
   return (
      <View>
         <TouchableOpacity style={styles.submitButton} onPress={onPress}>
            <Text style={styles.submitButtonText}>{title}</Text>
         </TouchableOpacity>
      </View>
   );
};

export default Button;
