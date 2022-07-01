import React, { useState, useContext } from "react";
import { UserContext } from "../UserContext";
import styled from "styled-components/native";
import { FontAwesome } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { Alert } from "react-native";
import { sendPhoto, showList, updateDB } from "../request";
import { utils } from "@react-native-firebase/app";
import storage from "@react-native-firebase/storage";
import Slider from "@react-native-community/slider";

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

const SliderContainer = styled.View`
  display: flex;
  align-items: center;
  width: 200px;
`;

////////////////STYLESTYLESTYLESTYLESTYLESTYLESTYLESTYLESTYLESTYLESTYLESTYLESTYLESTYLESTYLESTYLESTYLESTYLESTYLESTYLE///////////////////////////////////
////////////////STYLESTYLESTYLESTYLESTYLESTYLESTYLESTYLESTYLESTYLESTYLESTYLESTYLESTYLESTYLESTYLESTYLESTYLESTYLESTYLE///////////////////////////////////
////////////////STYLESTYLESTYLESTYLESTYLESTYLESTYLESTYLESTYLESTYLESTYLESTYLESTYLESTYLESTYLESTYLESTYLESTYLESTYLESTYLE///////////////////////////////////
////////////////STYLESTYLESTYLESTYLESTYLESTYLESTYLESTYLESTYLESTYLESTYLESTYLESTYLESTYLESTYLESTYLESTYLESTYLESTYLESTYLE///////////////////////////////////
////////////////STYLESTYLESTYLESTYLESTYLESTYLESTYLESTYLESTYLESTYLESTYLESTYLESTYLESTYLESTYLESTYLESTYLESTYLESTYLESTYLE///////////////////////////////////
////////////////STYLESTYLESTYLESTYLESTYLESTYLESTYLESTYLESTYLESTYLESTYLESTYLESTYLESTYLESTYLESTYLESTYLESTYLESTYLESTYLE///////////////////////////////////
////////////////STYLESTYLESTYLESTYLESTYLESTYLESTYLESTYLESTYLESTYLESTYLESTYLESTYLESTYLESTYLESTYLESTYLESTYLESTYLESTYLE///////////////////////////////////
////////////////STYLESTYLESTYLESTYLESTYLESTYLESTYLESTYLESTYLESTYLESTYLESTYLESTYLESTYLESTYLESTYLESTYLESTYLESTYLESTYLE///////////////////////////////////

function wait(sec) {
  let start = Date.now(),
    now = start;
  while (now - start < sec * 1000) {
    now = Date.now();
  }
}

const AddCloth = () => {
  const context = useContext(UserContext);
  const { userInfo, setUserInfo } = context;
  const [topSliderVal, setTopSliderVal] = useState(0);
  const [bottomSliderVal, setBottomSliderVal] = useState(0);

  const pickImage = async (isTop, range) => {
    console.log("isTop = ", isTop);
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      // base64: true,
    });

    const reference = storage().ref(
      `${userInfo._id}/${isTop ? "top" : "bottom"}/${result.uri.substring(
        47,
        result.uri.length
      )}`
    );

    await reference.putFile(result.uri);
    console.log("uploaded!");

    const url = await storage()
      .ref(
        `${userInfo._id}/${isTop ? "top" : "bottom"}/${result.uri.substring(
          47,
          result.uri.length
        )}`
      )
      .getDownloadURL();

    console.log("Download URL \n\n\n", url);

    let response = await sendPhoto(isTop, userInfo._id, range, url);
    // console.log(response.data);
    setUserInfo({
      ...response.data,
    });
    // console.log("From AddCloth Fianl UserInfo\n\n\n\n", userInfo);
    isTop ? setTopSliderVal(0) : setBottomSliderVal(0);
    Alert.alert("Done");
    return;
  };

  return (
    <Container>
      <View style={{ flex: 1 }}>
        <Text>상의</Text>
        <SliderContainer>
          <Slider
            maximumValue={10}
            minimumValue={0}
            step={1}
            minimumTrackTintColor="#F6C6EA"
            maximumTrackTintColor="#000000"
            onValueChange={(value) => setTopSliderVal(value)}
            style={{ width: 200 }}
            value={topSliderVal}
          />
          <Text>{topSliderVal}</Text>
        </SliderContainer>
        <TouchableOpacity onPress={() => pickImage(true, topSliderVal)}>
          <FontAwesome name="picture-o" size={32} color="black" />
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1 }}>
        <Text>하의</Text>
        <SliderContainer>
          <Slider
            maximumValue={10}
            minimumValue={0}
            step={1}
            minimumTrackTintColor="#F6C6EA"
            maximumTrackTintColor="#000000"
            onValueChange={(value) => setBottomSliderVal(value)}
            style={{ width: 200 }}
            value={bottomSliderVal}
          />
          <Text>{bottomSliderVal}</Text>
        </SliderContainer>
        <TouchableOpacity onPress={() => pickImage(false, bottomSliderVal)}>
          <FontAwesome name="picture-o" size={32} color="black" />
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default AddCloth;
