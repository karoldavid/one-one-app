import React from "react";
import { StackNavigator, DrawerNavigator } from "react-navigation";

import { Animated, Platform, Text } from "react-native";
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
import OverviewScreen from "../screens/OverviewScreen";

const DrawerStack = DrawerNavigator(
  {
    welcome: {
      screen: OverviewScreen,
      navigationOptions: {
        title: "Overview"
      }
    },
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
      headerStyle: {
        backgroundColor: blueMagenta,
        marginTop: Platform.OS === "android" ? 24 : 0
      },
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
        backgroundColor: blueMagenta,
        marginTop: Platform.OS === "android" ? 24 : 0
      }
    }
  },
  CreateStudentView: {
    screen: CreateStudentView,
    navigationOptions: {
      title: "Add Student",
      headerTintColor: white,
      headerStyle: {
        backgroundColor: blueMagenta,
        marginTop: Platform.OS === "android" ? 24 : 0
      }
    }
  },
  EditStudentView: {
    screen: EditStudentView,
    navigationOptions: {
      title: "Edit Student",
      headerTintColor: white,
      headerStyle: {
        backgroundColor: blueMagenta,
        marginTop: Platform.OS === "android" ? 24 : 0
      }
    }
  },
  CreateAppointmentView: {
    screen: CreateAppointmentView,
    navigationOptions: {
      title: "New Appointment",
      headerTintColor: white,
      headerStyle: {
        backgroundColor: blueMagenta,
        marginTop: Platform.OS === "android" ? 24 : 0
      }
    }
  },
  StudentAppointmentsView: {
    screen: StudentAppointmentsView,
    navigationOptions: {
      title: "All Appointments",
      headerTintColor: white,
      headerStyle: {
        backgroundColor: blueMagenta,
        marginTop: Platform.OS === "android" ? 24 : 0
      }
    }
  }
});
