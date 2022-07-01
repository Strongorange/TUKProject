import React, { useEffect, useState } from "react";
import styled from "styled-components/native";

const Image = styled.Image`
  width: 140px;
  height: 140px;
`;

const Text = styled.Text``;

const CRecommend = ({ feels_like, tops, bottoms, isTop }) => {
  const [finalTop, setFinalTop] = useState();
  const [finalBottom, setFinalBottom] = useState();

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

  if (finalTop == undefined || finalBottom == undefined) {
    return <Text>Not Hi</Text>;
  } else {
    if (isTop) {
      return (
        <Image
          source={{
            uri: finalTop[Math.floor(Math.random() * finalTop.length)].uri,
          }}
        />
      );
    } else if (!isTop) {
      return (
        <Image
          source={{
            uri: finalBottom[Math.floor(Math.random() * finalBottom.length)]
              .uri,
          }}
        />
      );
    }
  }
};

export default CRecommend;
