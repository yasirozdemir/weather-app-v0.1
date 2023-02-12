import { useState, useEffect } from "react";
import { Container, Col, Row, Alert } from "react-bootstrap";
import { useParams } from "react-router";
import { TbTemperatureMinus, TbTemperaturePlus } from "react-icons/tb";
import { FaWind } from "react-icons/fa";
import { format } from "date-fns";
import Forecast from "./Forecast";

const Weather = () => {
  const [data, set_data] = useState();
  const [isError, set_isError] = useState(false);

  const params = useParams();
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    params.cityName +
    ",&APPID=5cc9f350a2aad6b066e11020e57669da&units=metric";

  const get_WeatherData = async () => {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const dataFromServer = await response.json();
        set_data(dataFromServer);
      } else {
        set_isError(true);
        console.error("error");
      }
    } catch (error) {
      set_isError(true);
      console.error(error);
    }
  };

  useEffect(() => {
    get_WeatherData();
    // eslint-disable-next-line
  }, []);

  return (
    <Container id="weather" className="mt-5">
      {isError && (
        <Row className="justify-content-center align-items-center">
          <Alert variant="danger">
            Something went wrong. Please refresh the page! :(
          </Alert>
        </Row>
      )}
      <Row className="justify-content-center align-items-center">
        {data && (
          <Col xs={12} md={7}>
            <div
              id="weatherCard"
              className="d-flex align-items-center pl-4 py-4"
            >
              <div>
                <h1 style={{ fontWeight: "700" }}>
                  {data.name}
                  {", "}
                  {data.sys.country}{" "}
                  {(Math.round(data.main.temp * 100) / 100).toFixed(1)}°
                </h1>
                <h4 style={{ fontWeight: "600" }}>
                  {format(new Date(data.dt * 1000), "cccc, MMM d")}{" "}
                  {format(new Date(data.dt * 1000), "k:mm")}
                </h4>
                <div className="d-flex align-items-center">
                  <div className="d-flex align-items-center">
                    <small>
                      <TbTemperatureMinus className="mr-1" />
                      {(Math.round(data.main.temp_min * 100) / 100).toFixed(1)}°
                    </small>
                  </div>
                  <div className="d-flex align-items-center ml-2">
                    <small>
                      <TbTemperaturePlus className="mr-1" />
                      {(Math.round(data.main.temp_max * 100) / 100).toFixed(1)}°
                    </small>
                  </div>
                  <div className="d-flex align-items-center ml-2">
                    <small>
                      <FaWind className="mr-1" />
                      {(Math.round(data.wind.speed * 100) / 100).toFixed(1)}
                    </small>
                  </div>
                </div>
              </div>
              <div className="ml-auto">
                <img
                  src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                  alt={data.weather[0].main}
                />
              </div>
            </div>
          </Col>
        )}
      </Row>
      <Forecast cityName={params.cityName} />
    </Container>
  );
};

export default Weather;
