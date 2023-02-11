const initialState = {
  location: {
    city: "",
  },
  search: {
    query: "",
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
    case "SET_QUERY":
      return {
        ...state,
        search: {
          ...state.search,
          query: action.payload,
        },
      };

    default:
      return state;
  }
};

export default mainReducer;
