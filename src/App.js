import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Weather from "./components/Weather";

function App() {
  return (
    <BrowserRouter>
      <Weather />
    </BrowserRouter>
  );
}

export default App;
