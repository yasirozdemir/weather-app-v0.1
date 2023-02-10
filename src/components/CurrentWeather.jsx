import { useSelector, useDispatch } from "react-redux";

const CurrentWeather = () => {
  const APIkey = "add88e3395b3389388ec8f68dad58c25";
  const dispatch = useDispatch();

  dispatch({
    type: "SET_CITY",
    payload: "istanbul",
  });

  const city = useSelector((state) => state.location.city);

  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    ",&APPID=" +
    APIkey;

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        // console.log(data); // didnt delete it in case any need
        const generalInfo = data.main;
        const weatherInfo = data.weather;
        const windInfo = data.wind;

        console.table(generalInfo);
        console.table(weatherInfo);
        console.table(windInfo);
      } else {
        console.error("error");
      }
    } catch (error) {
      console.error(error);
    }
  };

  // fetchWeatherData();

  return (
    <>
      <h1>current weather</h1>
    </>
  );
};

export default CurrentWeather;
