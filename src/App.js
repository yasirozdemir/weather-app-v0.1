import { BrowserRouter } from "react-router-dom";
import "./App.css";
import CurrentWeather from "./components/CurrentWeather";

function App() {
  return (
    <BrowserRouter>
      <CurrentWeather />
    </BrowserRouter>
  );
}

export default App;
