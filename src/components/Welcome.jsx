import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";

const Welcome = () => {
  const [isFetchStarted, setIsFetchStarted] = useState(false);
  const [data, setData] = useState();

  const fetchWeatherData = async (url) => {
    setIsFetchStarted(true);
    try {
      const response = await fetch(url);
      if (response.ok) {
        const dataFromServer = await response.json();
        setData(dataFromServer);
        console.log(dataFromServer);
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
      console.log(url);
      fetchWeatherData(url);
    });
  };

  const get_LocalTime_and_Date = () => {
    const current = new Date();
    const time_and_date = {
      month_day: current.getDate(),
      week_day: current.getDay(),
      month: current.getMonth() + 1,
      hour: current.getHours(),
    };
    console.table(time_and_date);
  };

  useEffect(() => {
    get_UserCoordinates();
    get_LocalTime_and_Date();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <h1>Welcome</h1>
      {isFetchStarted || <Spinner animation="grow" variant="secondary" />}
      {data && (
        <h4>
          {data.name}, {data.sys.country}
        </h4>
      )}
    </>
  );
};

export default Welcome;
