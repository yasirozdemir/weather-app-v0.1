import { useSelector, useDispatch } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";
import {
  BsFillCloudsFill,
  BsCloudSunFill,
  BsCloudSnowFill,
  BsFillCloudRainHeavyFill,
} from "react-icons/bs";
import { HiSun } from "react-icons/hi";
import Forecast from "./Forecast";
import { useParams } from "react-router";

const CurrentWeather = () => {
  const params = useParams();
  const city = params.city;

  const data = useSelector((state) => state.weatherData);

  const dispatch = useDispatch();
  const APIkey = "add88e3395b3389388ec8f68dad58c25";

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
        console.log(data); // didnt delete it in case any need
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

  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={6} className="weatherCard mt-5 px-5 py-3">
            <div>
              <h1>{data.name}, today</h1>
              <h2>{data.main.temp} °C</h2>
              <small>Max {data.main.temp_max} °C</small>
              <small> • </small>
              <small>Min {data.main.temp_min} °C</small>
            </div>
            <div>
              {data.weather[0].main === "Clouds" && (
                <BsFillCloudsFill className="weatherIcon" />
              )}
              {data.weather[0].main === "Clear" && (
                <HiSun className="weatherIcon" />
              )}
              {data.weather[0].main === "Rain" && (
                <BsFillCloudRainHeavyFill className="weatherIcon" />
              )}
              {data.weather[0].main === "Snow" && (
                <BsCloudSnowFill className="weatherIcon" />
              )}
              {data.weather[0].main === "Half Cloud" && (
                <BsCloudSunFill className="weatherIcon" />
              )}
            </div>
          </Col>
        </Row>
      </Container>
      <Forecast />
    </>
  );
};

export default CurrentWeather;
