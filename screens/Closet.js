import React, { useState } from "react";
import styled from "styled-components/native";
import { FontAwesome } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { Alert, Image, Dimensions } from "react-native";
import axios from "axios";

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
  const [image, setImage] = useState(null);

  const pickImage = async (isTop) => {
    console.log(isTop);

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      quality: 1,
      base64: true,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
      Alert.alert("이미지 추가 완료");
    }
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
