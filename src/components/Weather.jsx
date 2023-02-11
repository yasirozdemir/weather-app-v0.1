import { useState, useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { useParams } from "react-router";

const Weather = () => {
  const [data, set_data] = useState();
  const [isError, set_isError] = useState(false);

  const params = useParams();
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    params.cityName +
    ",&APPID=5cc9f350a2aad6b066e11020e57669da&units=metric";

  const get_data = async () => {
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
    get_data();
    // eslint-disable-next-line
  }, []);

  return (
    <Container id="weather">
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

                <div className="d-flex align-items-center">
                  <div className="d-flex align-items-center">
                    <small>{data.main.temp_min}°</small>
                  </div>
                  <div className="d-flex align-items-center ml-2">
                    <small>{data.main.temp_max}°</small>
                  </div>
                  <div className="d-flex align-items-center ml-2">
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
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default Weather;
