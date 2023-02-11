import { format } from "date-fns";
import { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import Search from "./Search";
import { TbTemperatureMinus, TbTemperaturePlus } from "react-icons/tb";
import { FaWind } from "react-icons/fa";

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

  useEffect(() => {
    get_UserCoordinates();
    get_LocalTime_and_Date();
    // eslint-disable-next-line
  }, []);

  return (
    <Container id="welcome">
      {isFetchStarted || (
        <Row
          className="justify-content-center align-items-center"
          style={{ height: "100vh" }}
        >
          <Spinner animation="grow" variant="light" />
        </Row>
      )}
      <Row
        className="justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        {data && (
          <Col xs={10} md={7}>
            <div className="d-flex align-items-center mb-5">
              <div>
                <h1 style={{ fontWeight: "700" }}>
                  {data.name}, {data.sys.country} ({data.main.temp}°)
                </h1>
                <h4 style={{ fontWeight: "600" }}>
                  {time_date.dateInfo} {time_date.timeInfo}
                </h4>
                <div className="d-flex align-items-center">
                  <div className="d-flex align-items-center">
                    <TbTemperatureMinus className="mr-1" />
                    <small>{data.main.temp_min}°</small>
                  </div>
                  <div className="d-flex align-items-center ml-2">
                    <TbTemperaturePlus className="mr-1" />
                    <small>{data.main.temp_max}°</small>
                  </div>
                  <div className="d-flex align-items-center ml-2">
                    <FaWind className="mr-1" />
                    <small> {data.wind.speed} km/h</small>
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
  );
};

export default Welcome;
