import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const WelcomeAlternate = () => {
  const userLocation = useSelector((state) => state.userLocation);

  const dispatch = useDispatch();
  const setCurrentLoc = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      dispatch({
        type: "SET_USER_LOCATION",
        payload: {
          latitude: lat,
          longitude: lon,
        },
      });
    });
  };

  console.log("redux", userLocation);

  useEffect(() => {
    setCurrentLoc();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h1>welcomeAlternate</h1>
    </>
  );
};

export default WelcomeAlternate;
