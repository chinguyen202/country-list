const countryReducer = (state, action) => {
  const { query, countries } = action;
  switch (action.type) {
    case 'SET_COUNTRIES':
      return {
        ...state,
        countries: action.payload,
      };

    case 'SET_SEARCHING':
      return {
        ...state,
        isSearching: true,
      };

    case 'SET_QUERY':
      return {
        ...state,
        isSearching: true,
        query: action.payload,
      };

    default:
      return state;
  }
};

export default countryReducer;
