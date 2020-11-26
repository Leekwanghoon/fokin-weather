import React,{ useState, useEffect } from 'react';
import Loading from "./Loading";
import axios from "axios";
import * as Location from 'expo-location';
import Weather from './Weather';

export default function App() {

  const APIkey = "e496e5e86224276264d89dbefcee9605";

  const [loading, setLoading] = useState(true);
  const [temp, setTemp] = useState(0);
  const [latitude1, setlatitude1] = useState(0);
  const [longitude1, setlongitude1] = useState(0);
  const [condition, setcondition] = useState("Clear");

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
      }
      let location = await Location.getCurrentPositionAsync({});
      const { coords: {latitude, longitude} } = location;
      setlatitude1(latitude);
      setlongitude1(longitude);
    })();
  }, []);

  const getWeather = async ( latitude1,longitude1) => {
    const {data} = await axios.get(
      `http://api.openweathermap.org/data/2.5/find?lat=${latitude1}&lon=${longitude1}&appid=${APIkey}&units=metric`
    )

    const temp = data.list[0].main.temp;
    const weatherIcon = data.list[0].weather[0].main;

    setTemp(temp);
    setcondition(weatherIcon);
    setLoading(false);
  }

  getWeather(latitude1,longitude1);
  console.log(condition)
  return loading ? <Loading /> : <Weather temp={temp} condition={condition} />;
}

