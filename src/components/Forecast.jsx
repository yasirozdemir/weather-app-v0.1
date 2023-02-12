import { useEffect, useState } from "react";
import { Row, Alert, Spinner } from "react-bootstrap";

const Forecast = ({ cityName }) => {
  const [data, set_data] = useState();
  const [isError, set_isError] = useState(false);
  const [isLoading, set_isLoading] = useState(true);

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
      <h1>{cityName}</h1>
    </>
  );
};

export default Forecast;
