import React from "react";
import styled from "styled-components/native";

const Image = styled.Image`
  width: 140px;
  height: 140px;
`;

const Cloth = () => {
  return (
    <Image
      source={{
        uri: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80",
      }}
    />
  );
};

export default Cloth;
