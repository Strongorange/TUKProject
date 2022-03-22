import React, { useState, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Home from "./screens/Home";
import { Fontisto } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Seoul from "./screens/Seoul";
import Sejong from "./screens/Sejong";
import Busan from "./screens/Busan";

const Drawer = createDrawerNavigator();

const queryClient = new QueryClient();

const MyDrawer = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="현재날씨" component={Home} />
    <Drawer.Screen name="서울" component={Seoul} />
    <Drawer.Screen name="부산" component={Busan} />
    <Drawer.Screen name="세종" component={Sejong} />
  </Drawer.Navigator>
);

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <MyDrawer />
      </NavigationContainer>
    </QueryClientProvider>
  );
}
