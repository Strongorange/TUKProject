import React, { useState, useEffect, useContext } from "react";
import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { UserContext } from "../UserContext";
import { loginRequest } from "../request";

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
  const context = useContext(UserContext);
  const { isLogin, setIsLogin, userInfo, setUserInfo, isDevice, setIsDevice } =
    context;
  const [idText, setIdText] = useState("");
  const [passwordText, setPasswordText] = useState("");

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
          // 테스트 언제나 로그인
          // navigation.navigate("Drawer", { screen: "현재날씨" });
          //완성되면 이 코드로 되돌리기
          const data = await loginRequest(idText, passwordText);
          if (data) {
            if (data.status == 200) {
              const { username, password, email, top, bottom, _id, createdAt } =
                data.data;
              setUserInfo({
                _id,
                username,
                password,
                email,
                top,
                bottom,
                createdAt,
              });
              setIsLogin(true);
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
