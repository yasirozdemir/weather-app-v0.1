const initialState = {
  location: {
    city: undefined,
    country: undefined,
  },
  search: {
    unit: undefined,
  },
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
    case "SET_COUNTRY":
      return {
        ...state,
        location: {
          ...state.location,
          country: action.payload,
        },
      };
    case "SET_UNIT":
      return {
        ...state,
        search: {
          ...state.search,
          unit: action.payload,
        },
      };
    default:
      return state;
  }
};

export default mainReducer;
