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
  const [angle, setAngle] = useState(0);

  const showToast = () => {
    ToastAndroid.show(`전송되었습니다`, ToastAndroid.SHORT);
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
          onValueChange={(value) => setAngle(value)}
        />
        <Text>현재 각도 : {angle}</Text>
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
          onValueChange={(value) => setAngle(value)}
        />
        <Text>현재 각도 : {angle}</Text>
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
