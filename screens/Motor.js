import React, { useState } from "react";
import { ToastAndroid } from "react-native";
import styled from "styled-components/native";
import Slider from "@react-native-community/slider";

const View = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Text = styled.Text``;

const TouchableOpacity = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  background-color: tomato;
  border-radius: 30px;
`;

const Motor = () => {
  const [topAngle, setTopAngle] = useState(0);
  const [bottomAngle, setBottomAngle] = useState(0);

  const showToast = async () => {
    ToastAndroid.show(`전송되었습니다`, ToastAndroid.SHORT);
    await fetch("http://10.0.2.2:3000", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        topAngle,
        bottomAngle,
      }),
    });
  };

  return (
    <View>
      <View>
        <Text>상단</Text>
        <Slider
          style={{ width: 200, height: 40 }}
          minimumValue={0}
          maximumValue={180}
          minimumTrackTintColor="#ee5253"
          maximumTrackTintColor="#000000"
          step={10}
          onValueChange={(value) => setTopAngle(value)}
        />
        <Text>현재 각도 : {topAngle}</Text>
        <TouchableOpacity onPress={() => showToast()}>
          <Text>전송</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text>하단</Text>
        <Slider
          style={{ width: 200, height: 40 }}
          minimumValue={0}
          maximumValue={180}
          minimumTrackTintColor="#ee5253"
          maximumTrackTintColor="#000000"
          step={10}
          onValueChange={(value) => setBottomAngle(value)}
        />
        <Text>현재 각도 : {bottomAngle}</Text>
        <TouchableOpacity
          onPress={() => showToast()}
          style={{ backgroundColor: "wheat" }}
        >
          <Text>전송</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Motor;
