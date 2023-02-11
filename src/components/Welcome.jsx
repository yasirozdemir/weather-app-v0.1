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

  useEffect(() => {
    setCurrentLoc();
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
