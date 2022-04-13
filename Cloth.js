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
    uri: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80",
  },
  5: {
    uri: "https://images.unsplash.com/photo-1613852348851-df1739db8201?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  6: {
    uri: "https://images.unsplash.com/photo-1636954935833-80bdb8d2fcb2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
  },
  7: {
    uri: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80",
  },
  8: {
    uri: "https://images.unsplash.com/photo-1613852348851-df1739db8201?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
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
    uri: "https://images.unsplash.com/photo-1625178494269-c91109fcc711?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80",
  },
  4: {
    uri: "https://images.unsplash.com/photo-1475178626620-a4d074967452?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
  },
  5: {
    uri: "https://images.unsplash.com/photo-1582552938357-32b906df40cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
  },
  6: {
    uri: "https://images.unsplash.com/photo-1625178494269-c91109fcc711?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80",
  },
  7: {
    uri: "https://images.unsplash.com/photo-1475178626620-a4d074967452?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
  },
  8: {
    uri: "https://images.unsplash.com/photo-1582552938357-32b906df40cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
  },
};

export const recommend = {
  1: {
    shirts: {
      uri: shirts[1].uri,
    },
    pants: {
      uri: pants[1].uri,
    },
    hotRating: 0,
    coldRating: 0,
  },

  2: {
    shirts: {
      uri: shirts[2].uri,
    },
    pants: {
      uri: pants[2].uri,
    },
    hotRating: 0,
    coldRating: 0,
  },
  3: {
    shirts: {
      uri: shirts[3].uri,
    },
    pants: {
      uri: pants[3].uri,
    },
    hotRating: 0,
    coldRating: 0,
  },
  4: {
    shirts: {
      uri: shirts[4].uri,
    },
    pants: {
      uri: pants[4].uri,
    },
    hotRating: 0,
    coldRating: 0,
  },
  5: {
    shirts: {
      uri: shirts[5].uri,
    },
    pants: {
      uri: pants[5].uri,
    },
    hotRating: 0,
    coldRating: 0,
  },
  6: {
    shirts: {
      uri: shirts[6].uri,
    },
    pants: {
      uri: pants[6].uri,
    },
    hotRating: 0,
    coldRating: 0,
  },
  7: {
    shirts: {
      uri: shirts[7].uri,
    },
    pants: {
      uri: pants[7].uri,
    },
    hotRating: 0,
    coldRating: 0,
  },
  8: {
    shirts: {
      uri: shirts[8].uri,
    },
    pants: {
      uri: pants[8].uri,
    },
    hotRating: 0,
    coldRating: 0,
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
