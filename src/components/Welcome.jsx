import { format } from "date-fns";
import { useEffect, useState } from "react";
import { Col, Container, Row, Spinner, Alert } from "react-bootstrap";
import Search from "./Search";
import { TbTemperatureMinus, TbTemperaturePlus } from "react-icons/tb";
import { FaWind } from "react-icons/fa";
import videoSrc from "../assets/PexelsVideos3535.mp4";

const Welcome = () => {
  const [isFetchStarted, setIsFetchStarted] = useState(false);
  const [time_date, set_time_date] = useState();
  const [data, setData] = useState();
  const [isError, set_isError] = useState(false);

  const fetchWeatherData = async (url) => {
    setIsFetchStarted(true);
    try {
      const response = await fetch(url);
      if (response.ok) {
        const dataFromServer = await response.json();
        setData(dataFromServer);
      } else {
        console.error("error");
        set_isError(true);
      }
    } catch (error) {
      console.error(error);
      set_isError(true);
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
        "&appid=" +
        process.env.REACT_APP_OPEN_WEATHER_API_KEY +
        "&units=metric";
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

  useEffect(() => {
    get_UserCoordinates();
    get_LocalTime_and_Date();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <video
        style={{ height: "100vh", objectFit: "cover" }}
        autoPlay
        loop
        muted
        className="w-100"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
      <Container id="welcome">
        {isFetchStarted || (
          <Row
            className="justify-content-center align-items-center"
            style={{ height: "100vh" }}
          >
            <Spinner animation="grow" variant="light" />
          </Row>
        )}
        {isError && (
          <Row
            className="justify-content-center align-items-center"
            style={{ height: "100vh" }}
          >
            <Alert variant="danger">
              Something went wrong. Please refresh the page! :(
            </Alert>
          </Row>
        )}
        <Row
          className="justify-content-center align-items-center"
          style={{ height: "100vh" }}
        >
          {data && (
            <Col xs={12} md={7}>
              <div className="d-flex align-items-center mb-5">
                <div>
                  <h1 style={{ fontWeight: "700" }}>
                    {data.name}{" "}
                    {(Math.round(data.main.temp * 100) / 100).toFixed(1)}°
                  </h1>
                  <h4 style={{ fontWeight: "600" }}>
                    {time_date.dateInfo} {time_date.timeInfo}
                  </h4>
                  <div className="d-flex align-items-center">
                    <div className="d-flex align-items-center">
                      <TbTemperatureMinus className="mr-1" />
                      <small>
                        {(Math.round(data.main.temp_min * 100) / 100).toFixed(
                          1
                        )}
                        °
                      </small>
                    </div>
                    <div className="d-flex align-items-center ml-2">
                      <TbTemperaturePlus className="mr-1" />
                      <small>
                        {(Math.round(data.main.temp_max * 100) / 100).toFixed(
                          1
                        )}
                        °
                      </small>
                    </div>
                    <div className="d-flex align-items-center ml-2">
                      <FaWind className="mr-1" />
                      <small>
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
              <Search />
            </Col>
          )}
        </Row>
      </Container>
    </>
  );
};

export default Welcome;
