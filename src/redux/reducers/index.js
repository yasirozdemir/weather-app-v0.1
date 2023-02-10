const initialState = {
  location: {
    city: undefined,
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
    default:
      return state;
  }
};

export default mainReducer;
