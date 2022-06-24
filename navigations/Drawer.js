import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import Home from "../screens/Home";
import Seoul from "../screens/Seoul";
import Sejong from "../screens/Sejong";
import Busan from "../screens/Busan";
import Daegu from "../screens/Daegu";
import Incheon from "../screens/Daegu";
import Gwangju from "../screens/Daegu";
import Motor from "../screens/Motor";
import Closet from "../screens/Closet";
import { Text } from "react-native";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components/native";

const OutterView = styled.View`
  padding: 15px;
`;

const View = styled.View`
  margin-bottom: 10px;
`;

const Cities = styled.TouchableOpacity`
  padding-left: 35px;
`;

const CityName = styled.Text`
  font-size: 24px;
`;

const TouchableOpacity = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const DrawerNav = createDrawerNavigator();

const Drawer = () => {
  const [isWeatherOpen, setIsWeatherOpen] = useState(false);
  const [isClosetOpen, setIsClosetOpen] = useState(false);

  const CustomDrawer = (props) => (
    <DrawerContentScrollView {...props}>
      <OutterView>
        <View>
          <TouchableOpacity
            onPress={() => {
              setIsWeatherOpen((state) => !state);
            }}
          >
            <Text style={{ fontSize: 28, marginBottom: 15 }}>
              <Ionicons name="sunny" size={30} color="rgb(255, 181, 98)" />
              {"   "}날씨
            </Text>
            {isWeatherOpen ? (
              <Ionicons name="chevron-down" size={24} color="black" />
            ) : (
              <Ionicons name="chevron-forward" size={24} color="black" />
            )}
          </TouchableOpacity>
          {isWeatherOpen ? (
            <>
              <View>
                <Cities onPress={() => props.navigation.navigate("현재날씨")}>
                  <CityName>현재날씨</CityName>
                </Cities>
                <Cities onPress={() => props.navigation.navigate("서울")}>
                  <CityName>서울</CityName>
                </Cities>
                <Cities onPress={() => props.navigation.navigate("인천")}>
                  <CityName>인천</CityName>
                </Cities>
                <Cities onPress={() => props.navigation.navigate("부산")}>
                  <CityName>부산</CityName>
                </Cities>
                <Cities onPress={() => props.navigation.navigate("세종")}>
                  <CityName>세종</CityName>
                </Cities>
                <Cities onPress={() => props.navigation.navigate("대구")}>
                  <CityName>대구</CityName>
                </Cities>
                <Cities onPress={() => props.navigation.navigate("광주")}>
                  <CityName>광주</CityName>
                </Cities>
              </View>
            </>
          ) : null}
        </View>
        <View>
          <TouchableOpacity onPress={() => setIsClosetOpen((state) => !state)}>
            <Text style={{ fontSize: 28, marginBottom: 15 }}>
              <Ionicons name="md-shirt" size={24} color="#590696" /> {"   "}
              옷장
            </Text>
            {isClosetOpen ? (
              <Ionicons name="chevron-down" size={24} color="black" />
            ) : (
              <Ionicons name="chevron-forward" size={24} color="black" />
            )}
          </TouchableOpacity>
          {isClosetOpen ? (
            <>
              <View>
                <Cities onPress={() => props.navigation.navigate("옷장")}>
                  <CityName>옷 추가</CityName>
                </Cities>
                <Cities onPress={() => props.navigation.navigate("모터")}>
                  <CityName>나의 옷장</CityName>
                </Cities>
              </View>
            </>
          ) : null}
        </View>
      </OutterView>
    </DrawerContentScrollView>
  );

  return (
    <DrawerNav.Navigator
      initialRouteName="현재날씨"
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <DrawerNav.Screen name="현재날씨" component={Home} />
      <DrawerNav.Screen name="서울" component={Seoul} />
      <DrawerNav.Screen name="인천" component={Incheon} />
      <DrawerNav.Screen name="부산" component={Busan} />
      <DrawerNav.Screen name="세종" component={Sejong} />
      <DrawerNav.Screen name="대구" component={Daegu} />
      <DrawerNav.Screen name="광주" component={Gwangju} />
      <DrawerNav.Screen name="모터" component={Motor} />
      <DrawerNav.Screen name="옷장" component={Closet} />
    </DrawerNav.Navigator>
  );
};

export default Drawer;
