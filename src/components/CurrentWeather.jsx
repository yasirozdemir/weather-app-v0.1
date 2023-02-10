import { useSelector, useDispatch } from "react-redux";

const CurrentWeather = () => {
  const APIkey = "add88e3395b3389388ec8f68dad58c25";

  // I'll keep following line for an advanced version
  //   const coordinates = {
  //     latitude: "10.99",
  //     longitude: "44.34",
  //   };
  //   const unit = "metric";
  //   const url =
  //     "https://api.openweathermap.org/data/2.5/weather?lat=" +
  //     coordinates.latitude +
  //     "&lon=" +
  //     coordinates.longitude +
  //     "&appid=" +
  //     APIkey +
  //     "&units=" +
  //     unit;

  // between line 25 and 35 will be on search page

  const dispatch = useDispatch();

  dispatch({
    type: "SET_CITY",
    payload: "london",
  });

  dispatch({
    type: "SET_COUNTRY",
    payload: "uk",
  });

  dispatch({
    type: "SET_UNIT",
    payload: "metric",
  });

  const city = useSelector((state) => state.location.city);
  const country = useSelector((state) => state.location.city);
  const unit = useSelector((state) => state.search.unit);

  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "," +
    country +
    "&APPID=" +
    APIkey +
    "&units=" +
    unit;

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
