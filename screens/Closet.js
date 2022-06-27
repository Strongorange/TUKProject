import React, { useState } from "react";
import styled from "styled-components/native";
import { FontAwesome } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const View = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text``;

const TouchableOpacity = styled.TouchableOpacity``;

const Closet = () => {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <Container>
      <View style={{ flex: 1 }}>
        <Text>옷 추가</Text>
        <TouchableOpacity onPress={pickImage}>
          <FontAwesome name="plus-square" size={32} color="black" />
        </TouchableOpacity>
      </View>
      <View style={{ flex: 3 }}>
        <Text>상의</Text>
      </View>
      <View style={{ flex: 3 }}>
        <Text>하의</Text>
      </View>
    </Container>
  );
};

export default Closet;
