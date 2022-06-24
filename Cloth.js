import React from "react";
import styled from "styled-components/native";

const Image = styled.Image`
  width: 140px;
  height: 140px;
`;

export const shirts = {
  1: {
    uri: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80",
  },
  2: {
    uri: "https://images.unsplash.com/photo-1613852348851-df1739db8201?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  3: {
    uri: "https://images.unsplash.com/photo-1636954935833-80bdb8d2fcb2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
  },
  4: {
    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjo-0pwNeN7UQuN1CVhKwUprJApFfdMqXozA&usqp=CAU",
  },
  5: {
    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5kVagDThvLubI7Kzo3JEJkhplGjA01eQAZg&usqp=CAU",
  },
  6: {
    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnmFPyAAgLDw1H1l85cWwgaXXDx4O11_6gKA&usqp=CAU",
  },
  7: {
    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCfqo_jFJurCBZdPpVqWxfZ8dbVyFDkEVLgA&usqp=CAU",
  },
  8: {
    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMWbg4T-UKP7v1xN0zQUB-lbAMI3tOAWlbyQ&usqp=CAU",
  },
};

export const pants = {
  1: {
    uri: "https://images.unsplash.com/photo-1475178626620-a4d074967452?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
  },
  2: {
    uri: "https://images.unsplash.com/photo-1582552938357-32b906df40cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
  },
  3: {
    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmuBWEiSHxR56G72mHRbFMdgG5ruwzTxeAGg&usqp=CAU",
  },
  4: {
    uri: "https://image.msscdn.net/images/goods_img/20180502/771366/771366_2_500.jpg",
  },
  5: {
    uri: "https://images.unsplash.com/photo-1582552938357-32b906df40cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
  },
  6: {
    uri: "https://images.unsplash.com/photo-1625178494269-c91109fcc711?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80",
  },
  7: {
    uri: "http://belivus.co.kr/web/product/big/202103/a229212397374937b55572386ccec343.jpg",
  },
  8: {
    uri: "https://contents.lotteon.com/itemimage/LO/12/02/70/91/99/_1/20/27/09/20/0/LO1202709199_1202709200_5.jpg/dims/resizef/720X720",
  },
};

const Cloth = ({ index, isShirt }) => {
  return (
    <Image
      source={{
        uri: isShirt ? shirts[index].uri : pants[index].uri,
      }}
    />
  );
};

export default Cloth;
