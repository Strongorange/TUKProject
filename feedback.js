import { ToastAndroid } from "react-native";
import { recommend } from "./Cloth";

const showToast = () => {
  ToastAndroid.show(`평가가 반영되었습니다`, ToastAndroid.SHORT);
};

export const feedback = (isGood) => {
  console.log(isGood);
  showToast();
};
