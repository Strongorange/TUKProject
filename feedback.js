import { ToastAndroid } from "react-native";
import { shirts, pants } from "./Cloth";

const recommend = {
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

let tempHot = 0;
let tempCold = 0;

const showToast = (index) => {
  ToastAndroid.show(`${index} 세트 평가완료`, ToastAndroid.SHORT);
};

export const feedback = (isHot, index) => {
  isHot ? tempHot++ : tempCold++;
  console.log(
    `${isHot ? "hotRating is " + tempHot : "coldRating is " + tempCold}`
  );
  showToast(index);
};
