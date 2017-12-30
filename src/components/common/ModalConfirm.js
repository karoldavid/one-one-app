import React from "react";
import { Modal, Text, View, Dimensions } from "react-native";
import { Button } from "react-native-elements";
import styles from "../../utils/styles";
import { blueMagenta } from "../../utils/colors";

const BUTTON_WIDTH = Dimensions.get("screen").width / 3;

const ModalConfirm = ({ children, modalVisible, onConfirm, onDecline }) => {
   return (
      <Modal
         animationType={"fade"}
         transparent
         visible={modalVisible}
         onRequestClose={() => {
            console.log("Modal has been closed.");
         }}
      >
         <View style={styles.modal}>
            <Text style={styles.modalText}>{children}</Text>
            <View style={{ flexDirection: "row" }}>
               <Button
                  containerViewStyle={{ width: BUTTON_WIDTH }}
                  onPress={onDecline}
                  title="NO"
                  backgroundColor={blueMagenta}
               />
               <Button
                  containerViewStyle={{ width: BUTTON_WIDTH }}
                  onPress={onConfirm}
                  title="YES"
                  backgroundColor={blueMagenta}
               />
            </View>
         </View>
      </Modal>
   );
};

export { ModalConfirm };
