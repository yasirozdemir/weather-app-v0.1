import { format } from "date-fns";
import { useEffect, useState } from "react";
import { Row, Alert, Spinner, Col, Button } from "react-bootstrap";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

const Forecast = ({ cityName }) => {
  const [data, set_data] = useState();
  const [isError, set_isError] = useState(false);
  const [isLoading, set_isLoading] = useState(true);
  const [isUserWantMore, set_isUserWantMore] = useState(false);

  const url =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    cityName +
    ",&APPID=5cc9f350a2aad6b066e11020e57669da&units=metric";

  const get_ForecastData = async () => {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const dataFromServer = await response.json();
        set_data(dataFromServer.list);
        set_isLoading(false);
      } else {
        set_isError(true);
        console.error("error");
      }
    } catch (error) {
      set_isError(true);
      console.error(error);
    }
  };

  console.log(data);

  useEffect(() => {
    get_ForecastData();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      {isError && (
        <Row className="justify-content-center align-items-center">
          <Alert variant="danger">
            Something went wrong. Please refresh the page! :(
          </Alert>
        </Row>
      )}
      {isLoading && (
        <Row className="justify-content-center align-items-center">
          <Spinner animation="grow" variant="light" />
        </Row>
      )}
      {data && (
        <>
          <Row className="justify-content-center align-items-center">
            {data.slice(0, 6).map((el, i) => {
              return (
                <Col
                  xs={10}
                  sm={5}
                  md={4}
                  key={i}
                  className="d-flex align-items-center forecastCard pl-4 py-2 mx-1 mt-2"
                >
                  <div>
                    <h3>
                      {(Math.round(el.main.temp * 100) / 100).toFixed(1)}°
                    </h3>
                    <small>
                      {format(new Date(el.dt * 1000), "cccc")}
                      {", "}
                      {format(new Date(el.dt * 1000), "k:mm")}
                    </small>
                  </div>
                  <img
                    src={`http://openweathermap.org/img/wn/${el.weather[0].icon}@2x.png`}
                    alt={el.weather[0].main}
                    className="ml-auto"
                  />
                </Col>
              );
            })}
            {isUserWantMore ? (
              <>
                {data.slice(6, 12).map((el, i) => {
                  return (
                    <Col
                      xs={10}
                      sm={5}
                      md={4}
                      key={i}
                      className="d-flex align-items-center forecastCard pl-4 py-2 mx-1 mt-2"
                    >
                      <div>
                        <h3>
                          {(Math.round(el.main.temp * 100) / 100).toFixed(1)}°
                        </h3>
                        <small>
                          {format(new Date(el.dt * 1000), "cccc")}
                          {", "}
                          {format(new Date(el.dt * 1000), "k:mm")}
                        </small>
                      </div>
                      <img
                        src={`http://openweathermap.org/img/wn/${el.weather[0].icon}@2x.png`}
                        alt={el.weather[0].main}
                        className="ml-auto"
                      />
                    </Col>
                  );
                })}
              </>
            ) : (
              <></>
            )}
          </Row>
          <Row className="justify-content-center align-items-center mt-2 mb-3">
            {isUserWantMore ? (
              <Button
                id="viewMore"
                variant="light"
                className="d-flex align-items-center px-2"
                onClick={() => {
                  set_isUserWantMore(false);
                }}
              >
                <AiFillCaretUp />
              </Button>
            ) : (
              <Button
                id="viewMore"
                variant="light"
                className="d-flex align-items-center px-2"
                onClick={() => {
                  set_isUserWantMore(true);
                }}
              >
                <AiFillCaretDown />
              </Button>
            )}
          </Row>
        </>
      )}
    </>
  );
};

export default Forecast;
