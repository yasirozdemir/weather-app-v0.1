import { useEffect, useState } from "react";

const Welcome = () => {
  const [url, setURL] = useState("");

  const setCurrentLoc = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      setURL(
        "https:api.openweathermap.org/data/2.5/weather?lat=" +
          lat +
          "&lon=" +
          lon +
          "&appid=5cc9f350a2aad6b066e11020e57669da&units=metric"
      );
    });
  };

  console.log("react", url);

  useEffect(() => {
    setCurrentLoc();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h1>welcome</h1>
    </>
  );
};

export default Welcome;
