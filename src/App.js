import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import CurrentWeather from "./components/CurrentWeather";
import Forecast from "./components/Forecast";
import Search from "./components/Search";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Routes>
          <Route path="/" element={<Search />} />
          <Route
            path="/weather/:city"
            element={
              <>
                <CurrentWeather />
                <Forecast />
              </>
            }
          ></Route>
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
