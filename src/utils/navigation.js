import { StackNavigator, TabNavigator } from "react-navigation";
import { blue, lightPurp, purple, white } from "./colors";
import { Ionicons } from "@expo/vector-icons";
import LoginForm from "../components/LoginForm";
import StudentsListView from "../components/StudentsListView";
import StudentView from "../components/StudentView";
import CreateStudentForm from "../components/CreateStudentForm";
import EditStudentForm from "../components/EditStudentForm";

export const Tabs = TabNavigator(
  {
    StudentsListView: {
      screen: StudentsListView,
      navigationOptions: {
        tabBarLabel: "Students",
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-bookmarks" size={30} color={tintColor} />
        )
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: white,
      style: {
        height: 56,
        backgroundColor: blue,
        shadowColor: "rgba(0,0,0,0.24)",
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 6,
        shadowOpacity: 1
      }
    }
  }
);

export const MainNavigator = StackNavigator({
  Home: {
    screen: LoginForm
  },
  UserAuthenticationView: {
    screen: LoginForm,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: blue
      }
    }
  },
  StudentsListView: {
    screen: StudentsListView,
    navigationOptions: {
      title: "All Students",
      headerTintColor: white,
      headerStyle: {
        backgroundColor: blue
      }
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
    screen: CreateStudentForm,
    navigationOptions: {
      title: "Add",
      headerTintColor: white,
      headerStyle: {
        backgroundColor: blue
      }
    }
  },
  EditStudentView: {
    screen: EditStudentForm,
    navigationOptions: {
      title: "Add",
      headerTintColor: white,
      headerStyle: {
        backgroundColor: blue
      }
    }
  }
});
