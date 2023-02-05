import CountryDetail from '../components/CountryDetail';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useApi } from '../hooks/ApiHook';
import { baseUrl } from '../utils/variables';
import '../App.css';
import Header from '../components/shared/Header';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

// Page to display country detail
function Country() {
  //Get params
  const name = useParams().name;

  const { sendRequest } = useApi();
  const [country, setCountry] = useState();

  useEffect(() => {
    //Get country detail from API
    const fetchCountry = async () => {
      try {
        const response = await sendRequest(`${baseUrl}/name/${name}`);

        setCountry(response);
        // console.log('COUNTRY: ', response);
      } catch (e) {
        console.log(e.message);
        alert(e.message);
      }
    };
    fetchCountry();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Header />
          </Toolbar>
        </AppBar>
      </Box>
      <CountryDetail country={country} />
    </>
  );
}

export default Country;
