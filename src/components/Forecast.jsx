import { useSelector } from "react-redux";

const Forecast = () => {
  const APIkey = "30a1ec4df947d62b3a39aceefef6bb64";

  const city = useSelector((state) => state.search.query);

  const url =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    city +
    ",&APPID=" +
    APIkey +
    "&units=metric";

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

  //   fetchForecastData();

  return <h1>forecast</h1>;
};

export default Forecast;
