import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Drawer from "./Drawer";
import Stack from "./Stack";

const Nav = createNativeStackNavigator();

const Root = () => (
  <Nav.Navigator screenOptions={{ presentation: "modal", headerShown: false }}>
    <Nav.Screen name="Stack" component={Stack} />
    <Nav.Screen name="Drawer" component={Drawer} />
  </Nav.Navigator>
);
export default Root;
