import { Col, Container, Row, Alert, Spinner } from "react-bootstrap";
import {
  BsFillCloudsFill,
  BsCloudSunFill,
  BsCloudSnowFill,
  BsFillCloudRainHeavyFill,
} from "react-icons/bs";
import { HiSun } from "react-icons/hi";
import Forecast from "./Forecast";
import { useParams } from "react-router";
import { useState } from "react";

const CurrentWeather = () => {
  const params = useParams();
  const city = params.city;

  const [data, setData] = useState(null);
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(true);

  const APIkey = "eeaa1c4b8d481e6b014d81c4dfe64c54";

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
        const dataFromServer = await response.json();
        setData(dataFromServer);
        setLoading(false);
      } else {
        setError(true);
      }
    } catch (error) {
      console.error(error);
      setError(true);
    }
  };

  useState(() => {
    fetchWeatherData();
  }, []);

  return (
    <>
      <Container>
        <Row className="justify-content-center">
          {data ? (
            <Col xs={12} md={6} className="weatherCard mt-5 px-5 py-3">
              {isLoading && <Spinner animation="grow"></Spinner>}
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
          ) : (
            <Alert variant="danger">Something went wrong!</Alert>
          )}
          {isError && <Alert variant="danger">Something went wrong!</Alert>}
        </Row>
      </Container>
      <Forecast />
    </>
  );
};

export default CurrentWeather;
