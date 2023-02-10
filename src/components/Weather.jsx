const Weather = () => {
  const APIkey = "add88e3395b3389388ec8f68dad58c25";

  // I'll keep following line for an advanced version
  //   const coordinates = {
  //     latitude: "10.99",
  //     longitude: "44.34",
  //   };
  //   const unit = "metric";
  //   const url =
  //     "https://api.openweathermap.org/data/2.5/weather?lat=" +
  //     coordinates.latitude +
  //     "&lon=" +
  //     coordinates.longitude +
  //     "&appid=" +
  //     APIkey +
  //     "&units=" +
  //     unit;

  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=5cc9f350a2aad6b066e11020e57669da";

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        // console.log(data); // didnt delete it in case any need
        const generalInfo = data.main;
        const weatherInfo = data.weather;
        const windInfo = data.wind;

        console.table(generalInfo);
        console.table(weatherInfo);
        console.table(windInfo);
      } else {
        console.error("error");
      }
    } catch (error) {
      console.error(error);
    }
  };

  //   fetchWeatherData();

  return (
    <>
      <h1>weather</h1>
    </>
  );
};

export default Weather;
