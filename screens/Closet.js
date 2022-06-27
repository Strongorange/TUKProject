import React, { useState, useContext } from "react";
import { UserContext } from "../UserContext";
import styled from "styled-components/native";
import { FontAwesome } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { Alert, Image, Dimensions } from "react-native";
import { sendPhoto } from "../request";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 15px;
`;

const View = styled.View`
  display: flex;

  align-items: center;
`;

const Text = styled.Text``;

const TouchableOpacity = styled.TouchableOpacity``;

const Closet = () => {
  const context = useContext(UserContext);
  const { userInfo } = context;
  const [image, setImage] = useState(null);

  const pickImage = async (isTop) => {
    console.log(isTop);
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      base64: true,
    });

    // console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
      Alert.alert("이미지 추가 완료");
    }

    const response = await sendPhoto(isTop, userInfo._id, result.base64);
    console.log(response);
  };

  return (
    <Container>
      <View style={{ flex: 1 }}>
        <Text>상의</Text>
        <TouchableOpacity onPress={() => pickImage(true)}>
          <FontAwesome name="picture-o" size={32} color="black" />
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1 }}>
        <Text>하의</Text>
        <TouchableOpacity onPress={() => pickImage(false)}>
          <FontAwesome name="picture-o" size={32} color="black" />
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default Closet;
