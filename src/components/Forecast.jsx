import { useSelector } from "react-redux";

const Forecast = () => {
  const APIkey = "add88e3395b3389388ec8f68dad58c25";

  const city = useSelector((state) => state.location.city);
  const country = useSelector((state) => state.location.city);
  const unit = useSelector((state) => state.search.unit);

  const url =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    city +
    "," +
    country +
    "&APPID=" +
    APIkey +
    "&units=" +
    unit;

  console.log(url);

  const fetchForecastData = async () => {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // didnt delete it in case any need
      } else {
        console.error("error");
      }
    } catch (error) {
      console.error(error);
    }
  };

  fetchForecastData();

  return <h1>forecast</h1>;
};

export default Forecast;
