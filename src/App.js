import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import CurrentWeather from "./components/CurrentWeather";
import Search from "./components/Search";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/weather/:city" element={<CurrentWeather />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
