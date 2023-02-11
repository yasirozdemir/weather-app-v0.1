import { format } from "date-fns";
import { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import Search from "./Search";

const Welcome = () => {
  const [isFetchStarted, setIsFetchStarted] = useState(false);
  const [time_date, set_time_date] = useState();
  const [data, setData] = useState();

  const fetchWeatherData = async (url) => {
    setIsFetchStarted(true);
    try {
      const response = await fetch(url);
      if (response.ok) {
        const dataFromServer = await response.json();
        setData(dataFromServer);
      } else {
        console.error("error");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const get_UserCoordinates = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const userLocation = position.coords;
      const url =
        "https:api.openweathermap.org/data/2.5/weather?lat=" +
        userLocation.latitude +
        "&lon=" +
        userLocation.longitude +
        "&appid=5cc9f350a2aad6b066e11020e57669da&units=metric";
      fetchWeatherData(url);
    });
  };

  const get_LocalTime_and_Date = () => {
    const current = new Date();
    const time_and_date = {
      dateInfo: format(current, "cccc',' MMM d"),
      timeInfo: format(current, "k':'mm"),
    };
    set_time_date(time_and_date);
  };

  const greetingsMessage = () => {
    return <h1>Hello</h1>;
  };

  useEffect(() => {
    get_UserCoordinates();
    get_LocalTime_and_Date();
    // eslint-disable-next-line
  }, []);

  return (
    <Container>
      {greetingsMessage()}
      {isFetchStarted || <Spinner animation="grow" variant="secondary" />}
      {data && (
        <>
          <h2>
            {data.name}, {data.sys.country}
          </h2>
          <h2>{data.main.temp + "°"}</h2>
          <h2>max: {data.main.temp_max + "°"}</h2>
          <h2>min: {data.main.temp_min + "°"}</h2>
          <h2>sea_level: {data.main.sea_level + "m"}</h2>
          <h2>wind: {data.wind.speed}</h2>
          <h2>wind degree: {data.wind.deg}</h2>
          <h2>{time_date.dateInfo}</h2>
          <h2>{time_date.timeInfo}</h2>
        </>
      )}
      <Search />
    </Container>
  );
};

export default Welcome;
