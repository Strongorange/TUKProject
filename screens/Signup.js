import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { useState } from "react";
import { signupRequest, showToast } from "../request";

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

///////////////////////////////Style////////////////////////////////////////
///////////////////////////////Style////////////////////////////////////////
///////////////////////////////Style////////////////////////////////////////
///////////////////////////////Style////////////////////////////////////////
///////////////////////////////Style////////////////////////////////////////
///////////////////////////////Style////////////////////////////////////////
///////////////////////////////Style////////////////////////////////////////
///////////////////////////////Style////////////////////////////////////////
///////////////////////////////Style////////////////////////////////////////
///////////////////////////////Style////////////////////////////////////////

const Signup = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [email, setEmail] = useState("");
  const [useObj, setUserObj] = useState({
    username: "",
    password: "",
    email: "",
  });

  const onChangeUsername = (text) => {
    setUsername(text);
  };

  const onChangePassword = (text) => {
    setPassword(text);
  };

  const onChangePassword2 = (text) => {
    setPassword2(text);
  };

  const onChangeEmail = (text) => {
    setEmail(text);
  };

  return (
    <View>
      <TextInput placeholder="Id" onChangeText={onChangeUsername} />
      <TextInput
        secureTextEntry={true}
        placeholder="비밀번호"
        onChangeText={onChangePassword}
      />
      <TextInput
        secureTextEntry={true}
        placeholder="비밀번호 확인"
        onChangeText={onChangePassword2}
      />
      <TextInput placeholder="E-mail" onChangeText={onChangeEmail} />
      <Button
        onPress={async () => {
          if (password !== password2) {
            showToast();
          } else if (password == password2) {
            const data = await signupRequest(username, password, email);
            console.log(data.status);
            if (data.status == 200) {
              showToast("계정생성 성공");
              navigation.goBack();
            } else if (data.status == 400) {
              showToast("문제 발생");
            }
          }
        }}
      >
        <Text>제출</Text>
      </Button>
      <Button onPress={() => navigation.goBack()}>
        <Text>취소</Text>
      </Button>
    </View>
  );
};

export default Signup;
