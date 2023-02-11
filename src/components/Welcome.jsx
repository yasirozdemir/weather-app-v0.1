import { format } from "date-fns";
import { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import Search from "./Search";

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
    greetingsMessage(format(current, "k"));
    set_time_date(time_and_date);
  };

  const greetingsMessage = (hour) => {
    return <h1 className="text-center">greetingsMessage</h1>;
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
          <Col xs={10} md={12}>
            {greetingsMessage()}
            <div className="d-flex align-items-center">
              <div>
                <h1>
                  {data.name}, {data.sys.country}
                </h1>
                <h6>{time_date.dateInfo}</h6>
                <h6>{time_date.timeInfo}</h6>
              </div>
              <h1>{data.main.temp + "°"}</h1>
            </div>
            <h6>max: {data.main.temp_max + "°"}</h6>
            <h6>min: {data.main.temp_min + "°"}</h6>
            <h6>sea_level: {data.main.sea_level + "m"}</h6>
            <h6>wind: {data.wind.speed}</h6>
            <h6>wind degree: {data.wind.deg}</h6>
          </Col>
        )}
        <Col xs={10} md={12} className="mx-auto p-0">
          <Search />
        </Col>
      </Row>
    </Container>
  );
};

export default Welcome;
