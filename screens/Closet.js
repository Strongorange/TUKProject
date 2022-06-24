import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  display: flex;
  flex-direction: column;
`;

const Set = styled.View``;

const Top = styled.View``;

const Bottom = styled.View``;

const Closet = () => {
  return (
    <Container>
      <Set>
        <Top></Top>
        <Bottom></Bottom>
      </Set>
    </Container>
  );
};

export default Closet;
