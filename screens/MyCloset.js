import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { getUserFromDB } from "../request";
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

const ImageContainer = styled.FlatList`
  background-color: grey;
`;

const Image = styled.Image``;

const MyCloset = () => {
  const context = useContext(UserContext);
  const { userInfo, setUserInfo } = context;
  const renderItem = ({ item }) => {
    return (
      <View>
        <Text>{item.name}</Text>
      </View>
    );
  };

  useEffect(async () => {
    const data = await getUserFromDB(userInfo._id);
    await setUserInfo({
      ...data.data,
    });
  }, []);
  //
  return (
    <View>
      <Top>
        <Text>top</Text>
        <ImageContainer
          data={userInfo.top}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal={true}
          contentContainerStyle={{ flexGrow: 1 }}
        />
      </Top>
      <Bottom>
        <Text>Bottom</Text>
      </Bottom>
    </View>
  );
};

export default MyCloset;
