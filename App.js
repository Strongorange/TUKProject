import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Root from "./navigations/Root";
import UserStore from "./UserContext";

export default function App() {
  return (
    <UserStore>
      <NavigationContainer>
        <Root />
      </NavigationContainer>
    </UserStore>
  );
}
