import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Welcome from "./components/Welcome.jsx";
import Weather from "./components/Weather";

function App() {
  return (
    <>
      <BrowserRouter>
        <>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Welcome />
                </>
              }
            />
            <Route path="/weather/:cityName" element={<Weather />} />
          </Routes>
        </>
      </BrowserRouter>
    </>
  );
}

export default App;
