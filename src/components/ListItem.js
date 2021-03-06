import React, { Component } from "react";
import { connect } from "react-redux";
import { StyleSheet, Image, View, Text, TouchableOpacity } from "react-native";
import { black, suvaGray } from "../utils/colors";
import { selectStudent } from "../actions"

class ListItem extends Component {
  onListItemPress = () => {
    const { student, navigation, selectStudent } = this.props
    selectStudent(student)
    navigation.navigate("StudentView");
  };

  render() {
    const { image, firstName, lastName } = this.props.student;
    return (
      <TouchableOpacity onPress={this.onListItemPress}>
        <View style={styles.container}>
          <Image source={{ uri: image || "http://via.placeholder.com/100x150" }} style={styles.photo} />
          <Text style={styles.text}>{`${firstName} ${lastName}`}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: suvaGray
  },
  text: {
    marginLeft: 12,
    fontSize: 16,
    color: black
  },
  photo: {
    height: 40,
    width: 40,
    borderRadius: 20
  }
});

export default connect(null, { selectStudent })(ListItem);
