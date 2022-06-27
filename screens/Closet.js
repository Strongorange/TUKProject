import React, { useState, useContext } from "react";
import { UserContext } from "../UserContext";
import styled from "styled-components/native";
import { FontAwesome } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { Alert, Image, Dimensions } from "react-native";
import { sendPhoto, showList, updateDB } from "../request";
import storage from "@react-native-firebase/storage";

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
  function wait(sec) {
    let start = Date.now(),
      now = start;
    while (now - start < sec * 1000) {
      now = Date.now();
    }
  }
  const context = useContext(UserContext);
  const { userInfo, setUserInfo } = context;

  const pickImage = async (isTop) => {
    console.log("isTop = ", isTop);
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      base64: true,
    });
    // console.log(result);

    let response = await sendPhoto(isTop, userInfo._id, result.base64);
    // console.log(response.data);

    let length = isTop ? response.data.top.length : response.data.bottom.length;
    console.log("before length = ", length);
    if (length <= 1) {
      length = 0;
    } else if (length > 1) {
      length--;
    }

    console.log(`Top ? = ${isTop} length = ${length}`);

    if (isTop) {
      try {
        wait(3);
        const url = await storage()
          .ref(response.data.top[length].uri)
          .getDownloadURL();
        console.log("TOPURL = ", url);
        response.data.top[length].uri = url;
      } catch (error) {
        console.log(error);
      } finally {
        setUserInfo({
          ...response.data,
        });
        console.log(userInfo);
        await updateDB(userInfo);
      }
    } else {
      try {
        wait(3);
        const url = await storage()
          .ref(response.data.bottom[length].uri)
          .getDownloadURL();
        console.log("bottomURL = ", url);
        response.data.bottom[length].uri = url;
      } catch (error) {
        console.log(error);
      } finally {
        setUserInfo({
          ...response.data,
        });
        console.log(userInfo);
        await updateDB(userInfo);
      }
    }
  };

  return (
    <Container>
      <View style={{ flex: 1 }}>
        <Text>상의</Text>
        <TouchableOpacity onPress={() => pickImage(true)}>
          <FontAwesome name="picture-o" size={32} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={showList}>
          <FontAwesome name="th-list" size={32} color="black" />
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1 }}>
        <Text>하의</Text>
        <TouchableOpacity onPress={() => pickImage(false)}>
          <FontAwesome name="picture-o" size={32} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={showList}>
          <FontAwesome name="th-list" size={32} color="black" />
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default Closet;
