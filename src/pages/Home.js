import { useContext, useEffect } from 'react';
import CountryList from '../components/CountryList';
import { useApi } from '../hooks/ApiHook';
import { baseUrl } from '../utils/variables';
import '../App.css';
import Header from '../components/shared/Header';
import CountryContext from '../contexts/CountryContext';
import SearchBar from '../components/shared/SearchBar';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

function Home() {
  const { sendRequest } = useApi();
  const { countries, setCountries, isSearching } = useContext(CountryContext);

  useEffect(() => {
    const fetchList = async () => {
      try {
        const response = await sendRequest(`${baseUrl}/all`);
        if (!isSearching) {
          setCountries(response);
          console.log('RESPONSE: ', response);
        }
      } catch (e) {
        console.log(e.message);
        throw new Error(`LOADING DATA FAIL - ${e}`);
      }
    };

    fetchList();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Header />
            <SearchBar />
          </Toolbar>
        </AppBar>
      </Box>

      {countries && <CountryList countries={countries} />}
      {(!countries || countries.length === 0) && (
        <h1 className="App">Nothing found! Please try again!</h1>
      )}
    </>
  );
}

export default Home;
