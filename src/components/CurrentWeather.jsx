import { useSelector, useDispatch } from "react-redux";
import { Col } from "react-bootstrap";

const CurrentWeather = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.weatherData.weather);

  const APIkey = "95be62a34fd70cd4cf4492858f8a20c1";

  const city = useSelector((state) => state.search.query);
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    ",&APPID=" +
    APIkey +
    "&units=metric";

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        // console.log(data); // didnt delete it in case any need
        dispatch({
          type: "SET_WEATHERDATA",
          payload: data,
        });
      } else {
        console.error("error");
      }
    } catch (error) {
      console.error(error);
    }
  };

  fetchWeatherData();

  console.log(url);
  return (
    <>
      <Col>
        <h1>current weather</h1>
      </Col>
      <Col>
        <button onClick={() => console.table(data.main)}>main</button>
        <button onClick={() => console.table(data.weather)}>weather</button>
        <button onClick={() => console.table(data.wind)}>wind</button>
      </Col>
    </>
  );
};

export default CurrentWeather;
