import { Container } from "react-bootstrap";
import { useParams } from "react-router";

const Weather = () => {
  const params = useParams();
  console.log(params.cityName);
  const url = "";

  return (
    <Container id="weather">
      <h1>Weather</h1>
    </Container>
  );
};

export default Weather;
