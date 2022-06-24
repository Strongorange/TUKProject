import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

const View = styled.View``;
const Text = styled.Text``;

const Login = ({ navigation }) => {
  const [isLogin, setIsLogin] = useState(false);
  console.log(isLogin);
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Drawer", { screen: "현재날씨" })}
    >
      <Text>Log In</Text>
    </TouchableOpacity>
  );
};

export default Login;
