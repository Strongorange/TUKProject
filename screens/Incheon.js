import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import * as Location from "expo-location";
import { ActivityIndicator, Dimensions, Image } from "react-native";
import { Fontisto } from "@expo/vector-icons";
import Swiper from "react-native-swiper";
import Cloth from "../Cloth";

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

const Incheon = () => {
  const [ok, setOk] = useState(true);
  const [forecasts, setForecasts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isRefresh, setIsRefresh] = useState(false);

  const getWeather = async () => {
    const latitude = 37.45639;
    const longitude = 126.70528;

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&exclude=alerts,minutely,hourly&appid=${APIKEY}&lang=kr`
    ).then((res) => res.json());
    setForecasts(response);
    setLoading(false);
  };

  useEffect(() => {
    getWeather();
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
              <Text>현재온도 : {forecasts.current.temp} °C</Text>
            </View>
          </CurrentTempContainer>
          <Text>체감온도 : {forecasts.current.feels_like} °C</Text>
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
                    {new Date().getDate() + index + 1}
                  </Text>
                </SlideTime>

                <SlideMainWeather>
                  <Fontisto name={icons[data.weather[0].main]} size={30} />
                  <Text>{data.weather[0].description}</Text>
                </SlideMainWeather>
                <SlideForecast>
                  <SlideWeatherColumn>
                    <Text>아침</Text>
                    <Text>{data.temp.morn}°C</Text>
                  </SlideWeatherColumn>
                  <SlideWeatherColumn>
                    <Text>점심</Text>
                    <Text>{data.temp.day}°C</Text>
                  </SlideWeatherColumn>
                  <SlideWeatherColumn>
                    <Text>저녁</Text>
                    <Text>{data.temp.night}°C</Text>
                  </SlideWeatherColumn>
                </SlideForecast>
              </SlideWeatherContainer>
              <SlideClothContainer>
                <SlideClothColumn>
                  <Text>상의</Text>
                  <Cloth />
                  <Fontisto
                    name="like"
                    size={25}
                    style={{ color: "skyblue" }}
                  />
                </SlideClothColumn>
                <ClothSeparator />
                <SlideClothColumn>
                  <Text>하의</Text>
                  <Cloth />
                  <Fontisto
                    name="dislike"
                    size={25}
                    style={{ color: "tomato" }}
                  />
                </SlideClothColumn>
              </SlideClothContainer>
            </SlideContainer>
          ))}
        </Swiper>
      </WeatherContainer>
    </OutterContainer>
  );
};

export default Incheon;
