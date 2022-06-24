import axios from "axios";
import { ToastAndroid } from "react-native";

export const showToast = (text) => {
  ToastAndroid.show(text, ToastAndroid.SHORT);
};

export const signupRequest = async (username, password, email) => {
  const data = await axios({
    method: "post",
    url: "http://10.0.2.2:3000/user/signup",
    data: {
      username,
      password,
      email,
    },
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  }).catch((error) => console.log(error));
  return data;
};

export const loginRequest = async (username, password) => {
  const data = await axios({
    method: "post",
    url: "http://10.0.2.2:3000/user/login",
    data: {
      username,
      password,
    },
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  }).catch((error) => console.log(error));
  return data;
};
