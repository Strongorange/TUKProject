import React, { useState, createContext } from "react";

export const UserContext = createContext();

const UserStore = (props) => {
  const [userInfo, setUserInfo] = useState({});
  const [isLogin, setIsLogin] = useState(false);
  const [isDevice, setIsDevice] = useState(false);

  return (
    <UserContext.Provider
      value={{
        userInfo,
        setUserInfo,
        isLogin,
        setIsLogin,
        isDevice,
        setIsDevice,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserStore;
