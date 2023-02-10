import { Container, Row } from "react-bootstrap";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import CurrentWeather from "./components/CurrentWeather";
import Forecast from "./components/Forecast";
import Search from "./components/Search";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Row>
          <Search />
        </Row>
        <Row>
          <CurrentWeather />
        </Row>
        <Row>
          <Forecast />
        </Row>
      </Container>
    </BrowserRouter>
  );
}

export default App;
