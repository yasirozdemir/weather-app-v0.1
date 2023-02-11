import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Welcome from "./components/Welcome.jsx";
import videoSrc from "./assets/PexelsVideos3535.mp4";

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <video
            style={{ height: "100vh", objectFit: "cover" }}
            autoPlay
            loop
            muted
            className="w-100"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Welcome />
                </>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
