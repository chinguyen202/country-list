import { createContext, useReducer } from 'react';
import countryReducer from './CountryReducer';

const CountryContext = createContext();

export const CountryProvider = ({ children }) => {
  const initialState = {
    countries: [],
    isSearching: false,
    query: '',
  };

  const [state, dispatch] = useReducer(countryReducer, initialState);

  //Set countries state
  const setCountries = (countries) => {
    dispatch({
      type: 'SET_COUNTRIES',
      payload: countries,
    });
  };

  //Set searching
  const setIsSearching = () => dispatch({ type: 'SET_SEARCHING' });

  //Set query input
  const setQuery = (name) => dispatch({ type: 'SET_QUERY', payload: name });

  return (
    <CountryContext.Provider
      value={{
        countries: state.countries,
        isSearching: state.isSearching,
        query: state.query,
        setIsSearching,
        setQuery,
        setCountries,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
};

export default CountryContext;
