const initialState = {
  userLocation: {
    latitude: null,
    longtitude: null,
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER_LOCATION":
      return {
        ...state,
        userLocation: {
          latitude: action.payload.lat,
          longtitude: action.payload.lon,
        },
      };
    default:
      return state;
  }
};

export default mainReducer;
