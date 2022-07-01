import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import { sendClothIndex } from "./request";

const Image = styled.Image`
  width: 140px;
  height: 140px;
`;

const Touchable = styled.TouchableOpacity``;

const Text = styled.Text``;

const CRecommend = ({ feels_like, tops, bottoms, isTop }) => {
  const [finalTop, setFinalTop] = useState([]);
  const [finalBottom, setFinalBottom] = useState([]);
  const [finalTopItem, setFinalTopItem] = useState({});
  const [finalBottomItem, setFinalBottomItem] = useState({});

  useEffect(() => {
    if (feels_like > 30) {
      setFinalTop(tops.filter((c) => c.range == 0));
      setFinalBottom(bottoms.filter((c) => c.range == 0));
    } else if (feels_like > 26) {
      setFinalTop(tops.filter((c) => c.range == 1));
      setFinalBottom(bottoms.filter((c) => c.range == 1));
    } else if (feels_like > 22) {
      setFinalTop(tops.filter((c) => c.range == 2));
      setFinalBottom(bottoms.filter((c) => c.range == 2));
    } else if (feels_like > 18) {
      setFinalTop(tops.filter((c) => c.range == 3));
      setFinalBottom(bottoms.filter((c) => c.range == 3));
    } else if (feels_like > 14) {
      setFinalTop(tops.filter((c) => c.range == 4));
      setFinalBottom(bottoms.filter((c) => c.range == 4));
    } else if (feels_like > 10) {
      setFinalTop(tops.filter((c) => c.range == 5));
      setFinalBottom(bottoms.filter((c) => c.range == 5));
    } else if (feels_like > 6) {
      setFinalTop(tops.filter((c) => c.range == 6));
      setFinalBottom(bottoms.filter((c) => c.range == 6));
    } else if (feels_like > 2) {
      setFinalTop(tops.filter((c) => c.range == 7));
      setFinalBottom(bottoms.filter((c) => c.range == 7));
    } else if (feels_like > -2) {
      setFinalTop(tops.filter((c) => c.range == 8));
      setFinalBottom(bottoms.filter((c) => c.range == 8));
    } else if (feels_like > -6) {
      setFinalTop(tops.filter((c) => c.range == 9));
      setFinalBottom(bottoms.filter((c) => c.range == 9));
    } else if (feels_like > -10) {
      setFinalTop(tops.filter((c) => c.range == 10));
      setFinalBottom(bottoms.filter((c) => c.range == 10));
    } else {
      setFinalTop(tops.filter((c) => c.range == 10));
      setFinalBottom(bottoms.filter((c) => c.range == 10));
    }
  }, []);

  useEffect(() => {
    setFinalTopItem(finalTop[Math.floor(Math.random() * finalTop.length)]);
  }, [finalTop]);

  useEffect(() => {
    setFinalBottomItem(
      finalBottom[Math.floor(Math.random() * finalBottom.length)]
    );
  }, [finalBottom]);

  if (isTop) {
    if (finalTopItem) {
      return (
        <>
          <Image
            source={{
              uri: finalTopItem.uri,
            }}
          />
          <Touchable>
            <Text>꺼내기</Text>
          </Touchable>
        </>
      );
    }
    return <Text>상의 없음</Text>;
  } else {
    if (finalBottomItem) {
      return (
        <>
          <Image
            source={{
              uri: finalBottomItem.uri,
            }}
          />
          <Touchable>
            <Text>꺼내기</Text>
          </Touchable>
        </>
      );
    }
    return <Text>하의 없음</Text>;
  }
};

export default CRecommend;
