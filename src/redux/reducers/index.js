const initialState = {
  location: {
    city: "",
  },
  search: {
    query: "",
  },
  weatherData: {},
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CITY":
      return {
        ...state,
        location: {
          ...state.location,
          city: action.payload,
        },
      };
    case "SET_QUERY":
      return {
        ...state,
        search: {
          ...state.search,
          query: action.payload,
        },
      };
    case "SET_WEATHERDATA":
      return {
        ...state,
        weatherData: {
          ...state.weatherData,
          weather: action.payload,
        },
      };
    default:
      return state;
  }
};

export default mainReducer;
