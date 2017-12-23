import React from "react";
import { StackNavigator, DrawerNavigator } from "react-navigation";

import { Animated, Text } from "react-native";
import { blue, lightPurp, purple, white } from "./colors";
import { Ionicons } from "@expo/vector-icons";
import { DrawerButton } from "../components/common";

import LoginForm from "../components/LoginForm";
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
    StudentsListView: {
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
      headerStyle: { backgroundColor: lightPurp },
      headerTintColor: white,
      gesturesEnabled: false,
      headerRight: <DrawerButton navigation={navigation} />
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
  },
  CreateAppointmentView: {
    screen: CreateAppointmentView,
    navigationOptions: {
      title: "New Appointment",
      headerTintColor: white,
      headerStyle: {
        backgroundColor: blue
      }
    }
  },
  StudentAppointmentsView: {
    screen: StudentAppointmentsView,
    navigationOptions: {
      title: "All Appointments",
      headerTintColor: white,
      headerStyle: {
        backgroundColor: blue
      }
    }
  }
});
