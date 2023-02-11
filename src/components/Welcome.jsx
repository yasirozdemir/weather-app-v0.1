import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";

const WelcomeAlternate = () => {
  const [isFetchStarted, setIsFetchStarted] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  return (
    <>
      <h1>welcomeAlternate</h1>
      {isFetchStarted || <Spinner animation="grow" variant="secondary" />}
      {data && (
        <h4>
          {data.name}, {data.sys.country}
        </h4>
      )}
    </>
  );
};

export default WelcomeAlternate;
