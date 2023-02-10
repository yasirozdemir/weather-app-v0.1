import { BrowserRouter } from "react-router-dom";
import "./App.css";
import CurrentWeather from "./components/CurrentWeather";
import Forecast from "./components/Forecast";

function App() {
  return (
    <BrowserRouter>
      <CurrentWeather />
      <Forecast />
    </BrowserRouter>
  );
}

export default App;
