import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import { Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { useState, useContext } from 'react';
import CountryContext from '../../contexts/CountryContext';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '30ch',
      '&:focus': {
        width: '40ch',
      },
    },
  },
}));

function SearchBar() {
  const {
    isSearching,
    query,
    setIsSearching,
    setQuery,
    countries,
    setCountries,
  } = useContext(CountryContext);

  const handleChange = (e) => {
    e.preventDefault();
    setIsSearching(true);
    setQuery(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    const filterList = countries.filter((country) =>
      country.name.common.toLowerCase().includes(query.toLowerCase())
    );
    console.log('SEARCH RESULTS: ', filterList);
    setCountries(filterList);
  };

  const clearSearch = (e) => {
    e.preventDefault();
    setQuery('');
    window.location.reload(true);
  };

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search for a country ..."
        inputProps={{ 'aria-label': 'search' }}
        onChange={handleChange}
        value={query}
      />
      <Button variant="contained" onClick={handleClick}>
        Search
      </Button>
      <Button variant="contained" onClick={clearSearch}>
        Clear
      </Button>
    </Search>
  );
}

export default SearchBar;
