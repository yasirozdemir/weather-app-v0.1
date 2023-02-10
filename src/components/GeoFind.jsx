const GeoFind = () => {
  const APIkey = "add88e3395b3389388ec8f68dad58c25";
  const zip = "23188";

  const url =
    "http://api.openweathermap.org/geo/1.0/zip?zip=" + zip + "&appid=" + APIkey;

  console.log(url);
  return <h1>geofind</h1>;
};

export default GeoFind;
