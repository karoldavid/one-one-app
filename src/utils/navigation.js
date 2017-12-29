import React from "react";
import { StackNavigator, DrawerNavigator } from "react-navigation";

import { Animated, Text } from "react-native";
import { blue, blueMagenta, lightPurp, purple, white } from "./colors";
import { Ionicons } from "@expo/vector-icons";
import { DrawerButton } from "../components/common";

import LoginScreen from "../screens/LoginScreen";
import StudentsListView from "../components/StudentsListView";
import StudentView from "../components/StudentView";
import CreateStudentView from "../components/CreateStudentView";
import EditStudentView from "../components/EditStudentView";
import CreateAppointmentView from "../components/CreateAppointmentView";
import StudentAppointmentsView from "../components/StudentAppointmentsView";

import Drawer from "../components/Drawer";
import UserView from "../components/UserView";
import AboutView from "../components/AboutView";
import CalendarScreen from "../screens/CalendarScreen";
import StatsScreen from "../screens/StatsScreen";

const DrawerStack = DrawerNavigator(
  {
    students: {
      screen: StudentsListView,
      navigationOptions: {
        title: "All Students"
      }
    },
    UserView: { screen: UserView },
    AboutView: { screen: AboutView },
    CalendarScreen: { screen: CalendarScreen },
    StatsScreen: { screen: StatsScreen }
  },
  {
    contentComponent: Drawer
  }
);

const DrawerNavigation = StackNavigator({
  DrawerStack: {
    screen: DrawerStack,
    navigationOptions: ({ navigation }) => ({
      headerStyle: { backgroundColor: blueMagenta },
      headerTintColor: white,
      gesturesEnabled: false,
      headerLeft: <DrawerButton navigation={navigation} />
    })
  }
});

export const MainNavigator = StackNavigator({
  login: {
    screen: LoginScreen,
    navigationOptions: {
      header: null
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
        backgroundColor: blueMagenta
      }
    }
  },
  CreateStudentView: {
    screen: CreateStudentView,
    navigationOptions: {
      title: "Add",
      headerTintColor: white,
      headerStyle: {
        backgroundColor: blueMagenta
      }
    }
  },
  EditStudentView: {
    screen: EditStudentView,
    navigationOptions: {
      title: "Add",
      headerTintColor: white,
      headerStyle: {
        backgroundColor: blueMagenta
      }
    }
  },
  CreateAppointmentView: {
    screen: CreateAppointmentView,
    navigationOptions: {
      title: "New Appointment",
      headerTintColor: white,
      headerStyle: {
        backgroundColor: blueMagenta
      }
    }
  },
  StudentAppointmentsView: {
    screen: StudentAppointmentsView,
    navigationOptions: {
      title: "All Appointments",
      headerTintColor: white,
      headerStyle: {
        backgroundColor: blueMagenta
      }
    }
  }
});
