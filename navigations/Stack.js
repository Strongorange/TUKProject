import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import Signup from "../screens/Signup";

const NativeStack = createNativeStackNavigator();

const Stack = () => (
  <NativeStack.Navigator screenOptions={{ headerShown: false }}>
    <NativeStack.Screen name="Login" component={Login} />
    <NativeStack.Screen name="Signup" component={Signup} />
  </NativeStack.Navigator>
);

export default Stack;
