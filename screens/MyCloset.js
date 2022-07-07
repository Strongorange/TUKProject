import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { getUserFromDB, sendClothIndex } from "../request";
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

const Text = styled.Text`
  font-size: 20px;
`;

const ImageContainer = styled.FlatList``;

const Image = styled.Image`
  width: 150px;
  height: 150px;
`;

const Seperator = styled.View`
  width: 20px;
  height: 10px;
`;

const TouchableOpacity = styled.TouchableOpacity`
  align-items: center;
`;

const MyCloset = () => {
  const context = useContext(UserContext);
  const { userInfo, setUserInfo } = context;

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => sendClothIndex(item.isTop, item.clothIndex)}
      >
        <Image source={{ uri: item.uri }} />
        <Text>꺼내기</Text>
      </TouchableOpacity>
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
          keyExtractor={(item) => item._id}
          horizontal={true}
          ItemSeparatorComponent={() => <Seperator />}
          contentContainerStyle={{
            flexGrow: 1,
            justifyContents: "center",
            alignItems: "center",
          }}
        />
      </Top>
      <Bottom>
        <Text>Bottom</Text>
        {userInfo.bottom.length > 0 ? (
          <ImageContainer
            data={userInfo.bottom}
            renderItem={renderItem}
            keyExtractor={(item) => item._id}
            horizontal={true}
            ItemSeparatorComponent={() => <Seperator />}
            contentContainerStyle={{
              flexGrow: 1,
              justifyContents: "center",
              alignItems: "center",
            }}
          />
        ) : (
          <Text>하의 없음</Text>
        )}
      </Bottom>
    </View>
  );
};

export default MyCloset;
