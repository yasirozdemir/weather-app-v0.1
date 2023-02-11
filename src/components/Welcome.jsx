import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Welcome = () => {
  const dispatch = useDispatch();
  const setCurrentLoc = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      dispatch({
        type: "SET_USER_LOCATION",
        payload: {
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        },
      });
    });
  };

  const userLocation = useSelector((state) => state.userLocation);

  //-------------------------------------------------------------------

  const getCurrentWeatherDataForUser = () => {
    const APIkey = "5cc9f350a2aad6b066e11020e57669da";
    const lat = userLocation.latitude;
    const lon = userLocation.longitude;
    const url =
      "https://api.openweathermap.org/data/2.5/weather?lat=" +
      lat +
      "&lon=" +
      lon +
      "&appid=" +
      APIkey +
      "&units=metric"; //it's possible to make user select units (metric/imperial)

    console.log(url);
  };

  const combinedFunction = async () => {
    await setCurrentLoc();
    await getCurrentWeatherDataForUser();
  };

  useEffect(() => {
    combinedFunction();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h1>setting user loc</h1>
      <h1>{userLocation.longtitude}</h1>
      <h1>{userLocation.latitude}</h1>
    </>
  );
};

export default Welcome;
