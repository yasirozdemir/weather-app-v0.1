import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Welcome from "./components/Welcome.jsx";
import WelcomeAlternate from "./components/WelcomeAlternate.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Welcome />
                <WelcomeAlternate />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
