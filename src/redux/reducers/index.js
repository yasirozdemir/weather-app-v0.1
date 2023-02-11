const initialState = {
  userLocation: {
    latitude: "",
    longitude: "",
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER_LOCATION":
      return {
        ...state,
        userLocation: {
          latitude: action.payload.latitude,
          longitude: action.payload.longitude,
        },
      };
    default:
      return state;
  }
};

export default mainReducer;
