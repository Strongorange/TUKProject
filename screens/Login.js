import React, { useState, useEffect } from "react";
import { TouchableOpacity, Dimensions } from "react-native";
import styled from "styled-components/native";
import { loginRequest, showToast } from "../request";

const View = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: ${Math.floor(Dimensions.get("window").height)}px;
  flex: 1;
`;

const TextInput = styled.TextInput`
  height: 40px;
  width: ${Math.floor(Dimensions.get("window").width / 2)}px;
  border: 1px solid rgba(30, 30, 30, 0.5);
  margin-bottom: 10px;
  padding: 10px;
`;

const Button = styled.TouchableOpacity`
  margin-bottom: 20px;
  width: ${Math.floor(Dimensions.get("window").width / 2)}px;
  padding: 10px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #c490e4;
`;

const Text = styled.Text``;

const Login = ({ navigation }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [idText, setIdText] = useState("");
  const [passwordText, setPasswordText] = useState("");

  useEffect(() => {
    return () => setIsLogin(false);
  }, []);

  const onChangeId = (text) => {
    setIdText(text);
  };

  const onChangePassword = (text) => {
    setPasswordText(text);
  };

  return (
    <View>
      <TextInput placeholder="Id" onChangeText={(text) => onChangeId(text)} />
      <TextInput
        secureTextEntry={true}
        placeholder="Password"
        onChangeText={(text) => onChangePassword(text)}
      />
      <Button
        onPress={async () => {
          const data = await loginRequest(idText, passwordText);
          if (data) {
            if (data.status == 200) {
              navigation.navigate("Drawer", { screen: "현재날씨" });
            } else {
              console.log(data);
              showToast("다시 확인해주세요");
            }
          }
        }}
      >
        <Text>로그인</Text>
      </Button>
      <Button title="회원가입" onPress={() => navigation.navigate("Signup")}>
        <Text>회원가입</Text>
      </Button>
    </View>
  );
};

export default Login;
