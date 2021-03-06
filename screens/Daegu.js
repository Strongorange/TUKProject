import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components/native";
import * as Location from "expo-location";
import { ActivityIndicator, Dimensions } from "react-native";
import { Fontisto } from "@expo/vector-icons";
import Swiper from "react-native-swiper";

import { UserContext } from "../UserContext";
import CRecommend from "../CRecommend";

const APIKEY = "d36e240854776bb1f3d044a7c0c03543";

const windowHeight = Dimensions.get("screen").height;

const View = styled.View``;

const OutterContainer = styled.View`
  width: 100%;
  height: 100%;
  flex: 1;
`;

const WeatherContainer = styled.View`
  width: 100%;
  height: 100%;
  flex: 1;
`;

const CurrentContainer = styled.View`
  width: 100%;
  /* height: ${windowHeight / 5}; */
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const CurrentTempContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const SlideContainer = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const SlideTime = styled.View``;

const SlideWeatherContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const SlideMainWeather = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 40%;
`;

const SlideForecast = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const SlideWeatherColumn = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
`;

const SlideClothContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: wheat;
  width: 100%;
  flex: 1;
`;

const SlideClothColumn = styled.View`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ClothSeparator = styled.View`
  width: 20px;
`;

const Text = styled.Text`
  color: black;
`;

const Touchable = styled.TouchableOpacity``;

const icons = {
  Clouds: "cloudy",
  Thunderstorm: "lightning",
  Drizzle: "rain",
  Rain: "rains",
  Snow: "Snow",
  Mist: "fog",
  Smoke: "cloudy",
  Haze: "day-haze",
  Dust: "fog",
  Sand: "fog",
  Ash: "fog",
  Squall: "wind",
  Tornado: "wind",
  Clear: "day-sunny",
};

const Daegu = ({ navigation }) => {
  const context = useContext(UserContext);
  const { setUserInfo, userInfo } = context;
  const [ok, setOk] = useState(true);
  const [forecasts, setForecasts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [range, setRange] = useState(0);
  // console.log("From Daegu UserInfo\n\n\n\n\n", userInfo);
  const getWeather = async () => {
    const latitude = 35.87222;
    const longitude = 128.6025;

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&exclude=alerts,minutely,hourly&appid=${APIKEY}&lang=kr`
    ).then((res) => res.json());
    setForecasts(response);
    setLoading(false);
  };

  useEffect(async () => {
    await getWeather();
  }, []);

  return loading ? (
    <View>
      <ActivityIndicator color="black" size="large" />
    </View>
  ) : (
    <OutterContainer>
      <WeatherContainer>
        <CurrentContainer>
          <Text>
            {new Date().getFullYear()} / {new Date().getMonth() + 1} /
            {new Date().getDate()}
          </Text>
          <CurrentTempContainer>
            <Fontisto
              name={icons[forecasts.current.weather[0].main]}
              size={68}
            />
            <View>
              <Text>{forecasts.current.weather[0].description}</Text>
              <Text>???????????? : {forecasts.current.temp} ??C</Text>
            </View>
          </CurrentTempContainer>
          <Text>???????????? : {forecasts.current.feels_like} ??C</Text>
        </CurrentContainer>
        <Swiper
          containerStyle={{
            width: "100%",
            backgroundColor: "tomato",
            flex: 2.5,
          }}
          loop={true}
          autoplay={false}
          showsButtons={false}
          showsPagination={false}
        >
          {forecasts.daily.map((data, index) => (
            <SlideContainer key={data.dt}>
              <SlideWeatherContainer>
                <SlideTime>
                  <Text>
                    {new Date().getFullYear()} / {new Date().getMonth() + 1} /
                    {new Date().getDate() + index + 1}{" "}
                    {/* {console.log(`${JSON.stringify(data)}\n\n`)} */}
                  </Text>
                </SlideTime>

                <SlideMainWeather>
                  <Fontisto name={icons[data.weather[0].main]} size={30} />
                  <Text>{data.weather[0].description}</Text>
                </SlideMainWeather>
                <SlideForecast>
                  <SlideWeatherColumn>
                    <Text>??????</Text>
                    <Text>{data.temp.morn}??C</Text>
                  </SlideWeatherColumn>
                  <SlideWeatherColumn>
                    <Text>??????</Text>
                    <Text>{data.temp.day}??C</Text>
                  </SlideWeatherColumn>
                  <SlideWeatherColumn>
                    <Text>??????</Text>
                    <Text>{data.temp.night}??C</Text>
                  </SlideWeatherColumn>
                </SlideForecast>
              </SlideWeatherContainer>

              <SlideClothContainer>
                <SlideClothColumn>
                  <Text>??????</Text>
                  <CRecommend
                    feels_like={data.feels_like.day}
                    tops={userInfo.top}
                    bottoms={userInfo.bottom}
                    isTop={true}
                  />
                  <Touchable>
                    <Fontisto
                      name="day-sunny"
                      size={25}
                      style={{ color: "tomato" }}
                    />
                  </Touchable>
                </SlideClothColumn>
                <ClothSeparator />
                <SlideClothColumn>
                  <Text>??????</Text>
                  <CRecommend
                    feels_like={data.feels_like.day}
                    tops={userInfo.top}
                    bottoms={userInfo.bottom}
                    isTop={false}
                  />
                  <Touchable>
                    <Fontisto
                      name="snowflake-5"
                      size={25}
                      style={{ color: "skyblue" }}
                    />
                  </Touchable>
                </SlideClothColumn>
              </SlideClothContainer>
            </SlideContainer>
          ))}
        </Swiper>
      </WeatherContainer>
    </OutterContainer>
  );
};

export default Daegu;
