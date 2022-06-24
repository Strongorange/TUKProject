import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Root from "./navigations/Root";

export default function App() {
  return (
    <NavigationContainer>
      <Root />
    </NavigationContainer>
  );
}
