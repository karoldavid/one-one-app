import React from "react";
import { Modal, Text, View } from "react-native";
import styles from "../../utils/styles";
import { Button } from "./Button";

const ModalConfirm = ({ children, modalVisible, onConfirm, onDecline }) => {
   return (
      <Modal
         animationType={"slide"}
         transparent
         visible={modalVisible}
         onRequestClose={() => {
            console.log("Modal has been closed.");
         }}
      >
         <View style={styles.modal}>
            <Text style={styles.modalText}>{children}</Text>
            <Button onPress={onDecline} title="No" />
            <Button onPress={onConfirm} title="Yes" />
         </View>
      </Modal>
   );
};

export { ModalConfirm };
