import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { UserContext } from "../UserContext";

const View = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  flex: 1;
`;

const Top = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
  background-color: teal;
  width: 100%;
`;

const Bottom = styled(Top)`
  background-color: greenyellow;
`;

const Text = styled.Text``;

const ImageContainer = styled.View`
  width: 100%;
  height: 100%;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
`;

const MyCloset = () => {
  const context = useContext(UserContext);
  const { userInfo } = context;
  //
  return (
    <View>
      <Top>
        <Text>top</Text>
        <ImageContainer>
          {userInfo.top.length > 0 ? (
            <Image source={{ uri: userInfo.top[0].uri }} />
          ) : (
            <Text>상의 없음</Text>
          )}
        </ImageContainer>
      </Top>
      <Bottom>
        <Text>Bottom</Text>
        <ImageContainer>
          {userInfo.bottom.length > 0 ? (
            <Image source={{ uri: userInfo.bottom[0].uri }} />
          ) : (
            <Text>하의 없음</Text>
          )}
        </ImageContainer>
      </Bottom>
    </View>
  );
};

export default MyCloset;
