import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Jobs from "../pages/Jobs";
import Detail from "../pages/Detail";
import Login from "../pages/Login";
import Register from "../pages/Register";

const Stack = createNativeStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerTitleStyle: { color: "#ef5350" },
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="Jobs" component={Jobs} />
    </Stack.Navigator>
  );
};

export default StackNav;
