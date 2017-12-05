import React from "react";
import { StackNavigator, DrawerNavigator } from "react-navigation";

import { Text } from "react-native";
import { blue, lightPurp, purple, white } from "./colors";
import { Ionicons } from "@expo/vector-icons";
import { IconButton } from "../components/common";

import LoginForm from "../components/LoginForm";
import StudentsListView from "../components/StudentsListView";
import StudentView from "../components/StudentView";
import CreateStudentView from "../components/CreateStudentView";
import EditStudentView from "../components/EditStudentView";

import Drawer from "../components/Drawer";
import UserView from "../components/UserView";
import AboutView from "../components/AboutView";
import LogoutView from "../components/LogoutView";

const drawerButton = navigation => (
  <IconButton
    ionicon="md-menu"
    size={30}
    color="white"
    onPress={() => {
      if (navigation.state.index === 0) {
        navigation.navigate("DrawerOpen");
      } else {
        navigation.navigate("DrawerClose");
      }
    }}
  />
);

const DrawerStack = DrawerNavigator(
  {
    StudentsListView: {
      screen: StudentsListView,
      navigationOptions: {
        title: "All Students"
      }
    },
    UserView: { screen: UserView },
    AboutView: { screen: AboutView },
    LogoutView: { screen: LogoutView }
  },
  {
    contentComponent: Drawer
  }
);

const DrawerNavigation = StackNavigator({
  DrawerStack: {
    screen: DrawerStack,
    navigationOptions: ({ navigation }) => ({
      headerStyle: { backgroundColor: lightPurp },
      headerTintColor: white,
      gesturesEnabled: false,
      headerRight: drawerButton(navigation)
    })
  }
});

export const MainNavigator = StackNavigator({
  LoginView: {
    screen: LoginForm,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: blue
      }
    }
  },
  DrawerView: {
    screen: DrawerNavigation,
    navigationOptions: {
      header: null
    }
  },
  StudentView: {
    screen: StudentView,
    navigationOptions: {
      title: "Student",
      headerTintColor: white,
      headerStyle: {
        backgroundColor: blue
      }
    }
  },
  CreateStudentView: {
    screen: CreateStudentView,
    navigationOptions: {
      title: "Add",
      headerTintColor: white,
      headerStyle: {
        backgroundColor: blue
      }
    }
  },
  EditStudentView: {
    screen: EditStudentView,
    navigationOptions: {
      title: "Add",
      headerTintColor: white,
      headerStyle: {
        backgroundColor: blue
      }
    }
  }
});